---
sidebar_position: 3
---

# 場景2：品牌 Logo

## 我們需要學習提示詞嗎？

前一章各位搞懂了基礎 prompt 後，從本章開始就會教大家更多垂直場景的 prompt。關於垂直場景，我看到大量的教程和分享都是分享各種提示詞，比如 Logo 相關的提示詞有：

- modern
- minimalist
- vintage
- cartoon
- geometric

坦率地說，在我學習如何使用 Midjourney 的過程中，我一開始也以為只要看了別人的 prompt 用了別人的提示詞，就能生成好的圖片。

但對於新手來說，我不建議各位直接上來就記模版，記這些詞。

因為寫好一段 prompt ，你缺的不是提示詞，**而是對設計的理解，甚至是想象力。**

比如本章節的 Logo 設計，如果你根本不知道 Logo 包含哪些元素，適合什麼風格，你懂再多的提示詞也沒法生成滿意的 Logo。正如我 Midjourney 教程前面提到的那樣，Midjourney 跟 ChatGPT 不一樣，ChatGPT 是宣告式的，你甚至可以讓它扮演某個角色，但 Midjourney 是指令式的，你只能用指令讓它畫出你想象中的圖片。當你能很穩定地出圖後，再研究這些詞不遲。

對於普通人來說，真正阻礙我們的可能不是學會這些詞語，而是我們的審美。

## 常見的品牌 Logo

常見的品牌 Logo 一般分成以下 4 種形式：

- Graphic Logo：一般以圖形為主，像 Apple、Twitter 以及 Midjourney 就是這種 logo。
- Lettermark Logo：一般用公司名字的首字母作為 logo 主體，像 Facebook、Tesla 還有 IBM （IBM 全稱是 International Business Machines）都是用公司名的首字母作為 logo。
- Geometric Logo：幾何圖形組成的 logo，比如 Nike、百事可樂、萬事達卡就是這個型別。
- Mascot Logo：以公司吉祥物為 logo 的相對來說比較少見，像米其林的 logo 就是吉祥物輪胎人，我最喜歡的烤雞餐廳 Nando」s 就是一隻🐔

其實常見的品牌 Logo 裡其實還有一種，是文字組合式的，文字加上面任意一種，比如 Tesla 的 完整 Logo 就是 Tesla 加一個 T。但因為 Midjourney 在文字的生成上，有非常多的問題，所以不在本章進行介紹。

![MJ024.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/3FF9DD86-C008-49F0-908B-9D6C06497857_2/oNKsiYXidprqaCyAYGvEJkk93Y5DQ9Rx5c7gxrKgszQz/MJ024.png)

## Graphic Logo

當你想用 AI 生成 Logo 的時候，我建議你選一個你認可的方向，然後再讓 AI 生成。

首先我們來分析一下 Graphic Logo 的屬性：

1. Logo 型別：graphic logo
2. Logo 圖形描述：比如貓
3. 風格：
   1. 多為扁平化設計：flat
   2. 多為向量圖形：vector graphic
   3. 簡潔：simple

根據屬性撰寫的 prompt ，核心的關鍵就是將風格描述清楚：

```other
flat vector graphic logo of cat, simple minimal
```

Graphic Logo 還有一種常見的設計，比如前面的例子裡 Midjourney 的 Logo 就是這種，只需要在 graphic 後加一個 line 即可：

```other
flat vector graphic line logo of cat, simple minimal
```

下方左邊 4 個是沒有加 line 的版本：

![MJ032.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/C745CB0E-D25E-43C0-BC5B-F884644841AA_2/RiPvMKr3P0b3mbjmy5oBckl60Uk2sw6pxjGej2yUiygz/MJ032.png)

## Lettermark Logo

這個根據我的實驗，也試用了很多人寫的 prompt，我個人的感受是，這種型別的 Logo 看起來簡單，就一個字母進行變形，但讓 AI 生成反而效果很一般，而且有一個算是比較有意思的發現，用 A 字母做出來的 Logo 質量比其他字母做出來的 Logo 質量要好很多（非嚴格按照資料統計，僅個人感受）。這個型別的 Logo 有以下特點：

1. Logo 型別：lettermark
2. Logo 圖形描述：
   1. 純字母
   2. 字型樣式：可以按需加上喜歡的字型
3. 風格：
   1. 向量
   2. 簡潔：simple minimal

根據屬性撰寫 prompt（最後生成的是 A 和 C 的 logo，我個人感覺 A 的好很多），另外需要注意，這個例子其實是想說明，在 Midjourney 裡，語法並不重要，lettermark 不一樣要按照語法要求，寫成 lettermark logo of letter A ：

```other
letter A logo, lettermark, typography, vector simple minimal
```

![MJ028.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/F6B3BD42-9141-46DE-9C69-BC1E1994F9E9_2/8S6oy1xu2c7XbVXay3Tw82k5S7fWdvKO06743nWWjGkz/MJ028.png)

## Geometric Logo

這個型別的 Logo 相對來說，雖然只有圖形，但有很多玩法，介紹兩個常用玩法：

- 迴圈重複

如果你用的是 iPhone ，可以看看 iPhone 裡的照片應用的 Logo，它也是一個 Geometric Logo ，而且它是橢圓圖形旋轉重複，最後組合成了一朵花的形狀。拆解一下，關鍵詞是：

1. Logo 型別：geometric logo
2. Logo 圖形描述：
   1. 旋轉重複：radial repeating
3. 風格：
   1. 簡潔：simple minimal

讓我們來寫一個類似的 prompt：

```other
Flat geometric vector geometric logo of flower, petals radial repeating, simple minimal
```

- 漸變

另一個常見玩法就是漸變色，如果你用的是電腦的瀏覽器是 Edge，可以去看看它的 Logo，它的 Logo 就是一個漸變色，然後是個浪的外觀。拆解一下，關鍵詞是：

1. Logo 型別：geometric logo
2. Logo 影象描述
   1. 浪的形狀：curved wave shape
   2. 藍綠漸變：blue green gradient
3. 風格：
   1. 簡潔：simple minimal

讓我們來寫一個類似的 prompt：

```other
Flat geometric vector graphic logo of curved wave shape, blue green gradient ,simple minimal
```

最後生成的結果是這樣的，我很喜歡花的第三個，浪的第二個：

![MJ029.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/5D97972B-43C9-4162-902D-9B5DEEFB2B88_2/xEkxv0Bt1L7yWt2HfBmj9bilZqxUCWFdFRAxHYHhmi0z/MJ029.png)

## Mascot Logo

這種吉祥物型別的 Logo，我認為是 Midjourney 最擅長的 Logo 風格。但也非常考驗我們的想象力，當然我們也可以僅提供一些比較簡單的詞語，讓 AI 幫我們生成，讓我們一起來為一個機器人公司寫一個 Mascot Logo ，拆解一下 prompt 關鍵詞：

1. Logo 型別：mascot logo
2. Logo 主體描述：比如機器人 robot
3. 風格：
   1. 簡潔：simple

最後 prompt：

```other
a mascot vector logo of a robot, simple,
```

還有給一家泡麵公司生成一個吉祥物又會怎樣：

```other
simple mascot logo for a Instant Noodles company
```

以下是生成的結果，我很喜歡泡麵公司的 logo：

![MJ030.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/63A21AD3-F378-4CBD-BBED-76BF6B148C98_2/DArxe0a2MxlhmOQs450lJL4rRFM3xmKjdlef7Wh0DBIz/MJ030.png)

## 技巧四：增加風格——藝術運動

> 因為篇幅的原因，本教程不會介紹特別多的風格，我會在我的[小紅書賬號](https://www.xiaohongshu.com/user/profile/6073d38d00000000010068a6?xhsshare=CopyLink&appuid=6073d38d00000000010068a6&apptime=1679646639)上更新。感興趣的朋友可以去關注下。

前面生成的 logo ，有一些估計各位會覺得平平無奇，比如 Lettermark Logo，原因並不是 Midjourney 能力不強，而是我們給的指令太少了，只要在 prompt 里加幾個單詞，就能生成不一樣的 Logo：
左邊四個的 prompt 是這樣的，我僅僅在原來的 prompt 上加了兩個單詞 Pop Art：

```other
letter A logo, lettermark, typography, vector simple, Pop Art
```

![MJ031.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/8A4D874C-EC41-40D0-B6CC-3BE64BF86D8C_2/s6gX0xQ1bLlOpxf7nWTvF5dxtj97VLXhayhDBTJxOA8z/MJ031.png)

Pop Art 是什麼？

波普藝術（Pop Art，又譯為普普藝術或通俗藝術），是一種起源於20世紀50年代和60年代的藝術運動，它強調對大眾文化、大眾媒體和消費主義文化的反思和表達。Pop 來自『流行藝術』（popular art）一詞裡的 popular，由1956年英國藝術評論家羅倫斯·艾偉（Lawrence Allowey）所提出。

Pop Art 的特點是：

- 它的內容主體一般是福斯日常生活中常見的物品和影象，如廣告標語、雜誌封面、食品包裝等。
- 一般用色比較大膽，同時線條比較簡潔，強調物品本身的視覺效果和意義。

右邊邊四個的 prompt 是這樣的，我在 prompt 里加上了 De Stijl 。

```other
letter A logo, lettermark, typography, vector simple,De Stijl
```

De Stijl 是什麼？

它是一個荷蘭藝術運動，始於 1917 年，致力於簡化視覺元素，包括直線，平面和基本色彩。

它的成員包括畫家 Piet Mondrian 和 Theo van Doesburg 等人。De Stijl 的成員致力於將藝術與設計融合，以創造出具有實用性和功能性的美學。

De Stijl 的特點有：

- 常常用幾何圖形進行設計，如矩形和直線。
- 用色基本只用基本色彩，比如黑、白、灰、紅、黃、藍。
- 追求平衡和和諧，強調形式和結構，不注重細節和表現力。

看完這些介紹，再看看 Midjourney 輸出的 Logo 是不是有那味了？

