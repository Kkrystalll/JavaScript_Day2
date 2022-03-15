// const list = [1, 2, 3, 4, 5];

// const newlist = list.filter(function (x) {
//   return x > 3;
// });

// console.log(x);

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newlist = list.filter(function (n) {
//   return n % 2 == 1;
// });

// console.log(newlist);

// const list = [1, 2, 3, 4, 5];

// let total = 0;
// list.forEach(function (i) {
//   total += i;
// });
// console.log(total);

// const list = [1, 2, 3, 4, 5];
// let a = list.reduce(function (acc, cv) {
//   return acc + cv;
// });

// console.log(a);
//對陣列做歸納
//fc每回合的return，會變成下一回合的acc
//沒給預設值會拿第一個元素當預設值，少跑一圈
//cv=每一次進去的值;acc=每一輪的結果是下一輪的初始值

// const list = [19, 23, 3, 2, 24];
// let a = list.reduce(function (acc, cv) {
//   if (cv > acc) {
//     return cv;
//   } else {
//     return acc;
//   }
// });
// console.log(a);
// //找陣列中的最大值

// const list = [19, 23, 3, 2, 24];
// let a = list.reduce(function (acc, cv) {
//   if (cv > acc) {
//     return cv;
//   } else {
//     return acc;
//   }
// }, 100);
// console.log(a);
//找陣列中的最大值，因為預設值100，沒人比他大

// fc是把一段程式碼包裝成一個名字，讓人知道在幹嘛;

// 物件Object=電腦裡面的一塊記憶體
// 物件＝屬性＋行為
// 物件{}+key.valus
// const cat = {
//   age: 18,
//   name: "kk",
//   attack: function () {
//     console.log("go!");
//   },
// };

// cat.attack();

// console.log(cat);
// cat.name = "cc";
// console.log(cat.name);
// console.log(cat.age);
// console.log(cat["age"]);

// = ruby 裡的hash

// 可以在外面加屬性;
// const cat = {};
// cat.dosomething = 1;
// console.log(cat);

// 也可以移除屬性;
// const cat = {
//   age: 18,
//   name: "kk",
// };
// console.log(cat);
// delete cat.age;
// console.log(cat);
