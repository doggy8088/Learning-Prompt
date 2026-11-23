---
sidebar_position: 5
---

# 技巧五：增加風格——藝術家

> 因為篇幅的原因，本教程不會介紹特別多的風格，我會在我的[小紅書賬號](https://www.xiaohongshu.com/user/profile/6073d38d00000000010068a6?xhsshare=CopyLink&appuid=6073d38d00000000010068a6&apptime=1679646639)上更新。感興趣的朋友可以去關注下。

前一章介紹了增加藝術運動，從而使得生成的圖片更加特別，本章再教大家一個方法，是增加藝術家的名字。
首先需要注意，Midjourney 支援大部分的藝術運動，但在藝術家的支援上，相對來說比較少，經過網友們的不懈努力，截止到 3 月 31 日，V4 已知支援的藝術家有 2000 多位，V5 有 100 多位。
其中在榜的 Logo 設計師，只有 [Paul Rand](https://zh.wikipedia.org/zh-tw/%E4%BF%9D%E7%BD%97%C2%B7%E5%85%B0%E5%BE%B7) 和 [Saul Bass](https://zh.wikipedia.org/zh-tw/%E7%B4%A2%E7%88%BE%C2%B7%E5%B7%B4%E6%96%AF)，Paul 是 IBM、英孚、NeXT logo 的設計師，Saul 是美國聯合航空、AT&T logo 的設計師。
使用方法很簡單，在 prompt 最後加上 by Paul Rand 即可：

```other
letter A logo, lettermark, typography, vector simple, by Paul Rand
```

當然也不是說只能加 Logo 設計師，加上沒有設計過 Logo 的設計師名字，也很有意思。比如右邊四張圖我加的就是 Piet Cornelies Mondrian，第三張 logo 有 Composition II in Red, Blue, and Yellow 那味了。左邊四張則是 Paul 的，第二張紅色框加黑色 A，有他的經典眼鏡 logo 那味，非常喜歡：

![MJ036.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/AE2B3E95-3FE1-4CB9-9222-F900DCE1A3F0_2/AR2GvKhOOgxDVa6nFmWZMoMdbfmYEXZPjXqUmpW3jpsz/MJ036.png)

最後需要注意，增加藝術家名，有可能出現以下情況：

1. 多長圖的風格都很像：這是因為某些藝術家有非常強烈的標誌性風格，比如我很喜歡的 Piet Mondrian，你用他的名字，會發現可能生成的很多張圖都是 Composition II in Red, Blue, and Yellow 的風格。
2. 生成的圖看上去不太像該藝術家的風格：我自己測試，發現有兩種可能，一種是模型並沒有學習這個藝術家的作品（特別新的藝術家我感覺一般都不會收錄），另一種可能是你的 prompt 裡的一些詞，跟該藝術家的風格有衝突，比如用了達芬奇 Leonardo da Vinci，但主體是個日本二次元小姑娘。

PS：在本教程裡的 Artist List 可以看到我比較喜歡的藝術家。