---
sidebar_position: 1
---

:::info 
本篇博文首發於我的付費專欄[播客小捕手](https://xiaobot.net/p/xiaobushous1?refer=599951e8-47eb-4898-aa3b-a7d0a1a06b0f) ，可以點選檢視該專欄，瞭解下這個專欄是幹啥的，這樣你更能體會到這篇博文的背景。
:::

最近 AI 相關的話題非常火爆，也有部分朋友留言說 AI 出現，我們這種人工 Summary 遲早要被淘汰。也有人說有了 AI，總結起來會不會更快。

所以我想寫一篇番外篇，跟大家分享下以下問題：

1. 目前 AI Summary 工具是如何實現的？又有哪些限制？
2. AI Summary 有哪些缺點？
3. AI Summary 會取代人工 Summary 嗎？
4. 播客小捕手後續的計劃。

## 一些科普

聊對比前，我想先科普一些 ChatGPT 相關的知識，各位瞭解這些知識後，才能更好地對比 AI Summary 和人工 Summary。

* Token：這個指的是 OpenAI 處理文字的基本單位，可以是單詞或者字元的片段。例如，“hamburger” 被分成 “ham”、“bur” 和 “ger” 三個 Token，而 “pear” 是一個 Token。1個 Token 大約相當於 4 個字元或者 0.75 個英文單詞。

* 一些限制：
  * OpenAI 的模型有一個固定的 Token 限制，例如 GPT-3 的 Davinci 模型最多可以處理2049 個 Token，大約 1500 個英文單詞。最新 Turbo 模型大約是 4,096 個 Token，大約是 3000 個英文單詞。
  * 另外這個限制還有一個細節，Token 限制的計數包含輸入和輸出的文字。換句話說，不是說我輸入 3000 個英文單詞，然後 OpenAI 能返回 3000 個英文單詞的結果，而是輸入+輸出總共不能超過 3000 個英文單詞。
  * 文字限制。目前 OpenAI 的 GPT-3 模型只能處理文字。

懂了這幾個限制後，我再講解下，市面上的影片/Podcast Summary 是怎麼做的。實際上你能直接用 ChatGPT 模擬這些外掛。

首先，因為限制 #3 ，需要將影片/Podcast 的音訊轉為文字。這一步因為 Youtube 有 Transcript，所以很多產品會直接拿 Transcript 來用。

第二步將 Transcript 和 Prompt（一般是「請總結以下內容」）一起傳給 OpenAI 。傳給 Open AI 的東西類似這樣，你也可以在 ChatGPT 上試試，只需要將下方 Transcript 的內容替換成 Youtube 上的真實 Transcript 即可：

```
Please summarize the following sentences.
Text: """
Transcript
"""
```

最後 OpenAI 就會返回 Summary 結果。

但某些影片和 Podcast 會非常長，一集可能有幾萬字，因為 #2 的限制，根本沒法將一集完整的 Transcript 都傳給 OpenAI，所以不同的產品，會有不同的處理方式。目前常見的處理方式是「裁切總結」，將 Transcript 切成多個時長為 5 分鐘的 Transcript ，再傳給 OpenAI ，讓 OpenAI 先總結一遍，然後再將這些段落總結，傳給 OpenAI ，再讓它總結一遍，產生最終的總結內容。

## 目前 AI Summary 的缺點

瞭解完這些 Summary 應用的原理後，目前這類產品的缺點也就相對好理解了：

* **缺點一：內容依賴 Transcript。**

某些沒有 Transcript 的內容基本沒法 Summary。比如短影片，或者 vlog，很多都是隻有畫面，沒有說話內容。這些都沒法 Summary。

當然應該沒有人需要短影片 Summary 吧，內容已經夠快餐了 😂

* **缺點二：內容品質依賴 Transcript 品質。**

如果 Transcript 品質不好，AI 總結出來的內容會非常奇怪，舉個例子，如果 Transcript 包含了背景音樂裡的歌詞，AI 就會總結這段歌詞。人看到就會很奇怪，突然中間來了一段「愛拼才會贏」的總結。

* **缺點三：Token 限制導致內容缺失。**

人一分鐘大約能講 125 - 150 個英文單詞，180 - 200 箇中文。按照現在人們看影片的習慣，影片內容一般不會超過 15 分鐘，換算下來大約是 2200 個英文單詞左右，或者 3000 箇中文字，不過很多影片都不會一直說話，所以字數會少於這個數。

所以很多做影片 AI Summary 就會簡單處理 Token 限制的問題，比如只傳 2500 個英文單詞，然後讓 AI 返回 500 個英文單詞的內容。這種處理方式就比較粗暴（但並不是不能用，哈哈哈），對於長影片來說，就會缺失後半段的總結，如果後半段有反轉，那總結就會是完全錯誤的。

比如 [Glarity](https://glarity.app/) 這個外掛，給 Knowledge Project 141 的總結是這樣的：

> 這段影片中，Kunal Shah談到了他從家族企業中學到的幾個成功做生意的要素。他們中的大多數人來自於商人的社群，這種社群的人更願意承擔風險、具有更低的羞恥感、更能理解事物的價值、更能發現新的趨勢、並且願意幫助自己的社群成功。這些特點讓這些人更有可能在商業上獲得成功。

對比看看[我的總結](https://xiaobot.net/post/1cef6b4e-da54-4a56-a517-8b2e86fabc4c)，這段總結應該只輸入了前15分鐘的內容。（BTW，我這裡並不是說這樣設計不行，因為 Glarity 支援自訂 prompt，它是我目前常用的 AI 外掛之一，只是覺得它能更好 😁 ）

* **缺點四：層層總結導致內容缺失。**

當然也不是所有人都那麼做，切分總結能部分解決缺失的問題，但切分時長就很關鍵，如果太長，比如 15 分鐘，3000 個英文單詞，AI 就沒法返回總結了。

另外，這種層層總結，也會導致資訊缺失。第一次總結，類似將照片切成一塊塊，然後逐個打碼，最後再將這些打碼後的塊，組合成一張圖，再打一次碼，內容少了，也更不清晰了。

* **缺點五：AI 並不知道什麼是重點。**

如果前面 4 個缺點，在技術上未來應該能解決（比如 OpenAI 放開先知道 8K 個 Token），但最後的一個缺點，相對來說，我還沒想到如何解決，舉個實際的例子。

還是以 Knowledge Project 141 為例，Summarize.tech 的 [Summary](v) 方式是將影片切分成 5 分鐘的一段，然後再對產生的內容進行二次總結。我們一起看看這個結果：

> 00:15:00 The author discusses how he has learned that many concepts in western society are not applicable to Asian societies, such as the value of time. He also discusses how Hinduism is not as scalable as other religions because it is not standardized.

裡面提到一個 “such as the value of time”，我在聽這一段的時候，我認為這段內容很精彩。因為這段 Kunal 聊的是「為何很多工具產品在亞洲賺不到錢」，他解釋原因是對於許多亞洲國家來說都是如此，時間作為一個價值概念從未被教導過。

但如果你看上面的 AI 總結，其實省略了很多內容，並且吸引力不夠，如果我讀得快一點，很可能就會忽略它。再看看另一個例子：

> 00:35:00 In India, less than six percent of urbanIndian women have financial income of their own, and 94 of them are currently taking care of kids or taking care of the family and not contributing to the labor force. Another interesting thing is 95 of all financial products in India are bought by men. Credit cards, car loans, and home loans are all by men, while investments are only by men. India has now nearly two thousand dollars per capita income yearly, but if you remove the top 30 million families or 30 million individuals, the per capita income would drop to maybe 600. This is why many western markets love to come to India, because its per capita income is never going to beat and grow like China's because before China started becoming affluent, 96 of Chinese urban women were working because of the one child policy which forced it to become a general neutral society. However, in India, female participation of labor is going down. The per capita income is not going to grow and therefore a lot of foreign companies love to come to India because India is the "dau farm of the world." All the big internet giants, like Facebook, Twitter, and YouTube, will say "I have 500 million billion users in India, but look at the arpu and peel the ar

首先這個總結應該是 Token 到達上限，最後沒有輸出完。讓後拿這個總結和上一個總結做對比，你應該會和我一樣有相同的疑惑，為何這段總結更長？更詳細？

我自己也嘗試寫了一些 prompt，這一塊即使 ChatGPT 也做不到很好的一致性（換句話說，你反覆提問一樣的問題，它會給你返回不同的答案），暫時不知道它以什麼標準進行總結。

但我也測試出來了一些有意思的東西，最後會跟大家分享。

## AI Summary 會取代人工 Summary 嗎？

我的想法是：
1. 值得總結的，它暫時還做不好。
2. 它能做好的，總結的意義感覺也不是很大。

我目前嘗試下來，AI 最擅長總結的是那些科技產品評測，特別是像鍾文澤做的那些開箱評測，總結準確還很全。但我想說這些評測你會只看文字版本嗎？

我不太會。

所以我也很好奇，這些 AI Summary 工具的次留是怎樣的。

我反而覺得可能將這些結果重新組裝，做成新產品，可能還有意思一些。

比如將全網評測 iPhone 14 的影片都總結一遍，然後將這些總結結果再做一些統計，那我就能知道各種 UP 主是怎麼評價 iPhone 14 的，讚的人有哪些，讚的地方有哪些，踩的人又有哪些，又踩了什麼。

現在的 AI 產品玩法，都還是脫離不了文字的互動方式，以及直接跟 AI 互動的方式。為何不試試用 AI 的結果做產品？以前要想搞一個什麼值得買很難，需要很多人力，現在會不會簡單一些呢？

再說說它暫時做不好的內容，我可能會用它來做輔助，但用它做輔助也有兩個擔憂：

1. 我不知道它總結的全不全。
2. 被動學習變成主動學習：這個跟第一條有點關係，純聽，或者看文字稿，我大部分時間是被動學習，我能很快判斷這個是不是值得記錄的，但現在它總結給我，我就要主動去想它總結的內容是什麼，是不是值得細聽。

所以就我目前測試下來，文字稿對我的輔助作用最大。其次才是 AI 總結，它幫到我的更多的是定位重點，作為

不過我相信未來應該會有更好的解決方案，比如未來應該會支援更多媒介，並且 Token 的限制也會放寬。

## 後續的計劃

其實我和 fonter 在構思播客小捕手的時候，我們就有用 AI 的想法，但那個時候 ChatGPT 才剛出，還有很多限制，價格也很貴。

所以我們就打算用小報童做個 MVP 試試，先人肉做一些看看，躬身入局，實際去做了，才能發現問題。另一方面也嘗試用各種自動化工具解決效率問題，比如我們就高度依賴飛書的多維表格，很多內容都是程式自動化抓取和處理的。

所以，後續我們會嘗試更多 AI 工具，甚至自己去搭建一些 AI 產品。

## One More Thing

前面有提到，我在測試 prompt 的時候，測試出了一些有意思的東西。

是這樣的。

我在前面提到 AI Summary 不知道什麼是重點。但如果你傳給 AI 的 Prompt 裡包含一些案例，它就能根據你給的案例做一些最佳化。某種程度上是告知它什麼是重點。

簡單說，類似這樣的：

```
In India, less than six percent of urbanIndian women have financial income of their own, and 94 of them are currently taking care of kids or taking care of the family and not contributing to the labor force. Another interesting thing is 95 of all financial products in India are bought by men. Credit cards, car loans, and home loans are all by men, while investments are only by men. India has now nearly two thousand dollars per capita income yearly, but if you remove the top 30 million families or 30 million individuals, the per capita income would drop to maybe 600. 

Highlight: less than six percent of urbanIndian women have financial income of their own.
```

然後下一段話，你就可以這樣問，ChatGPT 會返回它理解的 Highlight 內容給你：

```
This is why many western markets love to come to India, because its per capita income is never going to beat and grow like China's because before China started becoming affluent, 96 of Chinese urban women were working because of the one child policy which forced it to become a general neutral society. However, in India, female participation of labor is going down. The per capita income is not going to grow and therefore a lot of foreign companies love to come to India because India is the "dau farm of the world." 

Highlight: 
```

未來基於 AI 做一個專屬於個人的推薦或者 Summary 系統是有可能的。只是你需要給不少初始化資料給模型。

比如人對某篇文章的開頭段落進行高亮，後續 AI 就能自動根據你的高量結果，高亮文章後續可能被高亮的內容。當收集的資料足夠多，新的文章都能自動高亮了。