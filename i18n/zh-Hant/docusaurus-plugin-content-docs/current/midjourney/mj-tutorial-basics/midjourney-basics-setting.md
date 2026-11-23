---
sidebar_position: 4
---

# Midjourney 基礎設定

## 開啟設定

你可以在 Midjourney 的伺服器，或者 Midjourney Bot 聊天視窗，輸入 /setting，然後按下回車：

![MJ002.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/96534151-4DE5-42BF-9C94-646BC2721A95_2/j6WMLAkvxzyTZzbEf1rmMpqtFtT2prUjZNnY9EXzWusz/MJ002.png)

接著你就能看到這樣的 Bot 訊息：

![MJ001.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/6B5569D4-BAE1-412D-96D6-7584C2324E9B_2/xWwJDemGdDrzk2eLv7CpO63Kg59lRNEvxsu0FsVqHfEz/MJ001.png)

## 版本設定

第一二行是版本切換，你可以根據自己的需要切換不同的版本，MJ Version 1-5 分別表示 Midjourney 的不同版本，切換後，輸出的所有圖，預設都會用該版本生成，各個版本區別請查閱 Midjourney 各版本差異。 2023 年 4 月 5 日，Midjourney 上線了其 Niji 5，所以版本設定截圖裡會有 Niji 4 和 Niji 5 Mode 按鈕，請知悉：

![MJ003.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/CE13A3C7-1774-4628-A294-EB7CC7D3A2DC_2/8diQnpcPGNZn0qdxcSLm6L3GXmaPMJ2BSydE4tE4zZQz/MJ003.png)

## 影象質量設定

第三行是影象質量設定。注意這個引數並不影響解析度。它改變的更多的是圖片的細節，詳細的介紹可以查閱 Midjourney Prompt 高階引數 這一章。

基本上保持預設的就可以了，即圖中的 Base quality：

![MJ004.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/AEBF1130-CAC2-4572-8F3E-8CB05B0485ED_2/5j83pIj8QVQSQwiBCLl5V0wkR4DF3N60yctleHPxJ9oz/MJ004.png)

## 風格設定

第四行風格設定，風格設定簡單理解，這個值越低會更符合 prompt 的描述，數值越高藝術性就會越強，但跟 prompt 關聯性就會比較弱。詳細的介紹可以查閱 Midjourney Prompt 常用引數 這一章。

![MJ005.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/66323141-6050-4DC1-96B8-F2729C1820FD_2/T7y8596xDP36aHSLIZxQTR1qOMdcI5IFKZ3HVeTMkJwz/MJ005.png)

## 隱私設定

這個設定預設是 Public（公開），只有付費的 Pro 使用者可以將其設定為 Stealth Mode（隱私），Basic 和 Standard 都沒法設定為 Stealth，對 Midjourney 付費感興趣的可以看看 訂閱 Midjourney 會員 這一章。

![MJ006.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/3A48B75C-7598-4A6E-ABB0-5BFF8648467D_2/iCl5mmYv464AiQExMPqjgyxDa0FeoHdV88wk22naXzoz/MJ006.png)

## Remix 設定

Remix Mode 目前是一個實驗功能，可能會隨時更改或刪除。

![MJ007.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/1E344F64-0BE2-4754-84BE-132EC3CF6E36_2/RJZ1STPZgasfCFb6xXJorNItZ4M9Aerxq8kHsjXsNyYz/MJ007.png)

我自己使用下來，有點像 blend（混合）圖片模式，使用方法是這樣的。首先在 Remix 模式下，點選 Variation 按鈕，會彈出一個 Prompt 輸入框，輸入完後，模型會在不改變第一張圖的結構的情況下，增加 Prompt 裡提到的內容，比如下面這個例子，第一張圖原來是一堆南瓜，點選 Variation 按鈕輸入 pile of cartoon owls ，就會生成了一張保留原來南瓜圖構圖，但主體換成了卡通貓頭鷹的圖。

![MJ009.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/49DE1F97-F68C-419E-B97A-CDB021F1465A_2/o5PDOmhOdoNDZ2syL8q1CowfD837IPOjrNCMXgjVsGEz/MJ009.png)

## 生成速度設定

這個預設是 Fast Mode，這個只有付費的 Standard 和 Pro 使用者可以設定，其餘使用者都是 Fast Mode。Standard 和 Pro 使用者可以在 Relax Mode 模式下，生成無限圖片。對 Midjourney 付費感興趣的可以看看 訂閱 Midjourney 會員 這一章。

![MJ008.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/46AE64FB-CB90-4486-ABCE-54FDF8DB567A_2/W59qIjpUobNWkbCtlUIdEMckl7axyXKCBUlAiDEmXLgz/MJ008.png)

