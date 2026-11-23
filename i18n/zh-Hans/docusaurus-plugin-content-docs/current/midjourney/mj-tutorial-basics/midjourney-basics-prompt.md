---
sidebar_position: 2
---

# Midjourney Prompt 基本結構

在 Midjourney 的官方介紹文件裡，介紹了最簡單的 Prompt 結構是這樣的：

<img src={"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/AE1E1253-DDEF-4DCE-83A9-CF5671941E55_2/TXDqmXTALidJpoDX9YyUyDy3WX3n4nOOcOj3yRgRMxoz/MJ154.png"} style={{width: 500}} />


但我覺得上面那個 Prompt 過於簡單了 😂 ，反而 Advanced Prompt 更適合學習：

![MJ155.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/064065D3-8609-4C1C-A741-F435CDBD9B3F_2/0YBkNJEv93HhtapyPQqCwOuJoHUvkqrdrKcv2xCCXF8z/MJ155.png)

## Image Prompts（選填）

Prompt 分成三個部分。第一個是 Image，這個屬於選填，可以填也可以不填。

先說下這個 Image URL 是幹什麼用的，有很多玩法，比如將兩張圖合併為一張，大家可以看看下面這個例子，我就是將一個大理石雕像和花朵的圖片上傳到 Discord：

![MJ156.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/6E42DCB6-F8DF-4738-B5AF-F2353EBF7C10_2/pe8CmiNNOmi2gXhwVbuMmJa1xZ8XSXB5HzLbRsACbxUz/MJ156.png)

然後讓 Midjourney blend （混合）一下（後續 blend 章節會介紹更多用法）後，就能生成下面這種圖片：

<img 
    src={
        "https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/9EB8D607-B722-4080-AB3D-13FDC104F322_2/A3UZeRIW1E48YtiKWcF3lLYwAgmyDoXAgOaJq9XISxwz/MJ157.png"
    } 
    style={{width: 500}} 
/>

需要注意的是：

- 你輸入的是圖片的 URL 地址，而且必須是公開可訪問的地址。
- 圖片格式僅支援 png、gif 和 jpg。
- 你最多只能放兩張圖的 URL，或者一張圖的 URL + 一段話。

如果你不想將圖片上傳到一些圖床伺服器，也可以使用 Discord 的圖床，你可以私聊 Midjourney Bot 然後透過上傳圖片的方式，將圖片先發到 Discord 上，然後右鍵複製圖片連結，像這樣：

![AnimatedImage.gif](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/06D3F8EB-B80E-4B98-B177-8339182996F4_2/QAZCtNM71Smrx5JoIyOby7Wng3T5lSRpq17bFNxfHLIz/AnimatedImage.gif)

## Text Prompt

這個就是你希望 AI 生成的圖片的描述。這個有非常多的技巧，後續會詳細介紹。這裡我想說下，Midjourney 跟 ChatGPT 有點不一樣：

1. 無法理解句子結構和語法：Midjourney 沒法像 ChatGPT 那樣懂你說的話。類比的話，Midjourney 更像是指令式程式設計，ChatGPT 更像是宣告式程式設計，你需要給 Midjourney 完整的指令，它才有可能生成你滿意的結果。
2. Midjourney 有違禁詞的設計：有些詞語無法輸入，比如 🍑 emoji 就沒法輸入，因為這個 emoji 是 butts 的俚語，常常會導致模型生成一些不太好的圖片，所以也被禁止了。


:::tip 提示

關於如何撰寫 text prompt 我會在[🖊️ Text Prompt 篇](/docs/midjourney/mj-tutorial-text-prompt/text-prompt-cautions)介紹。

::: 

## Parameter（引數）

Midjourney 大約有 20 多個引數設定項，我會在下一章介紹幾個常用引數。瞭解完基本引數後，你應該就能用 Midjourney 生成不錯的圖了。

