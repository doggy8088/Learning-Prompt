---
sidebar_position: 5
---

# 技巧 5：使用特殊符號指令和需要處理的文字分開

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

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
