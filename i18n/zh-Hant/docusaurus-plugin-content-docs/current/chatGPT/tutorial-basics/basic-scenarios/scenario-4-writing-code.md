---
sidebar_position: 4
---

# 場景 4：無中生有——寫程式碼

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

## 場景介紹

除了回答問題外，另一個重要的場景是讓 AI 根據你的要求完成一些內容生成任務，根據輸出的結果差異，我將其概括為以下幾個主要場景：

1. 無中生有
2. 錦上添花
3. 化繁為簡

本章，我們先來聊聊「無中生有」場景。顧名思義，就是讓 AI 給你生成一些內容。你只需要向 AI 描述你想寫的內容，AI 就會按你的要求寫出該內容。比如：

1. 撰寫招聘訊息
2. 撰寫電商平台的貨物描述
3. 撰寫短視頻指令碼
4. 甚至讓它寫程式碼都可以

像撰寫招聘訊息等，你只需要明確目標，將目標定得比較明確即可生成能讓你較為滿意的答案。本章我想聊下寫程式碼。下面是一個讓 ChatGPT 寫程式碼的案例。

Prompt：

```other
Create a MySQL query for all students in the Computer Science Department:
Table departments, columns = [DepartmentId, DepartmentName]
Table students, columns = [DepartmentId, StudentId, StudentName]
```

Output：

```other
SELECT students.*
FROM students
INNER JOIN departments
ON students.DepartmentId = departments.DepartmentId
WHERE departments.DepartmentName = 'Computer Science';
```

## **技巧 3：使用引導詞，引導模型輸出特定語內容**

在程式碼生成場景裡，有一個小技巧，上面提到的案例，其 prompt 還可以繼續最佳化，在 prompt 最後，增加一個程式碼的引導，告知 AI 我已經將條件描述完了，你可以寫程式碼了。

在 prompt 的最後增加 SELECT 可以很好地提示 AI 可以寫 SQL 程式碼了。Better prompt：

```other
Create a MySQL query for all students in the Computer Science Department:
Table departments, columns = [DepartmentId, DepartmentName]
Table students, columns = [DepartmentId, StudentId, StudentName]
SELECT
```

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
