---
sidebar_position: 5
---

# 場景 5：錦上添花——改寫內容

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

## 場景介紹

除了從 0 生成內容外，你也可以先給 AI 一段已經寫好的內容，然後讓 AI 對其進行修改，讓 AI 幫你將內容改得更好。實際的場景有如：

1. 翻譯：將中文文件翻譯成英文，亦或者將英文翻譯成中文。關於翻譯，我還想強調，像 ChatGPT 除了能翻譯人類的語言外，還能翻譯程式語言，比如將 Python 程式碼翻譯成 Haskell 程式碼。
2. 修改：修改內容的語法，甄別內容裡的錯別字。
3. 潤色：潤色文章，將內容改成另一種風格。

本章重點介紹下潤色場景，下面這是個潤色的例子。

Prompt（內容來自維基百科）：

```other
Please rewrite the following sentences to make them easier to understand.
OpenAI is an American artificial intelligence (AI) research laboratory consisting of the non-profit OpenAI Incorporated (OpenAI Inc.) and its for-profit subsidiary corporation OpenAI Limited Partnership (OpenAI LP). OpenAI conducts AI research with the declared intention of promoting and developing a friendly AI. OpenAI systems run on the fifth most powerful supercomputer in the world.[5][6][7] The organization was founded in San Francisco in 2015 by Sam Altman, Reid Hoffman, Jessica Livingston, Elon Musk, Ilya Sutskever, Peter Thiel and others,[8][1][9] who collectively pledged US$1 billion. Musk resigned from the board in 2018 but remained a donor. Microsoft provided OpenAI LP with a $1 billion investment in 2019 and a second multi-year investment in January 2023, reported to be $10 billion.[10]
```

它的 Output 是這樣的：

```other
OpenAI is a research organization that focuses on artificial intelligence (AI). It has two parts: a non-profit called OpenAI Incorporated and a for-profit subsidiary called OpenAI Limited Partnership. The organization's goal is to create AI that is friendly and beneficial to humans. OpenAI uses one of the most powerful supercomputers in the world for its research. The organization was founded in San Francisco in 2015 by a group of people who pledged a total of $1 billion, including Sam Altman, Reid Hoffman, Jessica Livingston, Elon Musk, Ilya Sutskever, and Peter Thiel. Musk resigned from the board in 2018 but still supports the organization financially. In 2019, Microsoft invested $1 billion in OpenAI LP, and in January 2023, they made a second investment reported to be $10 billion.
```

## 技巧 4：增加 Role（角色）或人物

前面提到的改寫例子，我在 prompt 里加了 Role 讓其更易於閱讀，這個最佳化方法是 OK 的。也很常用，比如你想將你寫的 Email 改得更商務，則只需要加 business 相關的詞即可。

我再介紹一個更有效的技巧，就是在 prompt 裡增加一些 role（角色）相關的內容，讓 AI 生成的內容更符合你的需求。

比如還是上面那個 rewrite 的例子，我在例子前加入這樣的一段話，我讓 AI 假設自己是一個小學老師，並且很擅長將複雜的內容轉變成 7、8 歲小朋友也能聽懂的話，然後再改寫這段話：

```other
You are a primary school teacher who can explain complex content to a level that a 7 or 8 year old child can understand. Please rewrite the following sentences to make them easier to understand:
```

Output 就變成了下面這樣。不管是用詞，還是語法，看起來都更容易懂了。

```other
OpenAI is a place where people work on making computers really smart. It's like a lab where they do research to make computers do amazing things! They want the computers to be really friendly and helpful to people. They use one of the most powerful computers in the world to do this research. A bunch of really rich and smart people gave money to start this lab. One of them is Elon Musk, but he left in 2018. Another really big company, Microsoft, gave them a lot of money too.
```

另外除了增加角色外，還能讓 AI 模擬某個人，比如讓 AI 以 David Foster Wallace 的風格改寫上述那段話：

```other
Imagine you are the famous writer David Foster Wallace, please rewrite this sentences.
```

Output 是這樣的：

```other
As David Foster Wallace, I might rewrite these sentences to sound more like this:

OpenAI is a lab that studies something called artificial intelligence, which is like when computers can do things that normally only humans can do. They have a big computer that's one of the most powerful in the world, and they're trying to make sure the AI they create is friendly and helpful. The lab was started in 2015 in a city called San Francisco, and a bunch of important people gave them a lot of money to do their research. One of those people was Elon Musk, who stopped working there but still gives them money, and Microsoft also gave them a lot of money recently.
```

關於這個技巧的應用，以及如何更好地使用 AI 提升寫作能力，建議各位閱讀 Nat Eliason 的 [Using ChatGPT as a Writing Coach](https://blog.nateliason.com/p/chatgpt-writing-coach)，他使用 ChatGPT 輔助其寫作，就用到了上述的技巧。

## One More Thing

增加 Role 能極大地提升 AI 回答的準確性，但寫好 Role 並不簡單。而且在日常的使用中，你可能需要用到多個不同 Role 的 Prompt，比如學習要用到的老師，還有翻譯所需要的翻譯助手等等，在 ChatGPT 上頻繁切換不同的 Prompt 可能不太方便，為了解決這兩個問題，我們開發的 [PoleStar Chat](https://github.com/thinkingjimmy/PoleStarChat) 支援 100 多個已預設好 Role Prompt 的 AI Bot，涵蓋教育、寫作、娛樂等主題，你可以像使用其他 IM 軟體一樣，使用 @ 的方式快速呼叫 AI 指令，比如你可以 @ 塔羅牌大師給你測試今日運勢，這樣你就不用去學習和設定繁瑣的 AI Prompt：

![Alt text](assets/polestarchat-bot.png)
