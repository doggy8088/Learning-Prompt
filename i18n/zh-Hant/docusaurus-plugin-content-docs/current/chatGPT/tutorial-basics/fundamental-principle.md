---
sidebar_position: 3
---

# 基本原則 & 建議

在和 ChatGPT 對話時，亦或者在使用和設計 prompt 時，有以下幾個原則與建議。記住這幾個原則，能讓你寫出更好的 prompt 😁

## 原則一：建議使用最新的模型

如果你是直接使用 AI 產品，比如 ChatGPT 或者 Midjourney，那無需在意這個原則。如果你是透過 API 或者 OpenAI Playground 的方式使用，則建議你先使用最新的模型測試。

## 原則二：Prompt 裡最好包含完整的訊息

這個是對結果影響最大的因素。比如如果你想讓 AI 寫一首關於 OpenAI 的詩。

Less effective prompt:

```other
Write a poem about OpenAI.
```

它生成的答案可能就會很寬泛，而更好的方式是增加更多的訊息。

Better prompt:

```other
Write a short inspiring poem about OpenAI, focusing on the recent DALL-E product launch (DALL-E is a text to image ML model) in the style of a {famous poet}
```

## 原則三：Prompt 最好簡潔易懂，並減少歧義

這個比較好理解，即使你跟人說話，說一些簡單的短句，對方也會更容易聽懂，AI 也是這樣。另外，在 prompt 裡也需要減少一些歧義，少用模稜兩可的詞語。

比如像這個就很不明確，什麼叫 not too much more？

```other
The description for this product should be fairly short, a few sentences only, and not too much more.
```

更好的 prompt 是這樣的，明確告知要寫多少句話，就比較明確：

```other
Use a 3 to 5 sentence paragraph to describe this product.
```

另外需要注意的是，簡單並不代表簡短。你的 prompt 也可以很長，只要你的 prompt 描述更充分就可以，即使長一點也沒有關係。

## 原則四：Prompt 要使用正確的語法、拼寫，以及標點

特別是在使用英語的 prompt 的時候，一定要注意語法和拼寫。
:::info 🚧
例子待補充
:::

## 原則五：從簡單的先開始，並給產品多一點耐心

最後一點算是我個人的建議。如我在前面提到的例子 ` What is 100*100/40*56？`一樣，如果發現機器理解錯誤，不妨補充點訊息，不妨多實驗幾次，給 AI 多一點耐心。
