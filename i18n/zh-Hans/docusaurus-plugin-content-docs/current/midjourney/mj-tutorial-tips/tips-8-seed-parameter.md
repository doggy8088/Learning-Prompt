---
sidebar_position: 8
---
# 技巧八：使用 Seed 引數對圖進行二次修改

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

