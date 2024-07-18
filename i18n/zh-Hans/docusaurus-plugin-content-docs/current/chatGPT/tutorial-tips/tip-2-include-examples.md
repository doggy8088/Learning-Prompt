---
sidebar_position: 2
---

# 技巧 2：增加範例

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

直接告知 AI 什麼能做，什麼不能做外。在某些場景下，我們能比較簡單地向 AI 描述出什麼能做，什麼不能做。但有些場景，有些需求很難透過文字指令傳遞給 AI，即使描述出來了，AI 也不能很好地理解。

比如給寵物起英文名，裡面會夾雜著一些所謂的名字風格。此時你就可以在 prompt 裡增加一些例子，我們看看這個例子：

```other
Suggest three names for a horse that is a superhero.
```

Output 是這樣的，第一個感覺還行，第二個 Captain 有 hero 的感覺，但 Canter 就像是說這匹馬跑得很慢，而且三個都比較一般，不夠酷。

```other
Thunder Hooves, Captain Canter, Mighty Gallop
```

此時你就可以在 prompt 裡增加一些案例：

```other
Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: Horse
Names:
```

增加例子後，輸出的結果就更酷一些，或者說是我想要的那種風格的名字。

```other
Gallop Guardian, Equine Avenger, The Mighty Stallion
```

以下是一些場景案例，我整理了兩個 Less Effective（不太有效的）和 Better（更好的）prompt，你可以自己嘗試下這些案例：

| 場景            | Less Effective                        | Better                                                                                                                             | 原因                                |
| ------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------- | --------------------------------- |
| 起英文名          | Suggest three English names for a boy. | Suggest three English names for a boy.  <br/> Here are some examples: Jimmy、Jason、James     | 可以在下方執行這個案例，在不給範例的情況下 AI 會給你什麼答案。 |
| 將電影名稱轉為 emoji | Convert Star Wars into emoji.       | Convert movie titles into emoji.  <br/> Back to the Future: 👨👴🚗🕒  <br/>Batman: 🤵🦇  <br/>Transformers: 🚗🤖  <br/>Star Wars: | 可以在下方執行這個案例，在不給範例的情況下 AI 會給你什麼答案。 |


<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Convert Star Wars into emoji" initial-response="🌟⚔️👽💥👨‍🚀👩‍🚀🚀" max-tokens="256" box-rows="3" model-temp="0.7" top-p="1">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>