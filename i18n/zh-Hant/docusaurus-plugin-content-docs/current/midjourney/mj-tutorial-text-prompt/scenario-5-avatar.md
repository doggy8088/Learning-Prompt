---
sidebar_position: 6
---
# 場景5：頭像

在 Stock Photo 一章中，介紹了 img2img 的方法，這個方法除了解決 Stock Photo 的那幾個問題外，還很適合多個場景。

本章會著重介紹用這個方法生成的頭像的 prompt。並且從本章開始會逐步豐富我們的 prompt 結構，使其更加完整。

## 注意事項

在介紹 img2img 的應用前，我想強調一下：

1. 不要在 Discord Midjourney 公開群上傳自己的照片！這樣你的照片會被公開群裡的所有人看見。建議使用 Midjourney Bot。
2. 另外，非 pro 付費會員，生成的圖片都會被其他會員看見。但你可以在生成完頭像後，刪掉生成的圖片。如果還不知道如何使用 Bot ，及刪除照片，請看基本操作篇。
3. img2img 的操作我就不過多贅述了。如果你還不太清楚，可以看基本操作篇，以及 Stock Photo 那篇。

## 3D 卡通頭像

第一個要分享的是卡通頭像。首先跟大家強調下：

1. 我基本上把國內國外的生成頭像教程都看過，並試過一遍，還跟 Midjourney 社群的人也交流過。我的理解是，以目前 V5 的能力，不管你如何調整 prompt ，想用 img2img 方法生成一張非常像原圖的圖片，基本靠運氣，即使用了前面介紹的技巧七方法，也只是提高機率。如果你有令頭像非常像的方法，不妨透過 Issue 分享給我，我會署下你的名字，並分享給大家。
2. 各位在學習的過程中，如果發現生成的圖片不像原圖，也不需要氣餒。這是正常的。
3. **你可以透過我分享的方法，生成一張有原圖神韻的卡通頭像。注意肯定不會非常像原圖。**

在 prompt 里加上原圖連結（建議使用證件照，或者背景比較單一的照片，這樣成功率會高一些），然後用我前面提到的框架設計一個 prompt：

|         | **Prompt**                           | **解釋**                                                                                                                                  |
| ------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| 型別是什麼？  | Portraits / Avatar                   | 如果你的原圖是證件照，可以在 prompt 里加入「肖像」一詞，或者「Avatar 頭像」。                                                                                          |
| 主體是什麼？  | smiling cute boy, undercut hairstyle | 這裡可以是選填，你可以先不加這個描述，只填其餘 prompt，然後如果生成的圖片不像你。那你就在這裡加點描述下你的頭像的詞，一般就是性別、樣貌、髮型、配飾（比如眼鏡、耳環等）、表情等。注意，儘量挑特徵比較強的部分輸入，特徵對了，生成的圖片基本會有幾份像。 |
| 背景是什麼？  | white background                     | 我這裡保留了證件照的白底，你可以加一些實際場景的背景，比如餐廳之類的。                                                                                                     |
| 構圖是怎樣的？ | null                                 | 因為我們預先傳了圖片，圖片是張證件照，所以不填                                                                                                                 |
| 用什麼鏡頭？  | soft focus                           | 柔焦是指攝影中，使用柔焦鏡頭，使得拍攝的影像既清晰又柔和的效果。一般多在拍攝人像的時候使用，我在 prompt 里加上這個，可以使照片更柔和。你也可以不加。                                                          |
| 是什麼風格？  | 3d render,Pixar style                | 因為目標是生成 3d 照片，所以這裡加了 3d render（3d 渲染），以及我喜歡的皮克斯風格                                                                                       |
| 引數      | —iw 2                                | iw 是一個文字和 img 權重引數。數值越大，就越像原圖，關於這個值的介紹，可以看高階引數篇。                                                                                        |

最後，還有三個技巧：

1. 如果你生成的照片並不像預設的照片，可以在四張圖裡，挑一張比較像的，然後點 V（Variation），讓模型繼續生成，再繼續挑一張像一點的照片，然後繼續生成新照片，直到出現一張比較像的。
2. 第二個，我覺得很神奇，如果前兩個方法你都試過了，你生成的圖片還是跟原圖不像，那就在 prompt 里加上「wear glasses（戴眼鏡）」，真的很神奇，我只要加上戴眼鏡就像非常多，如果你原圖戴眼鏡了，你試試在引數里加個 —no glasses，你會得到一張更不像你的圖。
3. 最後，就是多用一個引數，這個方法會在技巧八中展開說下。

本章最後，有我的證件照的案例。

## 技巧七：多引數同時使用

在使用 img2img 的方法生成頭像時，我發現問題是「文字權重比圖片權重高」，導致其生成的圖片不像原圖，iw 引數在 V5 裡最多提升圖片權重到 2，所以我就在想有沒有可能進一步降低文字的權重。

然後我就試了下 s 引數，發現的確好了很多。

如果生成的圖片還是不像，你可以在 —iw 2 基礎上，再加一個引數 —s 200 ，注意同時用兩個引數時，中間不要有逗號。我發現加了 s 引數之後的確像了很多，我個人猜測是 s 和 iw 連用會進步一削弱 text 的權重。

s 是控制生成圖片的風格化程度。簡單理解，這個值越低會更符合 text prompt 的描述，數值越高藝術性就會越強，但跟 text prompt 關聯性就會比較弱。所以如果你生成的圖還是不像，就加大這個值，比如調到 500。

我想透過這個案例告訴大家，多個引數一起使用，有可能會形成合力，進一步放大模型的能力。未來有新的引數能力，不妨也想想有沒有可能一起用？

## 動漫風頭像

與 3D 卡通頭像一樣，主要的修改是在圖片風格上：

|         | **Prompt**                           | **解釋**                                 |
| ------- | ------------------------------------ | -------------------------------------- |
| 型別是什麼？  | Portraits / Avatar                   | 繼續使用相同描述                               |
| 主體是什麼？  | smiling cute boy, undercut hairstyle | 繼續使用相同描述                               |
| 背景是什麼？  | white background                     | 繼續使用相同描述                               |
| 構圖是怎樣的？ | null                                 | 繼續使用相同描述                               |
| 用什麼鏡頭？  | null                                 | 因為是漫畫風，就不加柔光鏡頭了                        |
| 是什麼風格？  | anime, Studio Ghibli                 | 目標是製作動漫風的頭像，所以這裡加了 anime（動漫），然後加了吉卜力風格 |
| 引數      | —iw 2 —s 500                         | 注意同時用兩個引數時，中間不要有逗號。                    |

## 賽博龐克頭像

這是我最喜歡的風格之一，也是只需要改一下風格和背景即可：

|        | **Prompt**                                                                   | **解釋**                                 |
| ------ | ---------------------------------------------------------------------------- | -------------------------------------- |
| 主體是什麼？ | cyberpunk robot face, holographic VR glasses, holographic cyberpunk clothing | 加了臉的修飾，還有戴上 VR 眼鏡，穿上賽博龐克風衣服            |
| 背景是什麼？ | neon-lit cityscape background                                                | 為了讓圖片更像是賽博龐克，就加了個霓虹燈城市背景，讓其看起來更有賽博那味   |
| 是什麼風格？ | Cyberpunk, by Josan Gonzalez                                                 | 加了賽博龐克風格，以及我非常喜歡的賽博龐克畫家 Josan Gonzalez |

上面這幾個頭像 prompt 最後生成的頭像是這樣的，坦率地說，我已經盡力了，我的個人特徵太少了，人也不帥，生成的圖片，都有種東南亞人那味，感覺 Midjourney 對亞洲人的理解還不是很行 😂

![MJ039.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/392E8E8F-9EC2-4FEF-A9D2-47A37CB7A2E7_2/Kh7zcR5YMpWMyLKYZG2fig3RYkU6u5ApKfcRJzSBaB8z/MJ039.png)

## 技巧八：使用 Seed 引數對圖進行二次修改

注意：這個技巧，我個人覺得未來潛力比較大，但目前 Midjourney 的實現效果還比較一般，效果得不到保證。官方的社群的幫助文件也提到這個功能在 V5 非常不穩定。詳細可以看看我整理的 Midjourney 官方 FAQ 一章。

你可能遇到類似這樣的場景：

1. 你輸入一段 prompt，機器生成了 4 張圖片
2. 你看了下4張照片，發現其中有一張還行，但其餘不是很滿意，然後改了下 prompt，機器又生成了一些
3. 但這次生成的照片你都不滿意，你就很煩惱為何會這樣
4. 然後你就像為啥不能在第一次生成圖上做修改呢？

基於某一次生成的結果進行二次 prompt 修改，理論上我認為是可以的，以賽博龐克頭像為例，我先用上述 prompt 生成了四張圖片，然後在訊息的右上角點選 emoji 按鈕（下圖1），然後再輸入框裡（下圖2）輸入 envelope，然後點選信封 emoji（下圖3），接著 bot 就會將 seed 號碼發給你。

![MJ040.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/A81C7114-3DD6-4EB3-A4BA-FBB1A68713CC_2/MybA70bYUjrlgsScqvQUbkdVbbftxkf40OPdtEHsGdkz/MJ040.png)

然後我修改上面的賽博龐克頭像的 prompt，將其背景改為 China Town，此時需要注意：

1. 新的 prompt 並不是只改 background，你需要將之前的 prompt 都帶上。
2. prompt 僅修改 background 的部分。
3. 最後帶上 seed 引數。

以下是我的案例：

原 prompt：

```other
{img url}  avatar, cyberpunk robot face, holographic VR glasses,holographic cyberpunk clothing, neon-lit cityscape background, Cyberpunk, by Josan Gonzalez --s 500 --iw 1
```

新 prompt（seed 碼只是範例，你要填寫自己的 seed）：

```other
{img url}  avatar, cyberpunk robot face, holographic VR glasses,holographic cyberpunk clothing, China Town background, Cyberpunk, by Josan Gonzalez --s 500 --iw 1 --seed 758242567
```

以下是生成的效果（左圖為原圖，右圖是用了 seed 後生成的圖），可以看到，背景的確換了，但人的外觀也有點變化 😂

效果不是很好，但我覺得值得探索，這樣能提高漸進最佳化的成功率：

![MJ041.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/56857A8C-7F46-4631-BEAA-696EE75C3A4E_2/FLBeKQqjyzfqEIyRyHUon4bg0JOXdteAPE7TgjsrZ60z/MJ041.png)

## 技巧九：神秘的 blend 功能

這個技巧，說實話，我感覺不能稱其為技巧，但這又是一個 Midjourney 非常重要的 feature，所以在這裡著重介紹一下。

這個功能使用起來非常簡單，在 Discord 輸入框裡 /blend，然後點選這個選單：

![MJ057.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/711A1666-90E0-4885-8821-9DE291BA4E5C_2/pLGOKURlwtTKN72KKCVrosAuI2YKyEYQnd1MzWW5kCsz/MJ057.png)

之後你的輸入框就會變成這樣：

![MJ058.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/E0D3D93D-5741-4C74-BF54-D6165C103CBE_2/otQUevHxBx118ESLonxio5Q4tZ7jrFVLhhXyaFIbLAkz/MJ058.png)

然後你就可以點選這兩個框，然後選擇你電腦上的照片，新增完成後，大喊一聲「使用融合卡」（不是），然後點選回車：

![MJ059.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/A4E58CD2-3E5F-42C8-AE2A-60349FE7B860_2/VUq7TBcjyUHdWjAPh5Y2x8CYDys4L59YGhrkXMlBMtUz/MJ059.png)

然後 Midjourney 就會生成這樣牛逼的結果，左邊是融合鋼鐵俠，右邊是融合巴斯光年：

![MJ061.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/77ADDE3A-48E0-4323-8D9C-F80D32E41814_2/1MWe1uTDsRJp30xzq9R4CYHklyZxU9jKEay2XV6LFSEz/MJ061.png)

這個功能我第一次看到時，我是非常震驚的，以為是小時候看遊戲王裡主角們使用「融合卡」的那種效果。可惜並不是，這個功能非常不穩定，僅有在滿足多個未知條件才能達到上述的效果。

我本來打算用這個方法用於生成頭像，但我發現只要用自己的照片，融合其他風格的照片，效果都不太好，目前實驗下來效果最好的是名人頭像，我的感覺是因為 Midjourney 餵了不少名人的頭像給模型，所以這種融合的效果都很好。

但我覺得它真的很適合做頭像，將自己的頭像跟另一張圖片融合一下，就能生成一張不錯的圖，方便又快捷。可惜目前這個功能感覺還不太好用。

當然這個功能還不僅僅止於此，它還有很多使用場景，在後續會介紹給大家。

