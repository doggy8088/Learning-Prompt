---
sidebar_position: 3
---

# 技巧 3：使用引導詞，引導模型輸出特定內容

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

在程式碼生成場景裡，有一個小技巧，上面提到的案例，其 prompt 還可以繼續最佳化，在 prompt 最後，增加一個程式碼的引導，告知 AI 我已經將條件描述完了，你可以寫程式碼了。

Better：

```other
Create a MySQL query for all students in the Computer Science Department:
Table departments, columns = [DepartmentId, DepartmentName]
Table students, columns = [DepartmentId, StudentId, StudentName]
SELECT
```

在 prompt 的最後增加 SELECT 可以很好地提示 AI 可以寫 SQL 程式碼了。

同樣的道理，如果你想讓 AI 寫 Python 程式碼，那 import 會是比較好的提示。但需要注意，這個只是告知 AI 可以寫程式碼了，並不能告知 AI 寫何種程式碼，你仍然需要在 prompt 裡增加提示，告知 AI 要生成何種語言的程式碼。

在吳恩達的 ChatGPT Prompt Engineering [課程](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)中，也提到這個技巧，只是在課程中，引導詞並不是放在最後，而是在 prompt 裡直接說明，讓 AI 生成一個 JSON 格式的內容。課程中的例子是這樣的（注意這個是 python 程式碼）：

```python
prompt = f"""
Generate a list of three made-up book titles along \
with their authors and genres.
Provide them in JSON format with the following keys:
book_id, title, author, genre.
"""
```

我簡單解釋下，其關鍵是在 prompt 裡跟 AI 說明，需要 AI 按照 JSON 格式輸出內容。
