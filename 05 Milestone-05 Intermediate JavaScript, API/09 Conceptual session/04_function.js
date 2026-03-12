const myFunc = function (a, b) {
  console.log(a, b);
};

myFunc(1, 2);

// Function Expression
const myFunc2 = function (a, b) {
  console.log(a, b);
};

myFunc2(2, 3);

// Arrow function (ES6)
const myFunc3 = (a = 1, b = 1) => {
  console.log(a, b);
  return a * b;
};

const multiply = myFunc3(3);
console.log(multiply);

const myFunc4 = (name = "sft") => console.log(`Hello ${name} good night`);
myFunc4();
