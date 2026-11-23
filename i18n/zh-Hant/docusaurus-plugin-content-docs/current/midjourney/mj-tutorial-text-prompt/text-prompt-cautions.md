---
sidebar_position: 1
---

# 撰寫 Text Prompt 注意事項

Midjourney 跟 ChatGPT 在 prompt 的使用上有很多不一樣的地方，本章會詳細介紹下 Midjourney 的 text prompt 區別。

## 語法

首先 Midjourney 基本上是不懂語法的，所以即使你語法錯了，只要詞對了，也能生成圖片。。

另外，不懂語法也導致了另一個問題：prompt 不是越長越好。特別是各種定語從句，它根本就不懂，還不如把指令用逗號隔開，一個個輸入。以下是[官方推薦](https://docs.google.com/document/d/e/2PACX-1vRHOxyEb-ERGi-BdZM8Z_piEP54m4HwO0z8scjmEurEp2UZVA6rFxvyKd15elYVHUWfP1oSA4CQFwxr/pub?utm_source=docs.google.com&utm_medium=tutorial&utm_campaign=midjourney)的語法建議：

- 使用形容詞+名詞的詞序來替換介詞短語。
   - hair flowing in the wind 應該改為 flowing hair
   - a carrot for a nose 應該改為 carrot nose
- 使用非常具體的動詞來替換介詞短語。
   - a girl with a flashlight 應該改為 a girl using a flashlight
   - a girl with a big smile on her face 應該改為 smiling girl

最後， Midjourney 是不會區分大小寫的。

## 單詞

在單詞的部分，Midjourney 跟 ChatGPT 有點類似，它對同義詞的理解也不是很好。比如舉兩個例子：

1. big （大）這個詞，到底指多大？越具象的大，對於 Midjourney 來說，效果越好，比如用 gigantic 就比用通用的 big 好。
2. cats（貓）這個詞是個複數，但到底是多少隻？對於 Midjourney 來說，two cats（兩隻貓）比 cats 更明確。

另外，Midjourney 還能用 emoji 代替單詞（我覺得本質上 emoji 也是單詞），算是一個比較有意思的屬性。

## 與其說不要什麼，不如說要什麼

這個跟 ChatGPT 類似，你應該將你想要的東西說清楚，而不是告訴 Midjourney 不要什麼，如果你想讓 Midjourney 不生成某樣東西，就需要用到 引數 — no。

## 你不說，模型就會隨機給你

因為影象訊息的訊息量遠超過文字，所以很多時候，Midjourney 會隨機填充一些內容給你，它既是缺陷，也是亮點功能。因為當你不在 prompt 裡說明這些詞時，你就能獲得發散的結果。

如果你想減少這些隨機性，就需要用到一些 prompt 框架（或者所謂的樣板），本教程會由淺入深地將這個框架教給你。

## 引數

Midjourney 還有一點跟 ChatGPT 有較大差異，它允許你在 prompt 里加入引數，而且這些引數相對來說一致性都比較好，所以如果你想實現的功能，引數裡支援，那優先使用引數，而不是在主體裡描述。你會在後續的教程中學到如何善用引數。

另外，需要注意，本教程生成的圖片預設為 V5 版本，所以我沒有在 prompt 裡就加 v5 引數。

