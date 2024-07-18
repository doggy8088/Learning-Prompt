---
sidebar_position: 12
---

# 技巧十二：增加權重

各位有沒有發現，上面那個 Chinese 手辦生成的結果好像只有第三張是中國人面孔？原因是 Chinese style 的權重太低，所以僅輸出了一個結果。你在實踐的過程中，也肯定會遇到，AI 忽略了某些 prompt 詞的情況，比如你提到畫面中要有一隻鳥，但它就是沒畫出來。

那為何會產生這樣的結果？原因 Midjourney 的 prompt 權重是按照順序逐個降低（詳情請見我翻譯的 Midjourney 官方 FAQ），在我們上面的 prompt，我們將 Chinese Style 放到了最後，所以生成的結果也是最少的。忽略了某些詞，這個原因暫時為止，但應該很可能是權重導致的問題。

**增加權重的方法有很多，最簡單的方法就是調整順序**，比如將上面的 Chinese Style 放到最前面（然後生成的結果就是眯眯眼 style 了 🤣，我生成了兩次，第二次好一些）：

```other
product photography, Chinese Style,Joan of Arc, full body, hand painted, plastic, detailed, white background, studio lighting
```

調整下順序，效果就大不一樣，所以各位不要迷信所謂的 prompt 樣板，多試試。

![MJ071.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/6E917EAA-BBFD-4635-AB8E-2D65E67F9FF3_2/Oy0pJCtpE5QtmqFlxePvrjeZmm5SZXvtqXhQag6J4EUz/MJ071.png)

**第二種方法是 Slider 方法。**

你需要在 prompt 最後加  ，然後加上你需要調整權重的詞語，接著再加  ，最後加上權重值。比如還是上面的例子，我想突出 Chinese style 但不想調整順序，就可以改為：

```other
product photography,Joan of Arc, full body, hand painted, plastic, detailed, white background, studio lighting, Chinese Style :: Chinese Style :: 0.5
```

然後你會發現，好像權重太高了，生成了跟 prompt 無關的圖（下方左圖），那我們可以在原來的基礎上，再加以下 Joan of Arc 的權重（下方右圖）：

```other
product photography,Joan of Arc, full body, hand painted, plastic, detailed, white background, studio lighting, Chinese Style :: Joan of Arc:: 0.25 style of Chinese:: 0.5
```

你可以看到，調整引數後，生成的 4 張圖有 2 張具備較強的 Chinese 風格：

![MJ072.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/E9CE4D80-F8C7-4853-847D-C5D4554AFD41_2/sJD7ejS8e3Q3xV8O38UyS6Uh6ZtslrBh2XQv1bodhvwz/MJ072.png)

不過坦率說來，這個方法，並不特別適合這個案例，調整主體內容，或者順序， ROI 會更高一些，這個方法更適合 miss 掉某個 prompt 詞時使用，比如官方的案例是這樣的：

```other
several sad cats watch a crying woman in a home-office environment with laptop
```

生成的圖片裡（左四張圖），貓咪們都看著你（你可能才是 crying woman 😂），如果用 slider 的功能（右邊四張），crying woman 就出現在畫面裡了：

```other
several sad cats watch a crying woman in a home-office environment with laptop:: several sad cats::0.5 crying woman::0.6 laptop::0.7
```

另外需要注意，slider 可用的引數有 0.25、0.5、0.6、0.7，也可以用這個方法降低權重，區間是 -0.7、-0.6、-0.5、-0.25：

![MJ073.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/D6451060-D2BE-47D3-A9BF-4921FC13029A_2/5Two9kXOOTkE1TETh2HI30leqOSxLrzd0mhE5ErcBpwz/MJ073.png)

如果你用了 slider 還是沒有出現應該有的畫面，**那還有一個大招 cowbell**，坦率說來，這個並不符合 Midjourney 的官方最佳實踐，但的確是個可行的方法，以下面這個 prompt 為例，生成的圖片裡，woman 看起來並不 shy（左邊四張圖）：

```other
A songbird sits on the shoulder of a shy blonde woman dressed in white.
```

此時你可以重複重複再重複（我覺得這就是為何這個方法叫 cowbell 的原因）：

```other
A songbird sits on the shoulder shoulder shoulder shoulder shoulder shoulder of a shy shy shy shy shy shy shy blonde woman dressed in white.
```

![MJ074.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/41FD5011-5634-40CF-9F8F-2AF36AC425BA_2/eFAOEBOZslASMqPp8fmkIhNPBhsrWWAaod8ZzUQyHy0z/MJ074.png)