---
sidebar_position: 2
---

# 場景1：Stock Photo

Text Prompt 的部分，我刪除重寫了 3 遍，每次寫完都不太滿意。前兩遍，我都希望透過一個或幾個萬能樣板教會大家寫 Midjourney 的 Text Prompt，但實際試了很多遍後，我發現：

1. 圖片訊息量非常大，萬能樣板的確讓你生成一張及格的圖片，但很難讓你生成一個完全滿意的圖片。
2. 要想生成一張高分圖片，需要的不僅僅是 prompt engineering，甚至還需要一些美學知識，不同場景引數的使用都是不一樣的，所以有些時候，用樣板反而有點死板。

所以，我不想直接教大家所謂的萬能樣板，而是透過一個個實際場景教大家如何寫好 text prompt ，因為不同場景，你告知給模型的訊息是不一樣的。

而且我認為，知道為什麼，遠比知道怎麼做更重要。當你知道為什麼後，遇到新的場景，你也能很好地解構出 prompt 裡需要什麼，而不是盲目套樣板。

最後，圖片場景有非常多，我會盡量分享一些大家日常工作中能用上的。希望能讓 AI 提高你的工作效率，而不是用完即棄的玩具。

Text Prompt 開篇介紹一下 Midjourney V5 提升較大的 Stock Photo 場景。

## 什麼是 Stock Photo？

Stock Photo 直譯為圖函式庫圖片。一般你能在一些圖函式庫網站上找到，這些圖片通常來自一些攝影師或設計師。部分圖片因為著作權的原因，如果你需要使用則需要付費。

大部分使用 Stock Photo 的使用者都是一些設計公司，或者廣告公司。你應該常常能看到這類圖片，比如最經典的兩人握手照片：

![MJ019.jpeg](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/ABFCBA68-C353-43B5-B0D8-EB8CA8B93718_2/DOoxcVSfiXgkl66z77M8vPNbxQSbpXzBTPEh7I5FFWkz/MJ019.jpeg)

我認為 AI 生成圖片對圖片函式庫衝擊非常大，V5 版本基本上滿足了我的 Stock Photo 需求。

## 技巧一：臨摹

我認為學習圖片類別的 prompt，跟學習畫畫是類似的，最好的學習方法不是直接用樣板。

而是拿真圖，或者別人生成的圖來臨摹。英文不好，也可以先寫中文，然後讓 ChatGPT 翻譯。當你臨摹了幾張後，你就會慢慢搞懂如何做出類似的圖了。

拿上面的那個握手圖為例，我們仔細觀察上面那張圖，圖中元素有什麼：

1. 第一主體是兩個手，然後握在了一起，並且看起來是兩個亞裔男人。
2. 第二兩人都穿著西裝。
3. 第三背景看上去像是在辦公樓的大門，兩人可能是在握手告別。並且背景刻意進行虛化了，或者是使用照像機拍攝的。

![MJ020.jpeg](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/861C8258-85BF-40A9-8389-5583F653CF3D_2/koWtZdjhYPCuvk8y9wbOckqwLISoCxZzDogBJVFLgAgz/MJ020.jpeg)

再歸納總結下，大概的訊息：

- 主體：兩個穿著西裝的亞裔男人在握手告別
- 場景：辦公樓大門
- 影象風格：stock photo，照像機拍攝，

這時候，我們就能嘗試寫一下 prompt 了（如果你覺得自己英文水平還不太行，也可以嘗試用翻譯軟體翻譯）。

```other
stock photo of two Asian men in suits shaking hands,say goodbye in front of the main entrance of the office building,taken with Canon
```

Midjourney 生成的結果如下所示。

Emm 🤔 好像跟我們的預期不一樣。不要慌，剛開始用 Midjourney 一定會遇到這種問題，重要的是多嘗試。

<img 
    src={
        "https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/E398A4A0-ECBB-4592-8CAA-AE68AED3FCCC_2/srcSfwZqzcgOymCyOlvnAMVi1okc5zsoKI3eSfA6kh8z/MJ021.png"
    } 
    style={{width: 500}} 
/>

我們再來分析下 Midjourney 為何生成了這樣的圖片？覆盤下：

1. 首先圖片的主體，或者說焦點，我們只需要「握手」，而不是兩個人。
2. 照像模式好像並不能實現背景虛化？更像是一種影象風格，圖四就像是一種老照片的風格。

那我們調整下 prompt，增加焦點和背景虛化關鍵詞：

```other
stock photo of two Asian men in suits shaking hands,say goodbye in front of the main entrance of the office building, focus on two hands, taken with Canon, background bokeh
```

再來看看生成的結果，結果好很多，圖 1 和 圖4 基本滿足需求了，圖 2 和圖 3 裁剪一下，也能滿足我們的需求。不過需要注意，Midjourney 在人手的生成上，暫時還有點問題，你細看圖 2和圖 4，其中有一個人的手有 6 個手指 😂，但我認為未來應該會修復：

<img 
    src={
        "https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/4931E039-2B61-49DB-98C1-B524E780BBC3_2/W6jeVicuOIl0RU7EqpXP71NeJ8BWY3FHgXoxFobCQmMz/MJ161.png"
    } 
    style={{width: 500}} 
/>

那我們來總結一下 prompt ，該 prompt 分成以下幾個部分：

![MJ022.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/07B84FDC-3494-4173-824F-92CABFDD9CA8_2/WZmCoU5tVeOGV6wnngJkFfzyIed10o5tKIWDar54D9gz/MJ022.png)

- 第一部分（紅色線）：描述你想要的內容主體。
- 第二部分（藍色線）：描述主體背景/環境。
- 第三部分（黃色線）：照片的焦點位置。
- 第四部分（綠色線）：照片的風格或者說是特殊要求。

總結下之後，你是不是就總結出了一個樣板了？😁

## 技巧二：多實驗

上述的案例，我還想教給各位第二個技巧：多試驗。

圖片生成遇到不符合預期的情況，不要慌，分析問題，然後使用控制變數法，一個個調整圖片，不要急，上面我寫的 prompt 還有一個地方，不知道各位有沒有注意，就是開頭的 stock photo，試試將這兩個詞刪掉會怎樣？

```other
two Asian men in suits shaking hands,say goodbye in front of the main entrance of the office building, focus on two hands, taken with Canon, background bokeh
```

生成結果也依然滿足需求，而且手指的數量也準確了，說明這個 Stock Image 對模型的影響不是很大。

<img 
    src={
        "https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/BBB1BC5B-BDE3-4034-B297-46D10CEC44D6_2/iH9AHSuCO6bCVxInVZvgbnybwNXUTbwkjT9Bjumf36Mz/MJ023.png"
    } 
    style={{width: 500}} 
/>

## 技巧三：善用 Image2Image 功能

在 Stock Photo 場景裡，還有一個非常厲害的技巧，這個方法我一開始覺得不太適合教，因為這個對 Stock Photo 函式庫影響太大了 😂

但本著工具中立的原則，並且這個技巧，其實在很多場景都能用（比如生成頭像等），所以還是覺得有必要教給大家。

各位一般用 Stock Photo 函式庫會遇到以下幾個問題：

1. 圖有著作權，沒法商用，或者說需要付費。
2. 有些圖，被很多人用過，其他人一眼就看出來這是 Stock Photo。
3. 圖裡的內容大體符合要求，但細節不符合要求，比如上圖兩個亞洲男性握手，可能換成一男一女，且其中一人是黑人會好一些。

要解決這三個問題，最好的方式就是讓 AI 改一改原來的圖片。讓 AI 改圖，只需要用到 Image2Image（或者叫 Blend） 功能即可。操作步驟如下：

:::info

後來在某書刷到類似的教程，我才知道這個方法大家一般叫墊圖。老外好像一般都叫 Image2Image，或者 img2img。

:::

1. 將你看到的不錯的 stock photo 發給 Midjourney Bot（我還是以前麵的那張握手照為例）
2. 右鍵複製該圖片的連結，然後黏貼到輸入框
3. 在連結後加個空格
4. 接著輸入你想要的內容，比如將其中一個人的手換成黑人，一個人換成女性：

```other
one Afican-American hand and one Asian woman hand
```

生成的結果是這樣的，我在 prompt 裡沒有提任何西裝，以及場景背景訊息，就說我要一個非裔的手，一個亞裔女性的手：

![MJ162.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/B9BD4D78-6C58-4A4A-8433-9D562A949CBB_2/xb58eLg0qFxYh6JyyMs4HpXvI1oFxcWfDDXi70zpY1Az/MJ162.png)

拋開6 根手指的問題，這個技巧是不是很高效？不過需要注意，blend 功能（這個後續教程會講到）我發現更適合兩張圖融合，圖片+文字不是很穩定，各位要有耐心，多測試一下。

