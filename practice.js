// while迴圈印出1~20
// let i = 0;
// while (i <= 20) {
//   console.log(i);
//   i++;
// }
// function add(a, b) {
//   return a + b;
// }
// console.log(add(1, 2));

// function add(a, b) {
//   if (a >= 0 && b >= 0) {
//     return a + b;
//   } else {
//     return "err";
//   }
// }
// console.log(add(10, 20));
// console.log(add(-10, 20)); //正數相加，複數顯示err

// let list = ["a", "b", "c", "d"];
// list.push("x"); // 從後面推東西進陣列
// list.unshift("z"); // 從前面推東西進陣列
// list.pop(); // 從陣列後面少一個
// list.shift(); // 從陣列前面少一個
// console.log(list);

function headAndTail(list) {
  list.splice(1, list.length - 2);
  return list;
}
let a = [1, 2, 3, 4, 5];
let b = ["a", "b", "c", "f", "k"];
console.log(headAndTail(a));
// [1, 5]
console.log(headAndTail(b));
// ["a", "k"]

// const list = ["a", "b", "c", "d"];
// for依序印出陣列;
