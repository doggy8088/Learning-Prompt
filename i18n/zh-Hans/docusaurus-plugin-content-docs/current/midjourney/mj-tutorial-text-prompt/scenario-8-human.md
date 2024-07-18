---
sidebar_position: 9
---

# 場景8：人物

## 名人照片

這算是 V5 的新屬性，Midjourney 在 V5 版本認識很多名人，你可以在描述主體的時候，加上名人的名字，就可以生成該名人的照片，我們生成幾個電影裡的經典照片：

![MJ063.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/EB62943E-ADCC-4468-B60E-D169F0F3CF2B_2/xOETLxIXANtcgo60y3subblRZBPFAy2s1WiPfpD37tcz/MJ063.png)

第一個是 Keanu Reeves，第二個是 Vito Corleone（我並沒有輸入主演人 Marlon Brando），兩組圖的 prompt 都非常簡單，你可以嘗試自己寫一下😁

本章最後有答案。

## 衣服模特

做衣服類電商的朋友可能會比較需要這個功能：

1. 用 AI 生成一個虛擬人
2. 然後將貨物照片（比如某件衣服）傳給 AI
3. AI 將虛擬人和貨物的照片融合在一起

坦率說來，我覺得 Midjourney 應該是可以的，但目前的效果還不太好，要想實現這個需求，只需要用到前面介紹的技巧九里提到的 blend 功能，詳細方法就不在這贅述了，大致就是我將商品圖和人物圖用 blend 功能融合了下：

![MJ062.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/9FA8101B-B012-4339-BF1E-231EC942538F_2/njVETvNkyOeNowSlU3lxncBLQV9G5ZP7irNJSVFCUUwz/MJ062.png)

為了驗證一致性，我生成了幾張 Reeves 的圖分別嘗試了下，最後輸出的結果是這樣的：

![MJ064.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/9B2361C9-2C05-484E-8BE8-FB0DCFA27DD3_2/txkN1BRQG3P7uEEEcl9DwmoRBa6PLiTrzOW9iLqay2Ez/MJ064.png)

整體來看，好像還行，但真的用在商品描述圖裡，我覺得還不太可能，因為裡面的衣服跟原圖差距還比較大（可以細看裡面的紐扣）。

但我覺得未來 Midjourney 可能會最佳化好這個功能，並且我覺得如果可以自己訓練模型，這個功能實現起來應該不難。

## 老照片

這個算是名人照片的分支玩法，最近大家應該看到過很多類似的照片，其實 prompt 很簡單，主體和背景大家用翻譯軟體搞搞就行：

|         | **Prompt**                                            | **解釋**                 |
| ------- | ----------------------------------------------------- | ---------------------- |
| 型別是什麼？  | photography                                           | 照片                     |
| 主體是什麼？  | a group of Chinese people gathered around Darth Vader | 一群中國人在圍觀達斯維達           |
| 環境是怎樣的？ | on the street                                         | 大街上                    |
| 構圖是怎樣的？ | null                                                  | 不太重要，就讓 AI 自由發揮        |
| 用什麼鏡頭？  | fuji film                                             | 為了使得照片更有那味，增加了一個富士電影鏡頭 |
| 是什麼風格？  | style of 1990s                                        | 增加了一個 90s風格            |

用類似的 prompt 生成了兩組圖片：

![MJ095.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/2D0E911B-A54D-4168-8AC1-D14C54229124_2/yhc7BPiRWsZZ0UmozWshXLiXe9QKkRpxzQi9xpR9v9cz/MJ095.png)

## 技巧十四：增加風格——年份

上面的老照片場景，我們用了 1990s 風格，嚴格地說，這個 1990s 更適合放在主體，或者環境裡，放在風格裡也不是不行，因為不僅僅希望主體是 1990s 還希望圖片生成的風格也是 1990s。

這就是最後一種風格詞用法：年代。

拿插畫那一章的兩個 prompt 修改一下，我都沒在 prompt 里加藝術家的名字，而是改為 style of 1920s，玫瑰的圖有點那味，貓的圖右上角那張太逗了。

![MJ096.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/86D4276A-5254-4DC7-BC55-74559AFFF785_2/xwHZmIA6Z6NzghaKitsq6NbM2lo9EpgmeUAh46FLqSUz/MJ096.png)

## 名人照片答案

Reeves 很簡單，就是說明主體，然後註明穿著標誌性的衣服，走在大雨裡：

```other
Keanu Reeves, wearing a black long leather coat, walking down the street in the rain
```

然後教父的那張就更簡單了：

```other
Vito Corleone sitting on a chair
```

## 技巧十五：如何讓 Midjourney 生成的人更具有多樣性？

這裡的多樣性其實是指人的高矮胖瘦，甚至身體的一些特殊性等。

不知道各位有沒有發現，大多數用 AI 生成的圖片，人物都非常漂亮和英俊，但這並不好，這其實某種程度上代表了社會的偏見。

所以我想在本章重點介紹下，如何讓 Midjourney 生成更多樣的人體。

**方法一：Slider 方法**

在上一章，我介紹了增加權重的方法，這個方法還可以幫助你生成不同體型的人物，以下是 Midjourney 官方社群的案例：

```other
Plus-sized ginger female dressed in bohemian vest, maxi skirt, espadrilles, walking across autumn campus courtyard, morning atmosphere:: plus-sized::-0.3 --ar 2:3
```

你可以控制 plus-sized 後面的引數，從而使畫面中的人物變胖或者變瘦。這裡需要注意，並不是負數就是越瘦的意思，而是削弱了 plus-sized 權重，如果你的 prompt 詞是 thin 你加個負數 slider 引數那就是變胖了：

![MJ119.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/FD1613E3-BD48-4D41-91C8-A0EA057B6883_2/exEgBwvmyRPyzadeRHy7BBJN7uLVk71FBNXHC0trXR4z/MJ119.png)

**方法二：直接描述**

Midjourney 是知道一些多樣性的詞語的，比如：

- blind：失明
- deaf：聾
- cerebral palsy：小兒麻痺
- accessibility：行動不便

![MJ120.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/9770FDB6-F9D3-40EC-AB4B-2D6CA7AC58CD_2/lQyNTkK4OxqTtO9HwtyH5yu7qP7qu7DfTyRsxPsaF4Qz/MJ120.png)

