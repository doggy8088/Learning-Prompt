---
sidebar_position: 1
---
# 什麼是語言模型？

大家或多或少都聽過 ChatGPT 是一個 LLMs，那 LLMs 是什麼？

LLMs 全稱是 Large Language Models，中文是大語言模型。

那麼什麼是語言模型？

語言模型簡單說來，就是對人類的語言建立數學模型，注意，這裡的關鍵是**數學模型**，語言模型是一個由數學公式建立的模型，並不是什麼邏輯框架。這個認知非常重要。

最早提出語言模型的概念的是[賈里尼克博士](https://en.wikipedia.org/wiki/Frederick_Jelinek)。

他是世界著名的語音識別和自然語言處理的專家，他在 IBM 實驗室工作期間，提出了基於統計的語音識別的框架，這個框架結構對語音和語言處理有著深遠的影響，它從根本上使得語音識別有實用的可能。在賈里尼克以前，科學家們把語音識別問題當作人工智慧問題和模式對應問題。而賈里尼克把它當成通訊問題。

為何是通訊問題？為何轉換成通訊問題後，就能實現語音識別？

根據香農確定的現代通訊原理，所謂的通訊，也被稱為通道的編碼和解碼，訊息源先產生原始訊息，然後接收方還原一個和原始訊息最接近的訊息。

比如，你打電話的時候，問對方一句「你吃了晚飯了嗎」，在傳輸前，通訊系統會對這句話進行編碼，編成類似「100111101100000…」，但是傳輸過程中，一定會有訊號損失，接收方收到的編碼可能是「1001111011000…」，此時我們就沒法解碼回原來的句子了。

那如何解決這個問題？

我們可以把與接收到的編碼「1001111011000…」類似的句子都羅列出來，可能的情況是：

- 吃了晚飯了嗎
- 你吃了飯了嗎
- 你吃了晚飯了嗎
- 你吃了晚飯了

然後通訊系統會計算出哪一種的可能性最大，最後把它選出來。只要噪音不大，並且傳輸訊息有冗餘，那我們就能復原出原來的訊息。

賈里尼克博士認為讓電腦理解人類的語言，不是像教人那樣教它語法，而是最好能夠讓電腦計算出哪一種可能的語句機率最大。

這種計算自然語言每個句子的機率的數學模型，就是語言模型。



