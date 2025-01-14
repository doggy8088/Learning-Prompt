---
sidebar_position: 6
---

# 場景 6：錦上添花——訊息解釋

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

## 場景介紹

錦上添花下的第二大的場景是訊息解釋。它跟改寫內容有點像，但又不太一樣，訊息解釋有可能提供超過原文內容的訊息。

舉幾個訊息解釋的例子，大家應該就能理解了：

1. 解釋程式碼：比如你看到一段 Python 的程式碼，但你看不懂，你可以讓 AI 解釋下程式碼的含義。
2. 解釋論文：看某篇論文看不懂，或者論文裡的某一段看不懂，你也可以讓 AI 解釋。

以解釋程式碼為例，它的 prompt 是這樣的（此案例來自 OpenAI [官方案例](https://platform.openai.com/examples/default-python-to-natural-language)）：

```other
Explanation of what the code does:

Python 3 
def remove_common_prefix(x, prefix, ws_prefix): 
    x["completion"] = x["completion"].str[len(prefix) :] 
    if ws_prefix: 
        # keep the single whitespace as prefix 
        x["completion"] = " " + x["completion"] 
return x
```

以下是 ChatGPT 的 Output，它闡述了這段程式碼是拿來幹什麼的，同時還闡述了各個引數的含義：

```other
This is a Python function called remove_common_prefix that takes in three parameters: x, prefix, and ws_prefix.

The x parameter is assumed to be a Pandas DataFrame or Series object with a column named "completion", which contains strings that may or may not start with the prefix string.

The prefix parameter is a string that represents the common prefix that needs to be removed from the beginning of each string in the "completion" column of the DataFrame.

The ws_prefix parameter is a Boolean value that indicates whether or not to keep a single whitespace character as a prefix after the common prefix has been removed.

The function modifies the "completion" column of the DataFrame by removing the prefix string from the beginning of each string in that column using the Pandas str method and string slicing. The len(prefix) : syntax is used to slice the string starting from the character that follows the prefix.

If ws_prefix is True, then the function adds a single whitespace character as a prefix to each string in the "completion" column after removing the prefix.

Finally, the modified DataFrame is returned by the function.
```

