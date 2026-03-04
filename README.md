# Login Form Practice

使用 **Vite + Vanilla JavaScript (ES Modules)**
開發的登入表單驗證實作專案。\
本專案聚焦於**密碼驗證邏輯設計、事件流程控制與 API
串接實作**，強調程式結構拆分與可維護性。

---

## 🛠 技術棧與工具

- 核心語法：JavaScript (ES6+), HTML5, CSS3
- 開發環境：Vite (ES Modules)
- 樣式重置：reset-css
- 測試 API：JSONPlaceholder (REST API 模擬)

---

## 🔍 專案說明

此專案模擬登入流程中的密碼驗證機制，包含：

- 即時驗證（input 事件）
- 表單送出前防呆機制
- fetch API 串接測試端點
- 錯誤訊息動態顯示

重點不在畫面設計，而在**邏輯拆分與流程控制能力**。

---

## 🧠 技術重點

### 1️⃣ 表單驗證邏輯模組化

- 將密碼規則檢查拆分為獨立函式
- 驗證邏輯與 UI 顯示分離
- 提升可讀性與後續擴充性

---

### 2️⃣ 即時密碼驗證機制

監聽 `input` 事件，動態檢查：

- 長度至少 8 碼
- 下列 4 種字元類型至少符合 3 種：
  - 英文大寫 (A--Z)
  - 英文小寫 (a--z)
  - 數字 (0--9)
  - 特殊符號 `!@#$%^&*`

即時回饋錯誤訊息至畫面。

---

### 3️⃣ 表單送出流程控制

- 使用 `preventDefault()` 攔截預設送出
- 驗證通過才允許發送請求
- 使用 `FormData` 取得欄位資料
- 使用 `fetch` 發送 `POST` 請求
- 根據 API 回應狀態顯示成功或錯誤訊息

---

## 🏗 核心函式設計

### `getPswRules(password)`

檢查密碼規則，回傳：

```js
{
  isLongEnough: boolean,
  rules: number // 符合的字元種類數
}
```

---

### `pswValid(isLongEnough, rules)`

判斷密碼是否通過驗證條件：

- 長度達標
- 字元種類 ≥ 3

---

### `showPswError(isLongEnough, rules)`

- 動態組合錯誤訊息
- 顯示於 `#passwordError`
- 僅在不合法時顯示

---

## 🌐 API 測試說明

- Endpoint\
  `https://jsonplaceholder.typicode.com/posts`

- Method\
  `POST`

- Content-Type\
  `application/json`

⚠️ 此 API 為測試用途，僅用於模擬登入送出流程。

---

## 📁 專案結構

```txt
login-practice/
├─ index.html
├─ src/
│  ├─ main.js
│  └─ style.css
├─ package.json
└─ README.md
```

---

## 🚀 本機啟動方式

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

### 打包與預覽

```bash
npm run build
npm run preview
```
