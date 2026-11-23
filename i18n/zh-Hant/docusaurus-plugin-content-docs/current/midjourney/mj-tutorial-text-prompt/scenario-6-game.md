---
sidebar_position: 7
---

# 場景6：遊戲

## Prompt 真的越長越好嗎？

按照 Midjourney 的官方文件裡的說法，並不一定：

> Prompts can be very simple. Single words (or even an emoji!) will produce an image. Very short prompts will rely heavily on Midjourney」s default style, so a more descriptive prompt is better for a unique look. However, **super-long prompts aren」t always better.** Concentrate on the main concepts you want to create.

但你會發現，好像中文社群分享的 prompt 都非常長，但只要各位仔細觀察，或者用翻譯軟體查一查，你會發現很神奇的事情：

1. 有一些詞拼寫錯誤。原因是某書，不支援複製黏貼，導致很多人 OCR prompt，然後識別錯誤，大家都在搬運 prompt ，導致錯誤一直傳遞，這也算是新時代的水印了吧。
2. 有一些詞非常重複，比如 8k、UHD、Ultra Quality，他們都在說一個事情，就是高清，加多了也不會有疊加作用。
3. 很多詞你根本不知道為啥需要，但好像每個人都加了。比如 8K 這些詞，你有想過這個詞是有必要的嗎？是有用的嗎？但實際上這些詞官方並不推薦使用，這些詞甚至對你的圖會造成破壞（詳見 Midjourney 官方 FAQ 一章）。

如果你看完我的教程，你會發現我講的例子裡，很多圖只要很少的 prompt 就能描述清楚，生成的圖片也不差。

當然我並不是說，不能寫很長的 prompt，如果你生成的內容本來就很複雜，那寫長一點也沒所謂，但寫完問問自己，這有必要嗎？

## 畫素遊戲

說到遊戲，我最喜歡的風格是畫素風，畫素風格一般有：

- 8-bit
- 16-bit
- 32-bit

各位都可以自己試試，介紹一個我寫的 prompt，最近塞爾達發布了最新作《王國之淚》，很喜歡他們的天空島的設定，所以用 Midjourney 生成了一個 16-bit pixel art 版本：

|         | **Prompt**                          | **解釋**                         |
| ------- | ----------------------------------- | ------------------------------ |
| 型別是什麼？  | 16-bit pixel art                    |        16 bit 風格       |
| 主體是什麼？  | island in the clouds, ancient ruins | 天空島，島上有遺蹟                      |
| 背景是什麼？  | null                                | 主題描述裡其實已經有背景了（clouds），所以我就沒重複寫 |
| 構圖是怎樣的？ | null                                | 不太重要，就讓 AI 自由發揮                |
| 用什麼鏡頭？  | null                                | 不太重要，就讓 AI 自由發揮                |
| 是什麼風格？  | Zelda style                         | 因為是復刻塞爾達，所以加了塞爾達風格             |
| 引數      | null                                | 沒有加任何引數                        |

再生成一個寵物小精靈的場景：

|        | **Prompt**       | **解釋**                |
| ------ | ---------------- | --------------------- |
| 型別是什麼？ | 8-bit pixel art  | 換成了更復古的 8 bit 風格      |
| 主體是什麼？ | types of Pokémon | 我想讓 AI 生成寵物小精靈圖譜一樣的內容 |

這兩個 prompt 都很短，但很有意思，可玩性挺強的，各位可以多玩玩：

![MJ047.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/42038F81-4724-492D-8E3E-207D4F323282_2/ZCwPyjZXmrHBUUqBbyAhsUaM1RBQPTrC2YlSymAwmMEz/MJ047.png)

## 3D 遊戲——場景

因為篇幅的原因，我無法將所有有關 3D 遊戲的 prompt 都介紹完，我只能挑選一些我比較喜歡的風格講一下，而且我不是專業的 3D 設計師，所以未免會有講錯的地方，望見諒。

在 3D 場景設計裡，我最喜歡的應該是畫素風 3D 微縮場景，也不知道是不是叫這個名字😂，寫一個 prompt 給大家看看：

|         | **Prompt**                | **解釋**                        |
| ------- | ------------------------- | ----------------------------- |
| 型別是什麼？  | isometric clean pixel art | 這個風格我是問了 ChatGPT 的，不確定是不是叫這個。 |
| 主體是什麼？  | robotics lab              | 機器人實驗室                        |
| 背景是什麼？  | null                      | 不太重要，就讓 AI 自由發揮               |
| 構圖是怎樣的？ | null                      | 不太重要，就讓 AI 自由發揮               |
| 用什麼鏡頭？  | null                      | 不太重要，就讓 AI 自由發揮               |
| 是什麼風格？  | null                      | 我在型別裡提了，所以不需要重複強調             |
| 引數      | null                      | 沒有加任何引數                       |

以下左圖是火星工廠，右圖是機器人實驗室：

![MJ065.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/F8FEDD52-A5C0-4DC1-9272-DDAD1516C1A7_2/KzXpDhwHszpx2U4irBAB2duycySJNwaAe9VFBPHWz6gz/MJ065.png)

## 3D 遊戲——人物

主體描述我就不多說了，更多是分享 3D prompt 的必要的要素：

|    <div style={{width:180}}></div>     | **Prompt**                  | **解釋**                                                                                                             |
| ------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 型別是什麼？  | blender 3d                  | 我測試了下，只寫 3d 也行，但不知道為啥沒那味，加了 blender（一個 3D 建模軟體）就會好很多。                                                              |
| 主體是什麼？  | Dark Vader, full body, cute | 達斯維達的全身像，然後我希望它生成一個 Q 版的                                                                                           |
| 背景是什麼？  | null                        | 不太重要，就讓 AI 自由發揮                                                                                                    |
| 構圖是怎樣的？ | isometric                   | 等軸側投影，這是一種用二維平面呈現三維物體的方法，效果可以看後面生成的圖片，各位就知道是啥了。                                                                    |
| 用什麼鏡頭？  | null                        | 不太重要，就讓 AI 自由發揮                                                                                                    |
| 是什麼風格？  | Pixar, style of artstation  | 我這裡加了皮克斯風格，以及跟之前講插畫的那章加了 behance 類似，加了 artstation 後效果有變好（artstation 跟 behance 類似，也是設計師分享作品的一個網站，但主要分享 3d 或遊戲相關的內容） |
| 引數      | null                        | 沒有加任何引數                                                                                                            |

我用以上 prompt 生成了達斯維達和風暴兵的，我覺得風暴兵還挺可愛的：

![MJ048.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/63438D30-C24E-4148-886D-9C6A1D302588_2/kSt6iyB2qKSrgCxCAHXzmbbyTl2dQvZ8ap0bBCBMMosz/MJ048.png)

## 3D 遊戲——裝備

遊戲裝備非常非常多，我沒法一一給大家介紹，只介紹一些我瞭解的，首先是戒指，多大數的遊戲戒指都是那種印章戒指（signet ring），

|         | **Prompt**            | **解釋**          |
| ------- | --------------------- | --------------- |
| 型別是什麼？  | blender 3d            | 這個可加可不加         |
| 主體是什麼？  | star war, signet ring | 星際大戰的印章戒指       |
| 背景是什麼？  | null                  | 不太重要，就讓 AI 自由發揮 |
| 構圖是怎樣的？ | isometric             | 等軸側投影（這個可加可不加）  |
| 用什麼鏡頭？  | null                  | 不太重要，就讓 AI 自由發揮 |
| 是什麼風格？  | null                  | 不太重要，就讓 AI 自由發揮 |
| 引數      | null                  | 沒有加任何引數         |

另外一個可能常見的是裝備集（我不確定這個中文是否正確，英文叫 Item Collections），寫法是這樣的：

|         | **Prompt**                  | **解釋**                                |
| ------- | --------------------------- | ------------------------------------- |
| 型別是什麼？  | blender 3d, game sheet      | game sheet 簡單說是那種遊戲設定圖，一般就是羅列各種裝備     |
| 主體是什麼？  | lightsabers, paladin armor, | 希望生成一些列的星際大戰的光劍和聖騎士盔甲                 |
| 背景是什麼？  | null                        | 不太重要，就讓 AI 自由發揮                       |
| 構圖是怎樣的？ | null                        | 型別包含了，所以不用填                           |
| 用什麼鏡頭？  | null                        | 不太重要，就讓 AI 自由發揮                       |
| 是什麼風格？  | style of Hearthstone        | 我很喜歡爐石傳說的風格，也很好奇，中古風格，遇上未來題材，會生成怎樣的設計 |
| 引數      | null                        | 沒有加任何引數                               |

最後生成的結果如下，但我對裝備集的生成不是很滿意，後面我會介紹一個技巧，教大家如何漸進最佳化生成的圖片：

![MJ050.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/433C0BD6-C942-4976-A8C8-63BCDA338383_2/VmIwLbFyJhOrxyQDPqOexk9moWmXulLNoyHGYbrBeHgz/MJ050.png)

## 技巧十：控制變數法漸進最佳化

很多人把 AI 生成圖片比喻為煉丹，我覺得非常貼切，很多時候，也不知道為啥，在 prompt 里加一點神秘配方，圖片就會很不一樣。

不過我覺得雖然過程很像煉丹，但並不代表我們需要像古人那樣，用撞大運的方式煉製丹藥。我認為目前使用 Midjourney 最好的方法是：控制變數漸進最佳化法。

拿上面那個裝備集的圖片為例，我希望它生成的是裝備，並且是一件件地排布，而且光劍的效果也很奇怪，首先我們來逐條排查 prompt：

|   <div style={{width:180}}></div>      | **Prompt**                  | **檢查**                                                                        |
| ------- | --------------------------- | ----------------------------------------------------------------------------- |
| 型別是什麼？  | blender 3d, game sheet      | 這個好像有點問題，我希望的爐石傳說的風格，好像不是這種精緻的 3D 效果，生成的風格更像是星海爭霸的，而爐石傳說是那種黏土風格（clay render）。 |
| 主體是什麼？  | lightsabers, paladin armor, | 這裡可能也有問題，會不會是沒有寫 different types of lightsabers 導致只生成一種光劍。                    |
| 背景是什麼？  | null                        | 這個應該沒啥問題                                                                      |
| 構圖是怎樣的？ | null                        | 這個應該沒啥問題                                                                      |
| 用什麼鏡頭？  | null                        | 這個應該沒啥問題                                                                      |
| 是什麼風格？  | style of Hearthstone        | 感覺生成的圖沒有那種中世紀盔甲的油膩感，但如果前面改了黏土風格，會不會好一些？這裡可能也需要最佳化下。                            |
| 引數      | null                        | 這個應該沒啥問題                                                                      |

從這個表裡可以看到，我們發現了三個問題，其中第一個黏土風格問題，跟最後一個問題有關，此時我的建議是：

1. 每次僅修改一個，其餘變數不變。
2. 修改完一條，效果符合預期後，再修改下一個。
3. 我的經驗優先修改主體內容，因為主體有的時候會影響其餘的變數。
4. 如果想確定這個修改是否具有一致性，或者說是否符合要求，而不是恰巧符合，可以用相同的 prompt 再生成一次。不過因為沒生成一次都要花錢，所以這個是可選項。

OK，按照以上原則，我們修改一下我們的 prompt，看看生成了什麼，的確加了 different types of 後，光劍就多了，問題解決了：

![MJ051.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/D9C6275A-84EE-42EC-9509-F43E60C9B66F_2/pGbPtLPgN7zTTZlDFgNVexGZ4BxTGtiE3vy0jdlY5CIz/MJ051.png)

然後我們修改下 blender 3d，將其改為 clay render （黏土渲染），我改完之後發現生成的結果（左邊四張），好像質感還是差了一點，於是我又試了下保留 3d blender 加 oily 的效果（中間四張），以及 clay render 加 oily 兩個一起用（右邊四張）。

![MJ052.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/ADB20BDA-306A-43F7-90E0-DEBC3DA471CE_2/xGfjCTVHUxQI4j1CVceShaJEMymax4oa3NxxPccCI1wz/MJ052.png)

我個人覺得好像兩個都改了效果是最好的（右邊四張）。

對比一下最開始的 prompt 生成的圖片，是不是最終的圖片效果更好？所以這個技巧主要想告訴大家，寫 prompt 沒有必要照抄答案，你也有能力自己寫好 prompt。

## 遊戲設定稿

遊戲這一章，再介紹一個可能會用到的一個場景人物設定稿，prompt 如下：

|         | **Prompt**                        | **解釋**                            |
| ------- | --------------------------------- | --------------------------------- |
| 型別是什麼？  | concept design sheet           | 設定稿                               |
| 主體是什麼？  | female paladin, character design, | 生成一個女性聖騎士的角色設定                    |
| 背景是什麼？  | white background                  | 設定稿一般都是白底的                        |
| 構圖是怎樣的？ | null                              | 型別包含了，所以不用填                       |
| 用什麼鏡頭？  | null                              | 不太重要，就讓 AI 自由發揮                   |
| 是什麼風格？  | null                              | 因為我對遊戲相關的風格和設計師都不熟悉，所以就讓 AI 自由發揮了 |
| 引數      | null                              | 沒有加任何引數                           |

最後的結果如下：

![MJ056.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/0FFAEF59-6D98-4DDD-A8B2-15DFF4C0271F_2/cXK5a350kBkbeayVgwFSlaAQoj8cQrDDlYRRIxlxrkgz/MJ056.png)

