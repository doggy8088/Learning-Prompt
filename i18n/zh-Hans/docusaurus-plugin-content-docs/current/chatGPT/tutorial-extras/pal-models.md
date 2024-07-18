---
sidebar_position: 5
---
# PAL Models

PAL Models，全稱為 Program-Aided Language Models。需要各位注意，這個方法，真的非常高階，甚至我覺得有點 Hack，而且經過我的多次測試，我覺得以 ChatGPT 目前的能力，已經不再需要使用這個方法。

但我在很多 PE 的教程裡都有看到這個方法，所以我這裡就簡單介紹一下，這個方法來自於 2022 年，Luyu Gao [等人的研究](https://arxiv.org/pdf/2211.10435.pdf)，根據他們的研究，在 LLM 模型中，即使使用了前面提到的 Chain of Thought 的方法，也未必能拿到答案，論文中使用的 prompt 是這樣的：

```other
Q: Roger has 5 tennis balls. He buys 2 more cans of
tennis balls. Each can has 3 tennis balls. How many
tennis balls does he have now?
A: Roger started with 5 tennis balls. 2 cans of 3 tennis
balls each is 6 tennis balls. 5 + 6 = 11. The answer is 11.

Q: The bakers at the Beverly Hills Bakery baked 200
loaves of bread on Monday morning. They sold 93 loaves
in the morning and 39 loaves in the afternoon. A grocery
store returned 6 unsold loaves. How many loaves of
bread did they have left?
```

論文裡提到，當年他們的模型的 Output 是這樣的：

```other
A: The bakers started with 200 loaves. They sold 93 in
the morning and 39 in the afternoon. So they sold 93 +
39 = 132 loaves. The grocery store returned 6 loaves. So
they had 200 - 132 - 6 = 62 loaves left. 
The answer is 62.
```

如果你現在將這個 prompt 輸入到最新的 ChatGPT 答案已經是正確的：

```other
A: The bakers baked 200 loaves of bread. They sold 93 + 39 = 132 loaves. After the grocery store returned 6 unsold loaves, the bakery had 200 - 132 + 6 = 74 loaves of bread left. The answer is 74.
```

當年 Luyu Gao 的解決方法是在 prompt 裡引入程式碼，並引導模型使用程式碼來運算和思考，最後答案就是正確的：

![PAL001.png](./assets/PAL001.png)

