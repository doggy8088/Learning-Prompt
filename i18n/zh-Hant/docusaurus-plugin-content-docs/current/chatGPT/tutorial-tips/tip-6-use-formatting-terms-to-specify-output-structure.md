---
sidebar_position: 6
---

# 技巧 6：透過格式詞闡述需要輸出的格式

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

這個技巧是技巧 2 的變種，比較常用於生成文字場景。其實在場景 7 中，你也可以用到這個技巧。

假設你想讓 AI 總結一篇非常非常長的文章，並且按照特定格式給你總結，那你可以在文章前面明確輸出的格式（為了不佔用太多顯示空間，我省略了正文內容，你可以在 OpenAI 的 Playground 看到[完整案例](https://platform.openai.com/playground/p/3U5Wx7RTIdNNC9Fg8fc44omi)）。它的意思其實是讓 ChatGPT 按 Topic 總結，每個 Topic 裡按照無序清單（就是裡面那個 -）將每個 Topic 的主要觀點羅列出來。

```other
Summarize the main points of the following speech
Use the following format:
Topic 1: <topic_name_1>
- <point_1>
..
Topic 2: <topic_name_2>
- <point_1>
..
Topic 10: ..

Text: """
Thank you so much, Fred, for that lovely introduction. And thanks to the Atlantic Council for hosting me today.

The course of the global economy over the past two years has been shaped by COVID-19 and our efforts to fight the pandemic. It」s now evident, though, that the war between Russia and Ukraine has redrawn the contours of the world economic outlook. Vladimir Putin」s unprovoked attack on Ukraine and its people is taking a devastating human toll, with lives tragically lost, families internally displaced or becoming refugees, and communities and cities destroyed.
...

"""
```

Output 是這樣的：

```other
Topic 1: The war in Ukraine
- The war is taking a human toll with lives lost, families displaced, and communities destroyed
- The Biden administration is committed to holding Russia accountable
- The war has violated international law and is a challenge to the international order

Topic 2: The global economy
- The war is having negative impacts on the global economy, including higher commodity prices and inflation
- The IMF and World Bank will be focused on helping developing countries weather the impacts of the war
- The ultimate outcome for the global economy depends on the path of the war
```

關於這個場景和技巧，我想再解釋一下為什麼潛力很大。

根據我使用各種 Summary 或者訊息提取的產品，我發現 AI 並不知道什麼是重點，所以在總結的過程中，會丟失很多內容。如何引導 AI 進行總結，就變得非常重要，且具有一定的可玩性。

---

感謝 [AlexZhangji](https://github.com/AlexZhangji) 的分享，TA 提到一個使用此技巧的場景：

使用此技巧可以使輸出更結構化。比如針對一篇文章進行問答，你不僅想要得到一個答案，也希望 ChatGPT 的答案符合特定的格式，方便你下一步進行自動化。

比如問 "這裡的債券 duration 是多少？". 正常 GPT 模型的答案可能是 "債券 duration 是 4 年" 或 "duration 4 年"。
ChatGPT 的回答不穩定，且不方便繼續處理。

解法：
我們可以透過這個技巧，讓模型理解我們預期的格式。並在此基礎上，為了方便自動化，讓模型輸出特定的結構化答案 (比如 JSON/Markdown 等)。
也可以方便整合更多的額外要求，比如增加一個"confidence level", 並透過 prompt 的形式指定這些數值的格式。

比如：

```other
{context}
Question: What is bond duration mentioned here.
Answer template (Valid JSON format):
{{
"duration": $duration_numeric_value_in_year,
"confidence_level": $answer_confidence_level_high_modrate_or_low,
}}
Answer:
```

---

在吳恩達的 ChatGPT Prompt Engineering [課程](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)中，有提到一個這個技巧的高階用法，在讓 AI 按照特定格式輸出內容的同時，還讓 AI 根據內容是否滿足特定條件，來判斷應該輸出什麼結果，下面課程中的案例的 prompt（注意這個是 python 程式碼，有一些轉義字元，可以不用管）：

```python
You will be provided with text delimited by triple quotes.
If it contains a sequence of instructions, \
re-write those instructions in the following format:

Step 1 - ...
Step 2 - …
…
Step N - …

If the text does not contain a sequence of instructions, \
then simply write \"No steps provided.\"

\"\"\"{text}\"\"\"
```

簡單解釋下，這個 prompt 分成兩步：

讓 AI 將輸入的 text 轉為步驟（就是 prompt 裡的 Step 1、2）

然後還增加了一個判斷，如果輸入的 text 裡沒有 step 的內容，那麼就輸出 No Step

假如輸入的 text 是一個泡茶的步驟介紹：

```other
Making a cup of tea is easy! First, you need to get some \
water boiling. While that's happening, \
grab a cup and put a tea bag in it. Once the water is \
hot enough, just pour it over the tea bag. \
Let it sit for a bit so the tea can steep. After a \
few minutes, take out the tea bag. If you \
like, you can add some sugar or milk to taste. \
And that's it! You've got yourself a delicious \
cup of tea to enjoy.
```

那麼 AI 輸出的內容是這樣的（因為內容中包含了步驟式的內容）：

```other
Step 1 - Get some water boiling.
Step 2 - Grab a cup and put a tea bag in it.
Step 3 - Once the water is hot enough, pour it over the tea bag.
Step 4 - Let it sit for a bit so the tea can steep.
Step 5 - After a few minutes, take out the tea bag.
Step 6 - Add some sugar or milk to taste.
Step 7 - Enjoy your delicious cup of tea!
```

但如果我們輸入的是這樣的 text：

```other
The sun is shining brightly today, and the birds are \
singing. It's a beautiful day to go for a \
walk in the park. The flowers are blooming, and the \
trees are swaying gently in the breeze. People \
are out and about, enjoying the lovely weather. \
Some are having picnics, while others are playing \
games or simply relaxing on the grass. It's a \
perfect day to spend time outdoors and appreciate the \
beauty of nature.
```

從內容上看，這段話，沒有任何步驟式的內容，所以 AI 的輸出是這樣的：

```other
No steps provided.
```
