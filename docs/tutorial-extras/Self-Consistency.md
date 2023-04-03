---
sidebar_position: 4
---
<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

Self-Consistency 自洽是對 Chain of Thought 的一個補充，它能讓模型產生多個思維鏈，然後取最多數答案的做為最終結果。

按照 Xuezhi Wang 等人在 [2022 年發表的論文](https://arxiv.org/pdf/2203.11171.pdf) 表明。當我們只用一個邏輯鏈進行最佳化時，模型依然有可能會算錯，所以 XueZhi Wang 等人提出了一種新的方法，讓模型進行多次運算，然後選取最多的答案做為最終結果：

![SelfConsistency001.png](./assets/SelfConsistency001.png)

就我目前使用下來，在 ChatGPT 上，其自洽性非常高，暫時沒有遇到過出現多種答案的情況。查閱多份資料，我發現這個自洽性可能更多的用於評估模型的優劣，好的模型一般自洽性會比較高。

:::info 🆘 
徵集案例
:::
