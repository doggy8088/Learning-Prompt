---
sidebar_position: 1
---
<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

## 關於本課程

如果你不知道能拿 ChatGPT 或者其他 AI 產品來幹什麼；

如果你不知道如何更好地使用 OpenAI 提供的 API；

那本課程應該能幫到你。

這是一份教你如何更好使好地使用 ChatGPT 和其他 AI 產品的免費課程。

它不是什麼？

- 本課程不是 prompt 大全，如果你預期是找到能直接用的 prompt，建議你谷歌找一找。本課程更多地是教你方法，以及解釋這些方法為何有效。
- 本課程不是權威指南，在這個領域我也只是學生。

## 為什麼會有這個課程？

我最近一直在研究 Prompt Engineering 相關的知識，然後發現大多數課程都是英文的，有些課程作者甚至是 NLP 或者 ML 的專家，內容都非常好，但對我這種初學者來說，閱讀起來還是有點吃力。

所以我就萌生出了自己寫一份課程的想法，想著透過輸出倒逼輸入的方式去學習。

另外，再說說感性的話，每次看到各種專家吐槽中國 AI 發展太功利，都是往錢看，不夠有遠見，所以錯失了不少機會。

坦率說來，我覺得就像當年吐槽中國為了發展經濟不顧環保一樣，我們難道不知道環保很重要嗎？並不是，我們家底就這樣，肯定會有所取捨的。

我們並不缺提出問題的人，與其吐槽當年不努力，不如現在埋頭苦幹，貢獻自己的力量。

**往者不可諫，來者猶可追。**

所以就有了這份課程。

## 如何閱讀？

很感謝你開啟這份課程，但我建議你在閱讀這份課程的時候：

1. **降低預期：** 我不是專家，我也在學習，我只是比你多走了幾步而已。課程裡的內容難免會有遺漏或錯誤。另外，我這份課程，目標讀者是初學者，所以在課程中，為了讓大家更容易理解，難免會用到不太準確的類比，或者用詞，請各位見諒。
2. **不要吝嗇你的反饋：** 如果你遇到無法看懂的地方，亦或者我寫錯了的地方，不妨給我提個 Issue 或者填寫這個表單。我們共同進步，併為 PE 的科普出一份力。
3. **透過輸出倒逼輸入：** 最好的學習方法就是實操，課程裡會提供不少案例，你邊閱讀，邊嘗試。甚至如果可以的話，不妨將你寫的 prompt 透過 Issue 或表單的方式，分享給我，我會將不錯的案例加到文件內。

你可以根據你的需求來閱讀此課程：

- 如果你對 AI 和 Prompt Engineering 不是很瞭解，建議你從基礎篇開始讀起。基礎篇更多的會從使用者的角度教你如何使用 AI 產品（目前僅更新了面向文字類 AI，後續會更新 Midjourney 的內容），或者換句話說，會講更多 prompt 的內容。
- 如果你已經瞭解基本的用法，並且想要學習如何更好地開發 AI 產品，想了解更多 prompt engineering 的內容。那可以直接跳去高階篇閱讀。
- 如果你只是想快速瞭解使用 AI 產品的技巧，你可以直接讀技巧篇，那裡彙總了所有使用技巧。
- 如果你已經瞭解如何使用了，但想了解更多使用場景，可以看看資料 & 產品推薦篇。

另外，我一直認為最好的學習方法，就是實踐，所以我建議你使用 ChatGPT 執行一下課程裡的案例。這樣能夠記得更牢靠一些。

你也可以直接在文件裡執行案例。但需要注意，本文件使用了 [Dyno](https://trydyno.com/) embed 功能，如果你發現你看不到下面的案例，請檢查你的網路，以及允許瀏覽器執行 JS。如果你能看到下面的案例，可以點選裡面的 Generate 按鈕。第一次使用會提示各位輸入你個人的 ChatGPT API key（不用擔心安全，這個 Key 僅會儲存在本地），將 key 輸入進去就可以執行文件裡的案例了。

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="What is the capital of China?" initial-response="The capital of China is Beijing. " max-tokens="256" box-rows="3" model-temp="0.7" top-p="1">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>
最後，在讀文件的過程中，你會看到以下幾個 emoji：

- 🚧 ：標有這個 emoji 代表內容，我還需要進一步去完善補充，但並不影響你的閱讀。我會在後續迭代補充。
- 🆘 ：這個代表我需要各位的幫助，比如有可能是希望大家給我一些某場景的 prompt 案例等。如果你有想法，不妨透過 Issue 或[表單](https://mcousdyt7h.feishu.cn/share/base/form/shrcn8p8MEmbkTiCDyVVPmdUoSg)的方式，向我反饋。
- 🔴：為了讓大家能更平滑地學習高階篇的內容，我會在基礎篇提一些高階篇的概念，當你看到這個紅色圓時，就表示這是高階內容，你可以不深究，先了解即可。

## 如何貢獻一份你的力量？

如果可以的話，不妨在 [Github Page](https://github.com/doggy8088/Learning-Prompt) 上給我點贊，或者將本課程分享給其他人。感謝~

在閱讀這個文件的時候：

1. 遇到錯別字、句子不通順，亦或者讀不懂的地方，歡迎透過 Issue 或[表單](https://mcousdyt7h.feishu.cn/share/base/form/shrcn8p8MEmbkTiCDyVVPmdUoSg)的方式，反饋給我，我會對其進行修改。一經採納會將你的名字羅列在感謝人名單內。
2. AI 的發展非常快，今天寫的課程，很有可能明天就過期了。如果你在文件裡看到有什麼落後的內容，比如某些指令已經不需要了，或指令不生效了，也歡迎透過 Issue 或[表單](https://mcousdyt7h.feishu.cn/share/base/form/shrcn8p8MEmbkTiCDyVVPmdUoSg)的方式，向我反饋。
3. 看到標有 🆘 的內容，然後你又有不錯的想法，不妨透過 Issue 或[表單](https://mcousdyt7h.feishu.cn/share/base/form/shrcn8p8MEmbkTiCDyVVPmdUoSg)的方式，向我反饋你的想法。

在感謝人名單頁面裡，我會羅列幫助過我的朋友們 😁

最後，你也可以給我[買一杯咖啡](https://www.buymeacoffee.com/thinkingjimmy)。或者購買我的其他付費內容產品：

- [播客小捕手：](https://xiaobot.net/p/xiaobushous1?refer=599951e8-47eb-4898-aa3b-a7d0a1a06b0f)如果你喜歡播客，不妨看看，未來我會在上面嘗試更多 AI 相關的想法。
- [隨意搜尋 | 2023](https://xiaobot.net/p/suiyisouxun2023?refer=599951e8-47eb-4898-aa3b-a7d0a1a06b0f) ：我的付費 newsletter，每週更新。

## 感謝

本課程製作過程中，內容和案例參考了以下課程或文件：

1. [Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide)
2. [Learn Prompting](https://learnprompting.org/)
3. [ChatGPT3-Free-Prompt-List](https://github.com/mattnigh/ChatGPT3-Free-Prompt-List)
4. [Natural Language Processing with Deep Learning](http://web.stanford.edu/class/cs224n/slides/cs224n-2023-lecture11-prompting-rlhf.pdf)
5. [edx ChatGPT101](https://www.edx.org/course/introduction-to-chatgpt)
6. [OpenAI Examples](https://platform.openai.com/examples)





