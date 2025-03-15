// 第一階段：新增課程購買記錄（優惠定價）
const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];
const purchaseRecords = [];

function addPurchaseRecord(name, courses) {
  if (!members.includes(name)) {
    console.log("輸入錯誤：請輸入有效的會員名稱和課程數量。");
    return false;
  }
  if (!Number.isInteger(courses) || courses <= 0) {
    console.log("輸入錯誤：請輸入有效的會員名稱和課程數量。");
    return false;
  }
  
  let unitPrice;
  if (courses >= 1 && courses <= 10) {
    unitPrice = 1500;
  } else if (courses >= 11 && courses <= 20) {
    unitPrice = 1300;
  } else if (courses >= 21) {
    unitPrice = 1100;
  }
  
  const totalAmount = courses * unitPrice;
  
  const record = {
    name: name,
    courses: courses,
    unitPrice: unitPrice,
    totalAmount: totalAmount
  };
  
  purchaseRecords.push(record);
  
  console.log(`新增購買記錄成功！會員 ${name} 購買 ${courses} 堂課，總金額為 ${totalAmount} 元。`);
  return true;
}

addPurchaseRecord("Alice", 4);          // 新增購買記錄成功！會員 Alice 購買 4 堂課，總金額為 6000 元。
addPurchaseRecord("Bob", 12);           // 新增購買記錄成功！會員 Bob 購買 12 堂課，總金額為 15600 元。
addPurchaseRecord("Charlie", 25);       // 新增購買記錄成功！會員 Charlie 購買 25 堂課，總金額為 27500 元。
addPurchaseRecord("Hannah", 50);        // 新增購買記錄成功！會員 Hannah 購買 50 堂課，總金額為 55000 元。
addPurchaseRecord("名稱", "課程數量");  // 輸入錯誤：請輸入有效的會員名稱和課程數量。

// 第二階段：計算目前的總營業額
function calculateTotalPrice() {
  const totalPrice = purchaseRecords.reduce((total, record) => {
    return total + record.totalAmount;
  }, 0);
  
  console.log(`目前總營業額為 ${totalPrice} 元`);
  
  return totalPrice;
}

calculateTotalPrice();

// 第三階段：篩選出還沒有購課的會員
function filterNoPurchaseMembers() {
  const purchasedMembers = [...new Set(purchaseRecords.map(record => record.name))];       // 已購買課程會員名單(去重複)
  const noPurchaseMembers = members.filter(member => !purchasedMembers.includes(member));  // 篩選出未購買課程的會員
  
  console.log("未購買課程的會員有：" + noPurchaseMembers.join("、"));
  
  return noPurchaseMembers;
}

filterNoPurchaseMembers();