---
sidebar_position: 3
---

# 開發大語言模型需要什麼？

:::info

本文主要內容來自論文 [A Survey of Large Language Models](https://arxiv.org/abs/2303.18223)。

:::

瞭解完大語言模型的原理之後，你可能會好奇 TA 是如何開發的。開發大語言模型的關鍵是什麼。最近看到不少文章為了流量，甚至連 5G 通訊都說成了是開發大語言模型的關鍵 😂

其實從前麵的原理介紹，不難看出，大語言模型的其中一個關鍵點是資料。

## 關鍵一：資料

訓練資料主要是所謂的語料庫。今天的很多語言模型的語料庫主要有以下幾種：

- Books：BookCorpus 是之前小語言模型如 GPT-2 常用的資料集，包括超過 11000 本電子書。主要包括小說和傳記，最近更新時間是 2015 年 12 月。大一點的書籍語料庫是 Gutenberg，它有 70000 本書，包括小說、散文、戲劇等作品，是目前最大的開源書籍語料庫之一，最近更新時間是 2021 年 12 月。
- CommonCrawl：這個是目前最大的開源網路爬蟲資料庫，不過這個資料包含了大量髒資料，所以目前常用的四個資料庫是 C4、CC-Stories、CC-News 和 RealNews。另外還有兩個基於 CommonCrawl 提取的新聞語料庫 REALNEWS 和 CC-News。
- Reddit Links：簡單理解 Reddit 就是外國版本的百度貼吧 + 知乎。目前開源的資料庫有 OpenWebText 和 [PushShift.io](http://PushShift.io)。
- Wikipedia：維基百科是目前大模型廣泛使用的語料庫。
- Code：一般包含 GitHub 上的開源公共程式碼庫，或者是 StackOverflow 的資料，Google 之前發布過一個叫 BigQuery 的資料集。

實際上，訓練大語言模型會混合使用不同的資料，一般不會只使用單一語料庫。比如 GPT-3 用的混合資料集就包括 Books、CommonCrowl、Reddit Links 和 Wikipedia。

從資料上看，你需要知道一個事實，中文語料在這上面占比很小。ChatGPT 能用中文回答你的問題，只是因為它的語料裡有一些中英文對應的語料，然後模型就像是「懂中文了一樣」，所以更可能的情況是，它先生成了英文內容，再翻譯成中文。如果你去問 ChatGPT 3.5：請給我幾個中文諧音梗，你應該就能理解我說的話了。

以下是 ChatGPT 的回傳結果：

```other
以下是一些中文諧音梗的例子：

我蒸發了，意思是我是 Vaper 了（Vaper發音接近蒸發）。

會有星期天，都得過過來，意思是星期二，星期三，星期四，星期五，星期六，都得過過來。

看到你，我的內心涼了 below zero，意思是涼了半截（below zero與半截音相近）。

蜀道難，難於上青天，賽道難，難於上488（488與『蜀道難』同音）。

洋蔥姑娘，想哭卻哭不出來，因為洋蔥讓我流淚了（洋蔥和『要哭』在中文中的發音很相似）。

雨紛紛，舊故裡草木深，我聽聞，你始終在我身邊深（『身邊深』和『身邊尋』諧音）。

你的車開得真快，一開就是『出租』，意思是『出祖宗』（發音類似）。
```

## 關鍵二：演算法

有了資料之後，你還需要有演算法去做計算，目前最常用的開發大語言模型的演算法函式庫有：

1. Transformers：這是一個使用 Transformer 架構建立的開源 Python 函式庫。
2. DeepSpeed：是由微軟開發的深度學習最佳化函式庫。
3. Megatron-LM：這是由 Nvidia 開發的深度學習函式庫。
4. JAX：它是由 Google 開發的用於高新能機器學習演算法的 Python 函式庫。

## 關鍵三：算力

簡單理解，算力就是計算資源，或者說硬體，OpenAI 沒有說它訓練 GPT-3 語言模型花了多少計算資源。但 OpenAI 的 CEO 暗示硬體成本超過一億美元，如果我們按照 1000 美元一個 GPU 計算，它大約使用了 10 萬個 GPU，以 32 位運算為準，它能提供超過 100 PFLOPS 的算力，也就是每秒 10 億億次運算以上，這大約是阿里雲最大的資料中心的四分之一的算力。

注意，這還是 GPT-3 時的花費。

另外，我還想分享一個觀點，不要以為算力會隨時間的前進，就能跨越。算力永遠會是制約我們瓶頸，因為我們對人工智慧的要求會不斷的提高。
