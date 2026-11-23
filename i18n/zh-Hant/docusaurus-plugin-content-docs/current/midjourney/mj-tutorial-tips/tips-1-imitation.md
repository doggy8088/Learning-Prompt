---
sidebar_position: 1
---
# 技巧一：臨摹

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