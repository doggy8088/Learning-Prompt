---
sidebar_position: 2
---

# 場景 2：基於範例回答

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

## 場景介紹

在某些場景下，我們能比較簡單地向 AI 描述出什麼能做，什麼不能做。但有些場景，有些需求很難透過文字指令傳遞給 AI，即使描述出來了，AI 也不能很好地理解。

比如給寵物起英文名，裡面會夾雜著一些所謂的名字風格。此時你就可以在 prompt 裡增加一些例子，我們看看這個例子。

這個是沒有任何範例的 Prompt：

```other
Suggest three names for a horse that is a superhero.
```

Output 如下所示。第一個感覺還行，第二個 Captain 有 hero 的感覺，但 Canter 就像是說這匹馬跑得很慢，感覺不太合適，而且三個都比較一般，不夠酷。

```other
Thunder Hooves, Captain Canter, Mighty Gallop
```

## **技巧 2：增加範例**

如果你無法用文字準確解釋問題或指示，你可以在 prompt 裡增加一些案例：

```other
Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: Horse
Names:
```

增加例子後，Output 的結果就更酷一些，或者說是接近我想要的那種風格的名字。

```other
Gallop Guardian, Equine Avenger, The Mighty Stallion
```

以下是一些場景案例，我整理了兩個 Less Effective（不太有效的）和 Better（更好的）prompt，你可以自己嘗試下這些案例：

| 場景                 | Less Effective                                                                                                                | Better                                                                                                                                                                                                                                                                                   | 原因                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| 起產品名             | Product description: A pair of shoes that can fit any foot size.<br/>Seed words: adaptable, fit, omni-fit.<br/>Product names: | Product description: A home milkshake maker<br/>Seed words: fast, healthy, compact.<br/>Product names: HomeShaker, Fit Shaker, QuickShake, Shake Maker<br/>Product description: A pair of shoes that can fit any foot size.<br/>Seed words: adaptable, fit, omni-fit.<br/>Product names: | 可以在下方執行這個案例，在不給範例的情況下 AI 會給你什麼答案。 |
| 將電影名稱轉為 emoji | Convert Star Wars into emoji                                                                                                  | Convert movie titles into emoji. <br/>Back to the Future: 👨👴🚗🕒<br/>Batman: 🤵🦇<br/>Transformers: 🚗🤖<br/>Star Wars:                                                                                                                                                                | 可以在下方執行這個案例，在不給範例的情況下 AI 會給你什麼答案。 |

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Convert Star Wars into emoji" initial-response="🌟⚔️👽💥👨‍🚀👩‍🚀🚀" max-tokens="256" box-rows="3" model-temp="0.7" top-p="1">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>

:::info 🔴
你可能在試用此技巧的時候發現，即使給了案例，模型也不一定會回傳正確的答案，此時你就需要用到更高階的技巧，在高階篇我會講如何最佳化這個提示，從而讓結果更加準確。
:::
