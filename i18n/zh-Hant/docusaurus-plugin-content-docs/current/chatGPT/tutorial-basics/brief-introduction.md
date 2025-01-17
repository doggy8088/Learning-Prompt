---
sidebar_position: 1
---

# 簡介

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

## 什麼是 Prompt Engineering？

解釋這個詞之前，首先需要解釋 prompt 這個詞。

簡單的理解它是**給 AI 模型的指令**。

它可以是一個問題、一段文字描述，甚至可以是帶有一堆引數的文字描述。AI 模型會基於 prompt 所提供的訊息，生成對應的文字，亦或者圖片。

比如，我們在 ChatGPT 裡輸入 `What is the capital of China?` (中國的首都是什麼？)，這個問題就是 prompt。

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="What is the capital of China?" initial-response="The capital of China is Beijing. " max-tokens="256" box-rows="3" model-temp="0.7" top-p="1">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>
而 Prompt Engineering（中文意思為提示工程，後縮寫為 PE）則是：

> Prompt Engineering 是一種人工智慧（AI）技術，它透過設計和改進 AI 的 prompt 來提高 AI 的表現。Prompt Engineering 的目標是建立高度有效和可控的 AI 系統，使其能夠準確、可靠地執行特定任務。

看上去很難懂，我試著換個方式讓你理解。

你可能用過不少 AI 相關的產品，你或許會覺得好像只需要會說話、會打字，就能讓 AI 輸出答案。好像不需要什麼技術。

的確，如果你只想讓 AI 給你答案，你不需要額外做什麼，只需要輸入文字即可。但如果你想要得到滿意的答案，甚至精確的答案。就需要用到 PE 這個技術。

因為人類的語言從根本上說是不精確的，目前機器還沒法很好地理解人類說的話，所以才會出現 PE 這個技術。另外，受制於目前大語言模型 AI 的實現原理，部分邏輯運算問題，需要額外對 AI 進行提示（這裡你不需要深究原因，暫時先知道這是個問題即可）。

舉個例子，如果我們在 ChatGPT 裡輸入這樣的一段話：

```other
What is 100*100/400*56?
```

ChatGPT 會回傳一個錯誤的答案 0.4464（注意，如果你用下方的 [Dyno](https://trydyno.com/) 執行，答案應該也是錯誤的，API 版本的回答是 14）：

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="What is 100*100/400*56?" initial-response="To solve this problem, we need to follow the order of operations, which is PEMDAS (parentheses, exponents, multiplication/division, addition/subtraction). In this case, there are no parentheses or exponents, so we perform multiplication and division from left to right before performing addition and subtraction.100*100/400*56 = (100*100)/(400*56) (Perform multiplication and division from left to right)= 10,000/22,400 = 0.4464 (Divide 10,000 by 22,400)Therefore, 100100/40056 = 0.4464." max-tokens="256" box-rows="3" model-temp="0.7" top-p="1">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>

但如果我們對 prompt 進行一些修改，答案則會是正確的。注意，如果你用下方的 Dyno 執行舊版的模型 API 的版本，做了修改後，答案應該還是錯誤的，需要用到 Role Prompting 才能生成正確答案。（這個後續章節會講解）

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="What is (100*100)/400*56?" initial-response="(100*100)/400*56 = (100*100/400)*56 (Perform multiplication and division from left to right, applying the associative property of multiplication)= 25*56 = 1400 (Simplify by performing multiplication)" max-tokens="256" box-rows="3" model-temp="0.7" top-p="1">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>

另外，目前的 AI 產品還比較早期，因為各種原因，產品設定了很多限制，如果你想要繞過一些限制，或者更好地發揮 AI 的能力，也需要用到 Prompt Engineering 技術。這個我們在後續的章節會講到。

所以，總的來說，Prompt Engineering 是一種重要的 AI 技術：

- 如果你是 AI 產品使用者，可以透過這個技術，充分發揮 AI 產品的能力，獲得更好的體驗，從而提高工作效率。
- 如果你是產品設計師，或者研發人員，你可以透過它來設計和改進 AI 系統的提示，從而提高 AI 系統的效能和準確性，為使用者帶來更好的 AI 體驗。

## 需要學習 PE 嗎？

坦率說來，大家對 PE 有一些爭議，

前面一節我解釋了 prompt 的各種好處。但也有人認為這個就像當年搜尋工具剛出來的時候，出現了不少所謂的「搜尋專家」，熟練使用各種搜尋相關的奇技淫巧。但現在這些專家都不存在了。因為產品會不斷迭代，變得更加易用，無需再使用這些技巧。

拿前面提到的數學問題為例，API 版本算出來是 14，但 ChatGPT 的版本則看上去更準確一些，相信不久的將來，我們無需在公式前加括號，它就能回傳正確的結果（2023-03-02）。

但綜合我對產品和使用者的理解，以及各位大佬的看法，我的理解是：

> **現在 AI 的發展還比較早期，瞭解和學習 PE 價值相對比較大，但長遠來看可能會被淘汰。這個「長遠」可能是 3 年，亦或者 1 年。**

OpenAI 的 CEO Sam Altman 在今年 2 月底提到給 ChatBot 寫 prompt 是個非常高槓杆的技能。

![image.png](https://media.heptabase.com/v1/images/b92049c5-ff11-40d4-b38d-e7b45d802985/479cf9aa-2ef3-42d4-8568-f9c323e8b05f/image.png)

但如果你看過 Sam Altman [去年的訪談](https://greylock.com/greymatter/sam-altman-ai-for-the-next-era/)，他在去年 9 月的時候就提過，5 年內我們很可能就不再需要 PE。

![image.png](https://media.heptabase.com/v1/images/b92049c5-ff11-40d4-b38d-e7b45d802985/14c13281-01c5-47b8-9c38-333d9b57783f/image.png)

**從使用者的角度看，我認為學習 prompt 可以讓你更好地使用 ChatGPT 等產品。**

**從產品的角度看，對於使用者來說，我認為 prompt 會是個短期過度形態，未來肯定會有更友好的互動形式，或者理解能力更強的 AI 產品。**

## One More Thing

前特斯拉 AI 負責人 Andrej Karpathy（對了，他之前就在 OpenAI，最近二進宮回 OpenAI 了）今年 1 月底，說了這樣的一句話：

![image.png](https://media.heptabase.com/v1/images/b92049c5-ff11-40d4-b38d-e7b45d802985/d01305ed-7008-4576-95ae-f9751f50a020/image.png)

所以本教程所有案例以及 prompt 都會以英文撰寫。不管 PE 最後會怎樣，看完後，起碼你的英語水平會提高。

所以求求各位不要罵我中英文混雜了。哈哈哈 😁
