/* ═══════════════════════════════════════════════════
   伯拉大國際地產 - 物件資料檔
   ═══════════════════════════════════════════════════

   【使用說明】新增一筆物件的步驟：

   1. 把物件照片放進 listings-images 資料夾
      （建議檔名：案件編號-01.jpg、案件編號-02.jpg...最多12張）

   2. 在下方 LISTINGS 陣列中，複製一組 { ... } 貼在最前面，
      並依照您的物件修改以下欄位：

      id         : 案件編號（自訂，例如 "PH-001"，需與其他物件不重複）
      type       : 類型，只能填以下四種之一：
                   "土地" / "住宅" / "商辦" / "店面"
      dealType   : 交易方式，只能填 "買賣" 或 "租賃"
      title      : 物件標題（例如：台中七期景觀住宅）
      ping       : 坪數（數字，例如 45）
      price      : 總價／租金顯示文字（例如："3,280萬"、"月租 12萬"、"面議"）
      priceValue : 篩選用數字。
                   若 dealType 為 "買賣"，填總價（單位：萬），例如 3280。
                   若 dealType 為 "租賃"，填月租金（單位：元），例如 120000。
                   若價格為「面議」等無法換算的情況，請填 null（不參與價格篩選，但仍會顯示）。
      address    : 概略地址或區域（例如：台中市西屯區）
      contact    : 聯繫方式（例如：LINE諮詢 或 電話）
      images     : 照片檔名陣列（對應 listings-images 資料夾內的檔案）
      note       : 簡短補充說明（選填，可留空字串 ""）

   3. 存檔後上傳，網站會自動顯示新物件並套用篩選條件，不需要修改其他檔案。

   ═══════════════════════════════════════════════════ */

const LISTINGS = [

  {
    id: "PH-001",
    type: "住宅",
    dealType: "買賣",
    title: "台中七期景觀住宅",
    ping: 45,
    price: "3,280萬",
    priceValue: 3280,
    address: "台中市西屯區",
    contact: "LINE 諮詢",
    images: ["placeholder-01.jpg", "placeholder-02.jpg"],
    note: "近市政商圈，採光通風佳"
  },
  {
    id: "PH-002",
    type: "土地",
    dealType: "買賣",
    title: "七期精華角地",
    ping: 120,
    price: "面議",
    priceValue: null,
    address: "台中市西屯區",
    contact: "LINE 諮詢",
    images: ["placeholder-03.jpg"],
    note: "臨路寬廣，適合自建或投資"
  },
  {
    id: "PH-003",
    type: "店面",
    dealType: "租賃",
    title: "台灣大道一線店面",
    ping: 32,
    price: "月租 12萬",
    priceValue: 120000,
    address: "台中市西屯區",
    contact: "LINE 諮詢",
    images: ["placeholder-04.jpg"],
    note: "人流量大，適合各式商業經營"
  },

  {
    id: "PH-004",
    type: "商辦",
    dealType: "買賣",
    title: "七期精華商辦",
    ping: 68,
    price: "5,200萬",
    priceValue: 5200,
    address: "台中市西屯區",
    contact: "LINE 諮詢",
    images: ["placeholder-04.jpg"],
    note: "臨大道，交通便利，適合企業總部"
  }

];

/* ─────────────────────────────────────
   篩選區間設定（坪數、總價、月租）
   如需調整區間級距，改這裡即可，listings.html 會自動套用
───────────────────────────────────── */
const PING_RANGES = [
  { label: "10～50坪",       min: 10,    max: 50 },
  { label: "50～100坪",      min: 50,    max: 100 },
  { label: "100～200坪",     min: 100,   max: 200 },
  { label: "200～300坪",     min: 200,   max: 300 },
  { label: "300～400坪",     min: 300,   max: 400 },
  { label: "400～500坪",     min: 400,   max: 500 },
  { label: "500～600坪",     min: 500,   max: 600 },
  { label: "600～700坪",     min: 600,   max: 700 },
  { label: "700～800坪",     min: 700,   max: 800 },
  { label: "800～900坪",     min: 800,   max: 900 },
  { label: "900～1000坪",    min: 900,   max: 1000 },
  { label: "1000～5000坪",   min: 1000,  max: 5000 },
  { label: "5000～10000坪",  min: 5000,  max: 10000 },
  { label: "10000～20000坪", min: 10000, max: 20000 }
];

const SALE_PRICE_RANGES = [
  { label: "1,000萬以下",   min: 0,     max: 1000 },
  { label: "1,000～3,000萬",min: 1000,  max: 3000 },
  { label: "3,000～5,000萬",min: 3000,  max: 5000 },
  { label: "5,000～8,000萬",min: 5000,  max: 8000 },
  { label: "8,000萬～1億",  min: 8000,  max: 10000 },
  { label: "1億以上",       min: 10000, max: Infinity }
];

const RENT_PRICE_RANGES = [
  { label: "月租 5萬以下",  min: 0,      max: 50000 },
  { label: "月租 5～10萬",  min: 50000,  max: 100000 },
  { label: "月租 10～20萬", min: 100000, max: 200000 },
  { label: "月租 20萬以上", min: 200000, max: Infinity }
];
