---
sidebar_position: 0
---

# 場景1：問答問題

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

這個場景應該是使用 AI 產品最常見的方法。以 ChatGPT 為例，一般就是你提一個問題，ChatGPT 會給你答案，比如像這樣：

![Q&AExample.png](./assets/Q%26AExample.png)

在這個場景下，prompt 只要滿足前面提到的基本原則，基本上就沒有什麼問題。但需要注意，不同的 AI 模型擅長的東西都不太一樣，prompt 可能需要針對該模型進行微調。另外，目前的 AI 產品，也不是無所不能，有些問題你再怎麼最佳化 prompt 它也沒法回答你。以 ChatGPT 為例：

1. ChatGPT 比較擅長回答基本事實的問題，比如問 `什麼是牛頓第三定律？` 。但不太擅長回答意見類別的問題，比如問它 `誰是世界第一足球運動員？`，它就沒法回答了。
2. 另外，ChatGPT 的資料僅有 2021 年 9 月以前的，如果你問這個時間以後的問題，比如 `現在的美國總統是誰？`它的答案是「截至2021年9月，現任美國總統是喬·拜登（Joe Biden）。」

:::info 🔴 求助
這種直接提問的 prompt ，我們稱之為 Zero-shot prompt。模型基於一些通用的先驗知識或模型在先前的訓練中學習到的模式，對新的任務或領域進行推理和預測。你會在高階篇看到相關的介紹，以及更多有意思的使用方法。
:::

另外，正如我在前面基礎用法一章中提到的那樣，問答場景裡還有一個很重要的玩法，就是多輪聊天，你可以針對某個問題，進行多輪的提問。

## **使用技巧一：To do and Not To do**

:::caution 注意
我介紹的技巧其實在各個場景都可以使用，我將其放在某個場景下解釋，只是因為我覺得它更有可能在這個場景用到。你也會更容易記住這個用法。並不意味著這個技巧僅能在此場景使用。並且多技巧混用也是個不錯的用法。
:::

在問答場景裡，為了讓 AI 回答更加準確，一般會在問題里加條件。比如讓 AI 推薦一部電影給你 `Recommend a movie to me` 。但這個 prompt 太空泛了，AI 無法直接回答，接著它會問你想要什麼型別的電影，但這樣你就需要跟 AI 聊很多輪，效率比較低。

所以，為了提高效率，一般會在 prompt 裡看到類似這樣的話（意思是不要詢問我對什麼感興趣，或者問我的個人訊息）：

```other
DO NOT ASK FOR INTERESTS. DO NOT ASK FOR PERSONAL INFORMATION.
```

如果你在 ChatGPT 裡這樣提問，或者使用 ChatGPT 最新的 API ，它就不會問你問題，而是直接推薦一部電影給你，它的 Output 是這樣的：

```other
Certainly! If you're in the mood for an action-packed movie, you might enjoy "John Wick" (2014), directed by Chad Stahelski and starring Keanu Reeves. The movie follows a retired hitman named John Wick who seeks vengeance against the people who wronged him. It's a fast-paced and stylish film with lots of thrilling action sequences and an engaging story. If you're looking for something that will keep you on the edge of your seat, "John Wick" is definitely worth a watch!
```

但如果你使用的是如 Davinci-003 這樣的模型，它的 Output 很可能是這樣的，它還會問你的興趣愛好：

```other
Sure, I can recommend a movie based on your interests. What kind of movie would you like to watch? Do you prefer action, comedy, romance, or something else?
```

所以 OpenAI 的 API [最佳實踐文件](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api)裡，提到了一個這樣的最佳實踐：

> **Instead of just saying what not to do, say what to do instead. 與其告知模型不能幹什麼，不妨告訴模型能幹什麼。** 

我自己的實踐是，雖然現在最新的模型已經理解什麼是 Not Todo ，但如果你想要的是明確的答案，加入更多限定詞，告知模型能幹什麼，回答的效率會更高，且預期會更明確。還是電影推薦這個案例，你可以加入一個限定詞：

```other
Recommend a movie from the top global trending movies to me.
```

當然並不是 Not Todo 就不能用，如果：

- 你已經告知模型很明確的點，然後你想縮小範圍，那增加一些 Not Todo 會提高不少效率。
- 你是在做一些探索，比如你不知道如何做精準限定，你只知道不要什麼。那可以先加入 Not Todo ，讓 AI 先發散給你答案，當探索完成後，再去最佳化 prompt。

以下是一些場景案例，我整理了兩個 Less Effective（不太有效的） 和 Better（更好的） prompt，你可以自己嘗試下這些案例：

| 場景          | Less Effective                                                                   | Better                                                                           | 原因                                                                |
| ----------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 推薦雅思必背英文單詞    | Please suggest me some essential words for IELTS                                 | Please suggest me 10 essential words for IELTS                                   | 後者 prompt 會更加明確，前者會給大概 20 個單詞。這個仍然有提升的空間，比如增加更多的限定詞語，像字母 A 開頭的詞語。 |
| 推薦香港值得遊玩的地方 | Please recommend me some places to visit in Hong Kong. Do not recommend museums. | Please recommend me some places to visit in Hong Kong including amusement parks. | 後者的推薦會更準確高效一些，但如果你想進行一些探索，那前者也能用。                                 |

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Please suggest me some essential words for IELTS" initial-response="1. Essential: important, necessary, required, indispensable, vital
1. Important: critical, significant, major, key, essential
2. Necessary: essential, required, indispensable, mandatory, needful
3. Required: necessary, essential, mandatory, needed, called for
4. Indispensable: essential, necessary, vital, critical, required" max-tokens="256" box-rows="3" model-temp="0.7" top-p="1">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>
