let a = 1;
while (a < 10) {
  console.log(123);
  a++;
}

for (let i = 0; i < 10; i++) {
  if (i % 2 == 1) {
    break;
  }
  console.log(i);
}

function declaration函數運算式
(宣告函數)，後面定義會蓋掉前面
function hello() {
  console.log("hi");
  console.log("gogo");
  console.log("hehe");
}
hello();

function expression函數陳述式
anonymous  匿名函數 要照順序宣告
const hello = function () {
  console.log(123);
};
hello();

箭頭函式arrow fn
const hello = () => {
  console.log(123);
};
hello();//小括號一定要加！！！

若多給參數或少給，都不會出錯，會自動省
a,b,c是參數，參數是不會錯的因為是自己定義
function sayhello(a, b = 1, c = 3) {
  console.log(a);
  console.log(b);
  console.log(c);
}
123是引數
sayhello(123, 4, 4);
sayhello(123);

function add(a, b) {
  let result = a + b;
  return result;
}
console.log(add(1, 2));

function add(a, b, c) {
  return a + b + c;
}
console.log(add(3, 4, 5));

function add(a, b) {
  if (a >= 0 && b >= 0) {
    return a + b;
  } else {
    return "err";
  }
}

function add(a, b) {
  // early return有問題的放前面，重點放後面
  if (a < 0 || b < 0) {
    return "err";
  }
  return a + b;
}

console.log(add(10, 20));
console.log(add(-10, 20));

function bmi(height, weight) {
  let h = height / 100;
  let w = weight;
  return (w / (h * h)).toFixed(2);
}

console.log(bmi(158, 47));
console.log(bmi(180, 77));

function leap_year(n) {
  if ((n % 4 == 0 && n % 100 != 0) || n % 400 == 0) {
    return "閏年";
  } else {
    return "平年";
  }
}

console.log(leap_year(2000));
console.log(leap_year(1998));

函數：定義輸入值跟輸出值的關係，且取一個名字
陣列裡面還可以放陣列;

let list = ["a", "b", "c", "d"];
console.log(list[0]); //找第一個元素
console.log(list[list.length - 1]);//找最後一個元素

let list = ["a", "b", "c", "d"];
list.push("e"); //從後面推東西進陣列
list.unshift("z"); //從前面推東西進陣列
list.pop(); //從陣列後面少一個
list.shift(); //從陣列前面少一個
console.log(list);

let list = ["a", "b", "c", "d"];
let new_list = list.splice(1, 1); //從第二個元素開始砍掉一個元素
let new_list = list.splice(1, 0, "z");
console.log(new_list); //砍掉的陣列
console.log(list); //被破壞剩餘的陣列

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

function headAndTail(list) {
  let first = list[0];
  let last = list[list.length - 1];
  return [first, last];
}
let a = [1, 2, 3, 4, 5];
let b = ["a", "b", "c", "f", "k"];
console.log(headAndTail(a));
// [1, 5]
console.log(headAndTail(b));
// ["a", "k"]

.indexOf//印出值的索引值，若無會印出-1
.includes//檢查元素是否存在，存在會印true
.find//找陣列裡的東西，找到一個就會停

const list = ["a", "b", "c", "d"];
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

let counter = 0;
const list = ["a", "b", "c", "d"];
list.forEach(function (x) {
  console.log(counter + 1, x);
  counter++;
});
//上下相等
const logger = function (x) {
  console.log(x);
};
list.forEach(logger);

const list = ["a", "b", "c", "d"];
const result = list.find(function (x) {
  return x == "c"; //找陣列裡的c
  return x.length >= 3; //找陣列裡字數>=3
});
//callback 回呼function
console.log(result);

const list = [1, 2, 3, 4, 5];
let result = [];
for (let a = 0; a < list.length; a++) {
  result[a] = list[a] * 2;
}
console.log(result);

const list = [1, 2, 3, 4, 5];
const result = list.map(function (x) {
  return x * 2;
});
console.log(result); //會把回傳結果用成一個新陣列

const list = [1, 2, 3, 4, 5];
let result = [];
list.forEach(function (x) {
  result.push(x * 2);
});
console.log(result);

arr = [1, 2, 3, 4, 5];
let a = [];
arr.forEach(function (ele) {
  a.push(ele * 2);
});

console.log(a);


.filter可以過濾出每一個符合條件的