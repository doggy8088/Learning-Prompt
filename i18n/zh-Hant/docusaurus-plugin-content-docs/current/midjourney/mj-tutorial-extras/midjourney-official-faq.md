---
sidebar_position: 3
---

# Midjourney 官方 FAQ

本章節，主要是翻譯官方的 Discord FAQ 文章，我只挑了一些大家常見的問題進行翻譯，各位可以在官方 Discord prompt-faqs 找到這些原稿。


## 4K、HD 等所謂的 Rendering 詞有用嗎？

[官方解釋](https://discord.com/channels/662267976984297473/1029786943141191700) Rendering 詞包括：

> Rendering words include `4k, 6k, 8k, 16k, ultra 4k, octane, unreal, v-ray, lumion, renderman, hd, hdr, hdmi, high-resolution, dp, dpi, ppi, 1080p`.

有用嗎？官方的解釋是：

> Rendering words do ***something*** to your image. They may also be what's ***breaking*** your prompt. So, as part of troubleshooting, we recommend removing them. Removing them often fixes issues with blurring, focus, clarity, and coherence.

意思就是會影響，有一定作用，但弊大於利。加入這些詞，反而會破壞你的 prompt，特別是一些攝影場景，比如你需要用到諸如背景虛化等效果，再加上 4K 可能就會破壞背景虛化。

所以官方建議去掉這些詞。

## Prompt 裡的詞語順序會影響結果嗎？

[官方解釋](https://discord.com/channels/662267976984297473/1020572050898813029)：
> Word order matters. Early words are generally more influential.

順序會影響結果，越早出現的詞，對結果影響越大。所以我設計的模版才會將「型別」放在最前面。因為這是我的最重要的目標。官方還建議：

1. 避免列舉詞語：例舉的意思是在 prompt 裡寫多個同一個意思的詞。
2. 使用具體的相關詞語：越具體生成的圖片越符合 prompt。
3. 用句子片段：就是不要像寫雅思作文那樣，寫定語從句、長難句，而是將這些詞切開。
4. 避免使用4K、8K、16K等安慰劑詞彙。

## 為何 Seed 不生效？

[官方對 Seed 的評價](https://discord.com/channels/662267976984297473/1017917091606712430/threads/1022698154170253363)是：

> - Seeds can not transfer the style or appearance of images across jobs.
> - Seeds can not be used to 'bookmark' styles or appearance. (i.e. "Use seed XYZ for that!")
> - Seeds are the weakest force in Midjourney. In --v 5 they may not work as expected at all.

簡單總結，就是這個功能在 V5 版本下非常不穩定，你不要預期它能跨圖片傳輸 prompt。

