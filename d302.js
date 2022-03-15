DOM=Document Object Model 文件物件模式
瀏覽器將HTML的標籤轉為 DOM物件，JS抓到HTML的DOM物件，去操作
const c = document.getElementById("cc");
const c = document.querySelector("#cc");//查詢選取器
const c = document.querySelector("#list :nth-child(2)"); //抓ul第二個小孩的東西
console.log(c);

const c = document.querySelector("#list")

const li = document.querySelector("#list :nth-child(2)");
li.textContent = "x";//可以換元素

const items1 = document.getElementsByClassName("item");

console.log(items1); //array-like看起來像陣列但不是

const items2 = document.querySelectorAll(".item");
console.log(items2); //array-like
items2.forEach((x) => {
  console.log(x);
});

const items = document.querySelectorAll(".item");

// items.forEach((item) => {
//   item.textContent = item.textContent.repeat(5);
// });

items.forEach((item) => {
  const firstContent = item.textContent;
  item.textContent = firstContent.repeat(5);
});

const t = document.querySelector("#cc");

t.textContent = "<h1>ddd</h1>";
t.innerHTML = "<h1>ddd</h1>";

t.style.color = "red";
t.style["background-color"] = "yellow";
t.style["font-size"] = "100px";

t.classList.add("hi");
t.classList.remove("c");

const items = document.querySelectorAll(".item");

items.forEach(function (item, idx) {
  item.classList.add("hi");
});

items.forEach(function (item, idx) {
  if (idx % 2 === 0) {
    item.classList.add("hi");
  }
});

// document.addEventListener("click", function () {
//   console.log("點了");
// });

// const c = document.querySelector("#cc");

// c.addEventListener("click", function () {
//   console.log("點點");
// });

// const c = document.querySelector("#cc");

// c.addEventListener("click", function () {
//   console.log("點擊");
// });

// //若script無法放在body前面，需要放在head，可以使用下面這行加接聽器，來讀取HTML下面內容，在執行JS
// // document.addEventListener("DOMContentLoaded", function () {
// const c = document.querySelector("#cc");
// console.log(c);
// c.addEventListener("click", function () {
//   console.log("點擊");
// });
// // });
// //也可以在<script src="d302.js" defer></script>加入defer，就可以解決以上問題

// 高階函數（式）
// Higher-Order Function
// 1.接別的函數當參數/引數
// 2.可以回傳一個函數

// const c = document.querySelector("#cc");
// c.addEventListener("click", function () {
//   console.log("點擊");
// });
//上下相等
const c = document.querySelector("#cc");
const hi = function () {
  console.log("點擊");
};
c.addEventListener("click", hi); //接聽器是一個方法可以有很多個
上下相等;
function hi() {
  console.log("點擊");
}
c.addEventListener("click", hi);

function是一個值，可以包很多層

c.onclick = function () {
  console.log(123);
};
c.onclick = function () {
  console.log(456);
};
//onclick同時有兩個後面會蓋前面，是侵入式的寫法，改屬性

const ln = document.querySelector("#link");

ln.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("hi");
});

document.addEventListener("contextmenu", function (a) {
  a.preventDefault();
  console.log("123");
});//鎖右鍵
