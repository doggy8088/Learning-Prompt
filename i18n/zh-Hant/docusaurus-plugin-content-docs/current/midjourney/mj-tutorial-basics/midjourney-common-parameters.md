---
sidebar_position: 3
---

# Midjourney Prompt 常用引數

簡單說來，你可以將這些引數理解為官方的固定 prompt 模版，而且這個樣板包含了一些特殊字元，讓模型能百分百保證輸出結果的一致性，並且還能提升 prompt 的準確度和輸入效率。

如果你有用過 ChatGPT ，應該會遇到過這種場景，用了別人一樣的 prompt 樣板，但卻沒法令 ChatGPT 生成相同的內容。

而 Midjourney 因為是圖片類目，相對比較垂直，所以他們將很多圖片類別的通用 prompt 語句做成了樣板，比如圖片長寬比，有 1:1、2:3、4:7 等等，如果你要用 ChatGPT 的使用習慣，就需要在 prompt 裡不斷重複 Aspect Ratios 1:1 等，而且每個人的表達 Aspect Ratios 的方式都不一樣，模型還要去理解人說的話，比較麻煩。

所以 Midjourney 就設計了一些引數，讓你能快速呼叫，比如 Aspect Ratio 這個，就只需要輸入 — ar 1:1 即可。同時因為固定了表達方式，大家要改長寬比，都會用這種方式表達，Midjourney 調整下模型，就能保證輸出的圖片的一致性了。

因為其穩定且必須，所以我才會先教各位引數。

## Version

目前 Midjourney 支援多個版本，最新的版本是 V5 ，跟 ChatGPT 稍微有點不一樣，Midjourney 給我的感覺，並不是版本越大，越厲害，而是擅長的東西不太一樣。相關區別請查閱 Midjourney 各版本差異。

Version 引數使用方式見下表。你也可以在設定裡，調整預設的版本，相關教程請查閱 Midjourney 基礎設定。

| **呼叫方法**  | **使用案例**  | **注意事項**  |
| ------------------------------- | ------------------------------- | ---------------------- |
| 在關鍵詞後加空格，然後帶上版本引數： <ul><li> --v 或者 —v </li> <li>--version 或者 —version</li></ul> | vibrant california poppies --v 5 | 版本僅支援 1、2、3、4、5。 |

因為可以在 prompt 裡直接加版本引數，同時又可以在設定裡設定版本，所以你有可能會遇到如下圖這樣的情況（我想生成版本 1 的圖，但設定裡設定了 5 怎麼辦？）：

<img src={"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/7DD5C76B-0DCD-44EC-B6D1-07BCA89EE201_2/91noyMlT5yLudnp9ySF73dX4kUW0NxBt8QIQxc7b7U8z/MJ015.jpeg"} style={{width: 500}} />

此時模型會按照從左往右的順序執行這些引數，按照上面的例子，其實生成的圖片是 V1 版本，可以跟下面的這個 V5 版本對比下：

<img src={"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/736DE8B9-D8F1-41A2-8FCA-8EB3641BAF8F_2/h7ufgPUePkMqIZY7pEd02Ur8iz20jTz93g4OM43yuuUz/MJ016.jpeg"} style={{width: 500}} />

## Aspect Ratios

第一個引數是圖片的長寬比，使用方式如下，及版本差異如下：

| 呼叫方法    | 使用案例   | 注意事項      | V5       | V4      | V3      | niji    |
| --------- | ---------------- | -------------- | ----------------- | ----------- | ----------- | ----------- |
| 在關鍵詞後加空格，然後帶上長寬比引數： <ul><li> --ar 或者 —ar</li><li> --aspect 或者—aspect</li></ul> | vibrant california poppies --ar 5:4 | <ul><li>預設比例是 1:1。</li><li>比例數需要是整數，比如 1.3:1 是不行的，但 13:10 可以。</li><li> 長寬比會影響生成影象的形狀和構圖。當放大圖片時，有些長寬比可能會發生輕微的改變。比如 --ar 16:9(1.75) 最終生成的圖片可能是 7:4(1.74)。</li></ul> | ✅ 支援任意比例。但2:1以上的寬高比是實驗性的，可能會產生不可預測的結果。 | ✅ 1:2 到 2:1 | ✅ 5:2 到 2:5 | ✅ 1:2 到 2:1 |

另外，長寬比在業界也有最佳實踐：

- 5:4 多用於傳統列印
- 3:2 多用於照片列印
- 7:4 比例接近於 HD TV 的比例，或者是智慧手機

![MJ017.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/F3D78AEA-6A12-478D-81D8-AF6F70281400_2/LDU0zaOYxQx9phJy5CTtKBosekuI5K9eq8biJfQBQg0z/MJ017.png)

## No

這個引數的意思是不要什麼，如果你不想讓 AI 生成的圖片裡出現樹，那就輸入 plants 即可：

| **呼叫方法**               | **使用案例**   | **注意事項** | **V5** | **V4** | **V3** | **niji** |
| --------------------------- | ---------- | -------- | ------ | ------ | ------ | -------- |
| 在關鍵詞後加空格，然後帶上你不想 AI 生成的內容：<ul><li>--no 或者 —no</li></ul> | —no plants | 無        | ✅      | ✅      | ✅      | ✅        |

## Chaos

這個引數跟 ChatGPT 裡的 Top P 有點像，主要控制模型的隨機性，數字越高，約有可能產生一些意想不到的結果，數字越低一致性會更高。看看官方的例子， prompt 是 watermelon owl hybrid。

這是當 Chaos 為 0 的時候，一致性會比較高，西瓜和貓頭鷹的融合的方式，在四次輸出裡都比較類似，另外在單次輸出裡，4張圖（四宮格）的風格相似度也比較高：

![MJ158.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/4662C399-08A2-4409-8E09-7EA2222E2441_2/eTJUesykFLMMYVCc1wo9fPqvXNphYHj56yPEzsJjzQ4z/MJ158.png)

這是 Chaos 為 100 的時候，你會發現多次輸出的融合風格都不太一樣，且即使是在單次輸出裡，4 張圖的風格區別也比較大。如果你是想讓 AI 幫你做一些探索性的事情，我建議初期可以將 Chaos 調高一點，結果會發散一些。

![MJ159.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/CC0853CB-481C-46D2-9B87-33C2BB5AB7C7_2/9zmrjxy918XlvZoKkDbbXG5pt0pWNkzfRnGwfjKxpNUz/MJ159.png)

| **呼叫方法**                                                        | **使用案例** | **注意事項**           | **V5** | **V4** | **V3** | **niji** |
| --------------------------------------------------------------- | -------- | ------------------ | ------ | ------ | ------ | -------- |
| 在關鍵詞後加空格，然後帶數字：<ul><li>--c 或者 —c</li><li>--chaos 或者—chaos</li></ul> | —c 10   | 可以輸入 0 - 100，預設是 0 | ✅      | ✅      | ✅      | ✅        |

## Stylize

這個引數跟 ChatGPT 裡的 Temperature 有點像，主要是控制生成圖片的風格化程度。簡單理解，這個值越低會更符合 prompt 的描述，數值越高藝術性就會越強，但跟 prompt 關聯性就會比較弱。

我們一起看下官方的例子，prompt 都是 colorful risograph of a fig。Risograph是一種數字印刷機，它使用樣板和專用油墨來製作印刷品。Risograph通常用於製作海報、宣傳冊等低成本印刷品。這種印刷機可以產生特殊的色彩和紋理效果，頭三張圖基本上契合 risograph 的風格，但右下角那四張就非常不像了，模型加了很多戲 😂

![MJ160.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/3FA13D77-EA69-469D-AD37-F501F91478B3_2/64RVPjjI2dYrjzq5LdFoanWxyC48CGKgdpUoCeNUL3Az/MJ160.png)

除了在 prompt 裡輸入外，你也可以在設定裡，調整預設的版本，相關教程請查閱 Midjourney 基礎設定。

| **呼叫方法**                                                            | **使用案例** | **注意事項** | **V5** | **V4** | **V3** | **niji** |
| ------------------------------------------------------------------- | -------- | -------- | ------ | ------ | ------ | -------- |
| 在關鍵詞後加空格，然後帶數字：<ul><li>--s 或者 —s</li><li>--stylize 或者—stylize</li></ul> | —s 50    | 預設是 100  | ✅      | ✅      | ✅      | ✅        |

## Niji

這個其實 Niji 模型，是 Midjourney 跟 [Spellbrush](https://spellbrush.com/) 一起開發的。「niji」是日語「にじ」，意思是「彩虹」 或者 「2D」。

它在生成動漫類別的圖片上，比較在行。舉個例子，prompt 是 fancy peacock，左圖是 v5 模型，右圖是 niji v5模型，右圖更偏向於漫畫風格：

![MJ127.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/43A09173-474B-44D9-B4E5-A0F590835D02_2/nGi0CEcjBjAyyw1EQ8jMVHIDUyVR7msxLSPkpKlPWxcz/MJ127.png)

使用方法跟 Version 比較像，只需要在文字 prompt 最後輸入 —niji 即可

| **呼叫方法**                                | **使用案例**                          | **注意事項**                                 |
| --------------------------------------- | --------------------------------- | ---------------------------------------- |
| 在關鍵詞後加空格，然後帶上版本引數：<ul><li>--niji或者 —niji</li></ul> | vibrant california poppies --niji | 部分引數對 Niji 無效。大家可以在完整清單裡檢視哪些引數對 Niji 無效。 |

