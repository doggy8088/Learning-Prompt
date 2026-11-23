---
sidebar_position: 6
---

# 技巧六：善用 no 引數，去掉不想要的元素

在徽章 Logo 的案例裡，你應該還看過單色的徽章，比如校徽。但 Midjourney 有個習慣就是傾向於生成複雜的內容，生成單色內容，你可以在 prompt 里加入顏色，背景等等詞，讓其變得簡潔。

還有一個技巧是用 no 引數。比如我想製作一個單色校徽，校徽主體是一本書，同時因為 Midjourney 對文字不是很擅長，我還要去掉 text。以下是我的 prompt，我在最後加了 no realistic color（沒有顏色）text（字）。

```other
emblem for a university with large book, vintage --no realistic color text
```

然後我把上面那個 Instant Noodles company 的 prompt 也加了 no text，最後生成的兩組圖片是這樣的（最後需要注意，no 引數在 logo 裡使用時，--no text 有的時候會失效，但如果你去掉 — 直接輸入 no text 就會生效，很神秘，估計是個 bug）：

![MJ038.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/3BBFDC1C-3C18-4C91-8D74-FC2904B7665F_2/XYuI28qn00QDz7HxOwmHoRkRRZQRrC1jwNtRytEmvssz/MJ038.png)
