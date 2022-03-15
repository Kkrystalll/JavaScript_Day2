// let list = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

// function moveZerosToEnd(arr) {
//   const a = arr.filter(function (aa) {
//     return aa !== 0;
//   });
//   console.log(a);
//   const b = arr.filter(function (bb) {
//     return bb === 0;
//   });
//   console.log(b);
//   const c = a.concat(b);
//   console.log(c);
// }
// moveZerosToEnd(list);

// # 程式語言：JavaScript
// # 題目：完成函數的內容，把陣列裡的 0 都移到最後面
// # 範例：

// let list = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

// function moveZerosToEnd(arr) {
//   const newList = arr.filter(function (n) {
//     return n !== 0;
//   });
//   const olist = arr.filter(function (o) {
//     return o === 0;
//   });
//   const answer = newList.concat(olist);
//   console.log(answer);
// }

// let result = moveZerosToEnd(list);
// console.log(result); // [false,1,1,2,1,3,"a",0,0]
// // moveZerosToEnd(list);

// # 程式語言：JavaScript

// # 題目：寫一小段程式，印出陣列裡缺的字

// # 範例：
// arr = ["a", "b", "c", "d", "f", "g"]; //印出 e
// // ["O","Q","R","S"] 印出 P

// for (let i = 0; i < arr.length; i++) {
//   // console.log(arr[i + 1].charCodeAt(0) - arr[i].charCodeAt());
//   if (arr[i + 1].charCodeAt() - arr[i].charCodeAt() >= 2) {
//     // console.log((arr[i].charCodeAt() + 1).String.fromCharCode());
//     console.log(String.fromCharCode(arr[i].charCodeAt() + 1));
//   }
// }

// # 程式語言：JavaScript

// # 題目：寫一小段程式，印出陣列裡缺的字

// # 範例：

// arr = ["a", "b", "c", "d", "f", "g"]; //印出 e
// array = ["O", "Q", "R", "S"]; //印出 P

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i + 1].charCodeAt() - arr[i].charCodeAt() >= 2) {
//     console.log(String.fromCharCode(arr[i].charCodeAt() + 1));
//   }
// }

// # 程式語言：JavaScript
// # 題目：完成函數的內容，把陣列裡的 0 都移到最後面
// # 範例：

// let list = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

// function moveZerosToEnd(arr) {
//   const newList = arr.filter(function (n) {
//     return n !== 0;
//   });
//   const olist = arr.filter(function (o) {
//     return o === 0;
//   });
//   // const answer = newList.concat(olist);
//   // {
//   //   return answer;
//   // }
//   return newList.concat(olist);
// }

// let result = moveZerosToEnd(list);
// console.log(result); // [false,1,1,2,1,3,"a",0,0]

// let list = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

// function moveZerosToEnd(arr) {
//   const newList = arr.filter(function (n) {
//     return n !== 0;
//   });
//   // 使用filter方法找出陣列中非0的元素回傳後，組成一個新的newList陣列
//   const olist = arr.filter(function (o) {
//     return o === 0;
//   });
//   // 使用filter方法找出陣列中是0的元素回傳後，組成一個新的olist陣列
//   return newList.concat(olist);
//   // 將newList與olist陣列用concat這個方法拼接成一個新的陣列
// }

// let result = moveZerosToEnd(list);
// console.log(result); // [false,1,1,2,1,3,"a",0,0]

// # 程式語言：JavaScript
// # 題目：寫一小段程式，印出陣列裡缺的字
// # 範例：

// const list = ["a", "b", "c", "d", "f", "g"]; //印出 e
// const secondlist = ["O", "Q", "R", "S"]; //印出 P

// for (let i = 0; i < list.length; i++) {
//   if (list[i + 1].charCodeAt() - list[i].charCodeAt() >= 2) {
//     console.log(String.fromCharCode(list[i].charCodeAt() + 1));
//   }
// }

// arr = ["a", "b", "c", "d", "f", "g"]; //印出 e
// array = ["O", "Q", "R", "S"]; //印出 P

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i + 1].charCodeAt() - arr[i].charCodeAt() >= 2) {
//     console.log(String.fromCharCode(arr[i].charCodeAt() + 1));
//   }
// }

// # 程式語言：JavaScript
// # 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

function humanReadableTimer(seconds) {
  const second = String(seconds % 60).padStart(2, "0");
  // 秒數等於參數seconds除60的餘數
  const minute = String(Math.floor((seconds / 60) % 60)).padStart(2, "0");
  // 分鐘等於參數除60的整數，但因為可能進位變小時，所以等於參數除60再除60的餘數
  const hour = String(Math.floor(seconds / 60 / 60)).padStart(2, "0");
  // 小時等於參數除60再除60的整數

  //使用padStart將個位數前方自動補零，呈現出兩位數字，但會顯示錯誤訊息not a function，是因為padStart前面是接字串，但原本我們的分秒都是數字，所以使用String方法將數字轉成字串
  return `${hour}:${minute}:${second}`;
  // 使用return回傳小時+字串":"+分鐘+字串":"+秒數
}

console.log(humanReadableTimer(0)); // 印出 00:00:00
console.log(humanReadableTimer(59)); // 印出 00:00:59
console.log(humanReadableTimer(60)); // 印出 00:01:00
console.log(humanReadableTimer(90)); // 印出 00:01:30
console.log(humanReadableTimer(3599)); // 印出 00:59:59
console.log(humanReadableTimer(3600)); // 印出 01:00:00
console.log(humanReadableTimer(45296)); // 印出 12:34:56
console.log(humanReadableTimer(86399)); // 印出 23:59:59
console.log(humanReadableTimer(86400)); // 印出 24:00:00
console.log(humanReadableTimer(359999)); // 印出 99:59:59
