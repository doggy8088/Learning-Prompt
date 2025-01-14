---
sidebar_position: 3
---

# 場景 3：推理

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>


## 場景介紹

在問答這個大場景下，還有一個子場景是推理，這個場景非常有意思，而且是個非常值得深挖的場景，prompt 在此場景裡發揮的作用非常大。

如果你想用 ChatGPT API 做點什麼小應用，我建議可以從這個場景入手，相對來說沒有其他場景那麼紅海。

舉個比較簡單的例子，我將美國工商管理碩士的入學考試 GMAT 的一道數學題輸入進了 ChatGPT：

```other
If a real estate agent received a commission of 6 percent of the selling price of a certain house, what was the selling price of the house?
(1) The selling price minus the real estate agent」s commission was $84,600.
(2) The selling price was 250 percent of the original purchase price of $36,000.

(A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
(B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
(C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
(D) EACH statement ALONE is sufficient.
(E) Statements (1) and (2) TOGETHER are NOT sufficient.
```

這道題目的中文意思是這樣的（你不妨也思考下這個題目？）：

```other
如果一個房地產經紀人的佣金是某個房子的售價的6％，那麼這個房子的售價是多少？
（1）售價減去房地產經紀人的佣金為84,600美元。
（2）購買價是36,000美元，售價是購買價的250%。

（A）僅陳述（1）足以回答問題，但僅陳述（2）不能回答問題。
（B）僅陳述（2）足以回答問題，但僅陳述（1）不能回答問題。
（C）兩個陳述合起來足以回答問題，但沒有一個陳述單獨足以回答問題。
（D）每個陳述單獨足以回答問題。
（E）陳述（1）和（2）合起來不能回答問題。
```

它的 Output 是這樣的，它會根據題目的要求去推理和運算：

```other
Let's assume the selling price of the house is S.

According to the given information, the real estate agent's commission is 6% of S, which is 0.06S.

So, the amount received by the seller after paying the commission would be (S - 0.06S) = 0.94S.

Statement (1) tells us that 0.94S = $84,600. Solving for S, we get S = $90,000.

Therefore, statement (1) alone is sufficient to determine the selling price of the house.

Statement (2) tells us that the selling price is 250% of the original purchase price, which means S = 2.5*$36,000 = $90,000.

Therefore, statement (2) alone is also sufficient to determine the selling price of the house.

Since both statements individually provide the same answer, we can conclude that together they are also sufficient to determine the selling price of the house.

Hence, the answer is (D) EACH statement ALONE is sufficient.
```

翻譯成中文是這樣的：

```other
假設房子的售價為S。

根據所給訊息，房地產經紀人的佣金是S的6％，即0.06S。

因此，在支付佣金後賣方收到的金額為（S-0.06S）= 0.94S。

陳述（1）告訴我們，0.94S = 84,600美元。解出S，我們得到S = $90,000。

因此，陳述（1）單獨足以確定房子的售價。

陳述（2）告訴我們，售價是原始購買價的250％，這意味著S = 2.5 * $36,000 = $90,000。

因此，陳述（2）單獨也足以確定房子的售價。

由於兩個陳述分別提供相同的答案，我們可以得出結論，它們共同足以確定房子的售價。

因此，答案是（D）每個陳述單獨足以回答問題。
```

這個場景還比較簡單，我就不在這舉更多例子了，你可以將各種題目輸入進 ChatGPT 裡試試。

