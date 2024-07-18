---
sidebar_position: 5
---

# 訂閱 Midjourney 會員

## 如何訂閱？

你可以在 Midjourney 的伺服器，或者 Midjourney Bot 聊天視窗，輸入 /subscribe，然後按下回車：

![MJ010.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/FF0900C2-310C-4919-877B-CE0C5AD57201_2/GYoKiAcee0vFK7gsuffsxLzk9PsopzvV1cvJORt4lEEz/MJ010.png)

然後 Bot 就會傳送這樣的訊息，點選 Open subscription 按鈕就能進入到付費頁面了：

![MJ011.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/26F1A0DD-C603-41E0-8D2B-1205A1A7658B_2/pYHGFSwBpsnJk9CP2LrhG15wzfZ7z2872Nzqf4kxf0sz/MJ011.png)

付費的過程還比較簡單，我這裡就不做介紹了，只是需要注意，Midjourney 的付費功能用的服務提供商是 Stripe ，目前應該只支援信用卡支付，所以如果要買會員需要有一張信用卡。

## 各套餐之間的差異有哪些？

我把差異的都總結在下表（資料截止至 2023-03-28）：

|                      | **Basic Plan**           | **Standard Plan** | **Pro Plan** |
| -------------------- | ------------------------ | ----------------- | ------------ |
| 月付價格              | $10 / month              | $30 / month       | $60 / month  |
| 年付價格              | $8 / month               | $24 / month       | $48 / month  |
| Fast Generations     | 3 hours 左右（大約能生成 200 張圖） | 15 hours          | 30 hours     |
| Concurrent Fast Jobs | 3                        | 3                 | 12           |
| Relaxed Generations  | ❌                        | ✅                 | ✅            |
| Stealth Mode         | ❌                        | ❌                 | ✅            |

首先，Midjourney 的計費跟 OpenAI 不太一樣，OpenAI 計費用的是 Token，Midjourney 用的計費方式是時間，因為其主要的成本在 GPU 計算，Midjourney 採用這種方式，估計也是因為他們的 GPU 也是租的，租用 GPU 的費用也是按時間計算，所以轉嫁到消費者上也按照時間算了，Basic 版本看後台，Fast Generation 的時間是 3h 20 min，然後官方說明是應該能生成 200 多張圖。

不過每張圖所耗的 GPU 時間並不固定，還取決於你的圖片質量等，影響費用的因素有以下幾種，各個引數對應的影響，可以查閱教程裡關於引數的內容。我這不展開解釋，簡而言之，圖片質量越好，個性化因素越多，價格就越貴。

|                         | **低於平均價格**                    | **平均價格**      | **高於平均價格**                        |
| ----------------------- | ----------------------------- | ------------- | --------------------------------- |
| 不同任務                    | Variations（就是生成圖片後，圖片下的 V 按鈕） | /imagine 生成圖片 | Upscale（就是生成圖片後，圖片下的 U 按鈕）        |
| Aspect Ratio 長寬比        |                               | 預設            | tall or wide（換句話說，改這個引數就要花更多的錢）   |
| Model Version 模型版本      |                               | 預設（—V 4）      | —test or —testp 這兩個模型會更貴一些，我一般很少用 |
| Quality Parameter影象質量引數 | --q 0.25 or —q 0.5             | 預設（—q 1）      | —q 2                              |
| Stop Parameter停止引數      | --stop 10 到 —stop 99           | 預設（—stop 100） |                                   |

然後 Standard Plan 開始還有一種叫 Relaxed Gerneration 的模式，這種模式下，該套餐付費使用者，可以無限出圖，但圖片生成的速度會變慢，按照官方解釋是 0-10 分鐘。

其實本質上它是一種 GPU 空閒資源排隊方案，切換到 Relax 模式下，所有生成圖片請求會進入到一個排隊等待狀態，當沒有 Fast 模式下的使用者使用 GPU 時，就會將 GPU 資源給 Relax 模式的使用者，所以才需要等待那麼長的時間，本質上是閒置資源的利用 。

另外需要注意：

1. 你用得越多 Relax 模式，你等待的時間就越長，這個有點像是手機運營商的無限套餐邏輯，流量達到某個閾值就會降速，所以如果你是和他人合購賬號，就需要注意了，Fast 時間基本上就是先到先得，Relax 模式越用會越慢。
2. 即使你上個月底已經切換為 Relax 模式，每個月的月初，系統也會自動將模式切換為 Fast 模式。

最後還有一個 Stealth 模式，Midjourney 是一個預設開放的社群，所以你在 Midjourney 上生成的圖片（包括你私聊 Bot 生成的圖片），都是公開的，你可以在會員 Gallery 那看到所有人生成的圖片。

只有 Pro 版本可以不公開自己的圖片到 Gallery，另外還有一點需要注意，如果你開啟了 Stealth 模式，然後在 Midjourney 的 Discord 公開頻道生成圖片，Stealth 模式不生效，生成的圖片依然會被 Discord 公開頻道裡的人看見。

