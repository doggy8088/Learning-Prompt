---
sidebar_position: 1
---
<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>


看完基礎篇的各種場景介紹後，你應該對 Prompt 有較深的理解。

之前的章節我們講的都是所謂的「術」，更多地集中講如何用，但講「道」的部分不多。高階篇除了會講更進階的運用外，還會講更多「道」的部分。

高階篇的開篇，我們來講一下構成 prompt 的框架。

## Basic Prompt Framework

查閱了非常多關於 ChatGPT prompt 的框架資料，我目前覺得寫得最清晰的是 Elavis Saravia [總結](https://github.com/dair-ai/Prompt-Engineering-Guide/blob/main/guides/prompts-intro.md)的框架，他認為一個 prompt 裡需包含以下幾個元素：

- **Instruction（必須）：** 指令，即你希望模型執行的具體任務。
- **Context（選填）：** 背景資訊，或者說是上下文資訊，這可以引導模型做出更好的反應。
- **Input Data（選填）：** 輸入資料，告知模型需要處理的資料。
- **Output Indicator（選填）：** 輸出指示器，告知模型我們要輸出的型別或格式。

只要你按照這個框架寫 prompt ，模型返回的結果都不會差。

當然，你在寫 prompt 的時候，並不一定要包含所有4個元素，而是可以根據自己的需求排列組合。比如拿前面的幾個場景作為例子：

- 推理：Instruction + Context + Input Data
- 資訊提取：Instruction + Context + Input Data + Output Indicator

## CRISPE Prompt Framework

另一個我覺得很不錯的 Framework 是 [Matt Nigh](https://github.com/mattnigh/ChatGPT3-Free-Prompt-List) 的 CRISPE Framework，這個 framework 更加複雜，但完備性會比較高，比較適合用於編寫 prompt 範本。CRISPE 分別代表以下含義：

- **CR：** Capacity and Role（能力與角色）。你希望 ChatGPT 扮演怎樣的角色。
- **I：** Insight（洞察力），背景資訊和上下文（坦率說來我覺得用 Context 更好）。
- **S：** Statement（指令），你希望 ChatGPT 做什麼。
- **P：** Personality（個性），你希望 ChatGPT 以什麼風格或方式回答你。
- **E：** Experiment（嘗試），要求 ChatGPT 為你提供多個答案。

以下是這幾個引數的例子：

| **Step**          | **Example**                          |
| ----------------- | ------------------------------ |
| Capacity and Role | Act as an expert on software development on the topic of machine learning frameworks, and an expert blog writer.<br/>把你想象成機器學習框架主題的軟體開發專家，以及專業部落格作者。                                                                                                                                                                                    |
| Insight           | The audience for this blog is technical professionals who are interested in learning about the latest advancements in machine learning.<br/>這個部落格的讀者主要是有興趣瞭解機器學習最新進展技術的專業人士。                                                                                                                                                            |
| Statement         | Provide a comprehensive overview of the most popular machine learning frameworks, including their strengths and weaknesses. Include real-life examples and case studies to illustrate how these frameworks have been successfully used in various industries.<br/>提供最流行的機器學習框架的全面概述，包括它們的優點和缺點。包括現實生活中的例子，和研究案例，以說明這些框架如何在各個行業中成功地被使用。 |
| Personality       | When responding, use a mix of the writing styles of Andrej Karpathy, Francois Chollet, Jeremy Howard, and Yann LeCun.<br/>在回應時，混合使用 Andrej Karpathy、Francois Chollet、Jeremy Howard 和 Yann LeCun 的寫作風格。                                                                                                                                 |
| Experiment        | Give me multiple different examples.<br/>給我多個不同的例子。                                                                                                                                                                                                                                                                                    |

將所有的元素都組合在一起，就變成了這樣的 prompt，對比基礎 prompt 產生的結果會非常不一樣，各位可以在下方試用：

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Act as an expert on software development on the topic of machine learning frameworks, and an expert blog writer.The audience for this blog is technical professionals who are interested in learning about the latest advancements in machine learning.Provide a comprehensive overview of the most popular machine learning frameworks, including their strengths and weaknesses. Include real-life examples and case studies to illustrate how these frameworks have been successfully used in various industries.When responding, use a mix of the writing styles of Andrej Karpathy, Francois Chollet, Jeremy Howard, and Yann LeCun.Give me multiple different examples." initial-response="" max-tokens="256" box-rows="3" model-temp="0.7" top-p="1">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>


