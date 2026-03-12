// Rest
function myFunc(a, b, ...rest) {
  console.log(a, b, rest);
  console.log(arguments);
}

myFunc(1, 2, 3, 4, 5, 6, 7);

//Spread
let arr = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let arr3 = [...arr, ...arr2];
console.log(arr3);

const arr4 = arr;
arr4.push(9);

const arr5 = [...arr];
arr5.push(6);

console.log(arr);
console.log(arr4);

console.log(arr);
console.log(arr5);

let person = {
  name: "Hablu",
  age: 22,
};

let computer = {
  monitor: "LG",
  SSD: "256GB",
  graphicsCard: "8GB",
};

let newObj = {
  ...person,
  ...computer,
};

console.log(newObj);
