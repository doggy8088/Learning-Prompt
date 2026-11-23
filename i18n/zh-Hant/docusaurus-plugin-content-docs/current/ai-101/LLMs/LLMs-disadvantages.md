---
sidebar_position: 4
---

# 大語言模型有什麼缺點？

瞭解完原理後，我覺得有必要跟大家聊聊大語言模型的缺點，這樣大家才能知道 AI 的邊界在哪裡，並在可控的邊界內進行創新。

## 缺點一：結果高度依賴訓練語料

正如我前面提到的，當今的語言模型，即使發展了四個版本，但依然沒有脫離「機率計算」，本質上來說它們的核心原理就是「利用已有的訊息來預測其他訊息」。

那這就意味著，大語言模型其實並沒有意識，也不知道對錯，其生成的結果，高度依賴訓練語料。

那會導致怎樣的後果？

1. 如果語料的內容是有偏的（比如帶有種族歧視、性別歧視的內容），甚至是錯誤的，那大語言模型的生成的結果也會是錯誤的。
2. 如果該領域語料很少，大語言模型生成的結果準確率就很低。甚至有可能會出現幻覺（這個是第二個缺點）。

當然面對這個缺點，有什麼方法規避？

第一種方法就是在語料大、且錯誤率低的領域使用 LLMs。

比如語言學領域，像翻譯、或者文案生成這種場景。即使語法錯誤了，但語料裡存在大量的相同用法，那某種程度上來說，模型給的答案也算是對的，有點類似古代的通假字，或者現代的很多流行語。

第二種就是用人工干預。

簡單說來就是人工將語料裡的內容剔除，或者對其進行人類反饋強化學習。但人工干預並不意味著就沒有問題了，這種方法有可能導致新的問題出現，比如將人的主觀好惡加入到模型中，或者有可能偽造一些訊息，加入到模型中。

## 缺點二：Hallucinations

這個可以直譯成「幻覺」，簡單說來，就是會說胡話。有些問題因為語聊很少，計算機率後，會吐出一些很奇怪的內容，比如這個例子，我讓 AI 介紹一個世界上不存在的品牌 Boie 的智慧牙刷：

```other
Tell me about AeroGlide UltraSlim Smart Toothbrush by Boie
```

AI 的回答是，你可以看到 AI 就是在一本正經地說胡話：

```other
The AeroGlide UltraSlim Smart Toothbrush by Boie is a high-tech toothbrush that uses advanced sonic technology to provide a deep and thorough clean. It features a slim and sleek design that makes it easy to hold and maneuver, and it comes with a range of smart features that help you optimize your brushing routine.

One of the key features of the AeroGlide UltraSlim Smart Toothbrush is its advanced sonic technology, which uses high-frequency vibrations to break up plaque and bacteria on your teeth and gums. This technology is highly effective at removing even the toughest stains and buildup, leaving your teeth feeling clean and refreshed.

In addition to its sonic technology, the AeroGlide UltraSlim Smart Toothbrush also comes with a range of smart features that help you optimize your brushing routine. These include a built-in timer that ensures you brush for the recommended two minutes, as well as a pressure sensor that alerts you if you're brushing too hard.

Overall, the AeroGlide UltraSlim Smart Toothbrush by Boie is a highly advanced and effective toothbrush that is perfect for anyone looking to take their oral hygiene to the next level. With its advanced sonic technology and smart features, it provides a deep and thorough clean that leaves your teeth feeling fresh and healthy.
```

## 缺點三：暫時只能解決數學問題

我解釋下，這裡提到的數學問題，並不僅僅指的是數學運算這種數學問題，而是能透過數學解決的問題。比如我們可以研發無人駕駛汽車，當它遇到行人突然橫穿馬路時，能自己煞車停下來，這就是一個數學問題，它透過計算識別行人，並進行煞車。

但如果這輛無人車在一個單行道的巷子裡遇到一輛堵在巷子的汽車，它就沒有辦法了，只能報警，讓司機過來挪車，這就是一個數學無法解決的問題。

暫時來看目前大多數的 LLMs 都只能解決數學問題，有些不可計算的問題，暫時都沒法解決。特別像是需要自己實操進行實驗的問題。

當然我這裡也只是稱其為「暫時」，因為可能未來機器人 + LLMs 有可能會將可計算的範圍拓展寬一點。
