---
sidebar_position: 7
---

# 場景 7：化繁為簡——訊息總結

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

## 場景介紹

內容生成大場景下的第二個場景是化繁為簡，這個場景其實很好理解，就是將複雜的內容，轉為簡單的內容，一般常遇到的場景有：

1. 訊息總結：顧名思義，就是對一堆訊息進行總結。
2. 訊息解釋：這個跟改寫內容有點像，但這個更偏向於解釋與總結。下一章會給大家介紹更多的例子。
3. 訊息提取：提取訊息裡的某一段內容，比如從一大段文字中，找到關鍵內容，並分類。

本章會講一下訊息總結。訊息總結還是比較簡單的，基本上在 prompt 里加入總結 summarize 就可以了。但如果你想要一些特別的效果，不妨組合使用之前介紹的技巧，比如：

1. 使用技巧 2，增加總結範例，讓 AI 總結符合你需求的內容
2. 使用技巧 4，增加 role，讓 AI 總結的內容具有一定的風格

不過在這個場景，還有個技巧需要各位注意。

## **技巧 5：使用特殊符號將指令和需要處理的文字分開**

不管是訊息總結，還是訊息提取，你一定會輸入大段文字，甚至多段文字，此時有個小技巧。

可以用『』『將指令和文字分開。根據我的測試，如果你的文字有多段，增加』『』會提升 AI 反饋的準確性（這個技巧來自於 OpenAI 的 API [最佳實踐文件](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api)）

:::info
感謝 CraneHuang6 的提醒，這裡還能用 ### 符號區隔，不過我一般會用『』『 ，因為我有的時候會用 # 作為格式範例，太多 # 的話 prompt 會看起來比較暈 😂
:::

像我們之前寫的 prompt 就屬於 Less effective prompt。為什麼呢？據我的測試，主要還是 AI 不知道什麼是指令，什麼是待處理的內容，用符號分隔開來會更利於 AI 區分。

```other
Please summarize the following sentences to make them easier to understand.
OpenAI is an American artificial intelligence (AI) research laboratory consisting of the non-profit OpenAI Incorporated (OpenAI Inc.) and its for-profit subsidiary corporation OpenAI Limited Partnership (OpenAI LP). OpenAI conducts AI research with the declared intention of promoting and developing a friendly AI. OpenAI systems run on the fifth most powerful supercomputer in the world.[5][6][7] The organization was founded in San Francisco in 2015 by Sam Altman, Reid Hoffman, Jessica Livingston, Elon Musk, Ilya Sutskever, Peter Thiel and others,[8][1][9] who collectively pledged US$1 billion. Musk resigned from the board in 2018 but remained a donor. Microsoft provided OpenAI LP with a $1 billion investment in 2019 and a second multi-year investment in January 2023, reported to be $10 billion.[10]
```

Better prompt:

```other
Please summarize the following sentences to make them easier to understand.

Text: """
OpenAI is an American artificial intelligence (AI) research laboratory consisting of the non-profit OpenAI Incorporated (OpenAI Inc.) and its for-profit subsidiary corporation OpenAI Limited Partnership (OpenAI LP). OpenAI conducts AI research with the declared intention of promoting and developing a friendly AI. OpenAI systems run on the fifth most powerful supercomputer in the world.[5][6][7] The organization was founded in San Francisco in 2015 by Sam Altman, Reid Hoffman, Jessica Livingston, Elon Musk, Ilya Sutskever, Peter Thiel and others,[8][1][9] who collectively pledged US$1 billion. Musk resigned from the board in 2018 but remained a donor. Microsoft provided OpenAI LP with a $1 billion investment in 2019 and a second multi-year investment in January 2023, reported to be $10 billion.[10]
"""
```

另外，在吳恩達的 ChatGPT Prompt Engineering [課程](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)中，還提到，你可以使用其他特殊符號來分割文字和 prompt，比如`<>`，`<tag></tag>` 等，課程中的案例是這樣的（注意這個是 python 程式碼，需要關注的是 prompt 裡的 text）：

```python
text = f"""
You should express what you want a model to do by \
providing instructions that are as clear and \
specific as you can possibly make them. \
This will guide the model towards the desired output, \
and reduce the chances of receiving irrelevant \
or incorrect responses. Don't confuse writing a \
clear prompt with writing a short prompt. \
In many cases, longer prompts provide more clarity \
and context for the model, which can lead to \
more detailed and relevant outputs.
"""

prompt = f"""
Summarize the text delimited by triple backticks \
into a single sentence.
`{text}`
"""
```

如果你是在開發一款允許使用者輸入內容，並對內容進行總結的 AI 產品，那你就可以使用到這個技巧。
