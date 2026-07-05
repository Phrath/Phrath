/* ═══════════════════════════════════════════════════
   伯拉大國際地產 - 物件資料檔
   ═══════════════════════════════════════════════════

   【使用說明】新增一筆物件的步驟：

   1. 把物件照片放進 listings-images 資料夾
      （建議檔名：案件編號-01.jpg、案件編號-02.jpg...最多12張）

   2. 在下方 LISTINGS 陣列中，複製一組 { ... } 貼在最前面，
      並依照您的物件修改以下欄位：

      id        : 案件編號（自訂，例如 "PH-001"，需與其他物件不重複）
      type      : 類型，只能填以下四種之一：
                  "土地" / "住宅" / "商辦" / "店面"
      title     : 物件標題（例如：台中七期景觀住宅）
      ping      : 坪數（數字，例如 45）
      price     : 總價（文字，例如 "3,280萬" 或 "面議"）
      address   : 概略地址或區域（例如：台中市西屯區）
      contact   : 聯繫方式（例如：LINE諮詢 或 電話）
      images    : 照片檔名陣列（對應 listings-images 資料夾內的檔案）
      note      : 簡短補充說明（選填，可留空字串 ""）

   3. 存檔後上傳，網站會自動顯示新物件，不需要修改其他檔案。

   ═══════════════════════════════════════════════════ */

const LISTINGS = [

  {
    id: "PH-001",
    type: "住宅",
    title: "台中七期景觀住宅",
    ping: 45,
    price: "3,280萬",
    address: "台中市西屯區",
    contact: "LINE 諮詢",
    images: ["placeholder-01.jpg", "placeholder-02.jpg"],
    note: "近市政商圈，採光通風佳"
  },
  {
    id: "PH-002",
    type: "土地",
    title: "七期精華角地",
    ping: 120,
    price: "面議",
    address: "台中市西屯區",
    contact: "LINE 諮詢",
    images: ["placeholder-03.jpg"],
    note: "臨路寬廣，適合自建或投資"
  },
  {
    id: "PH-003",
    type: "店面",
    title: "台灣大道一線店面",
    ping: 32,
    price: "月租 12萬",
    address: "台中市西屯區",
    contact: "LINE 諮詢",
    images: ["placeholder-04.jpg"],
    note: "人流量大，適合各式商業經營"
  },

  {
    id: "PH-004",
    type: "商辦",
    title: "七期精華商辦",
    ping: 68,
    price: "5,200萬",
    address: "台中市西屯區",
    contact: "LINE 諮詢",
    images: ["placeholder-04.jpg"],
    note: "臨大道，交通便利，適合企業總部"
  }

];
