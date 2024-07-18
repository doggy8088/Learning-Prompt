---
sidebar_position: 4
---

# 技巧 4：增加 Role（角色）或人物

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

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

