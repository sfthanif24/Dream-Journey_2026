//Falsy value => false, 0, "", undefined, NaN

console.log(5 * "Hello");
console.log(5 + "Hello");
console.log(5 - "Hello");

if ("") {
  console.log("If block trigger");
} else {
  console.log("else block trigger");
}

let arr = [1, 2, 3, 4, 5];

let isThreeExist = arr.find((el) => el === 3);
console.log(isThreeExist);

let isThreeHundredExist = arr.find((el) => el === 300);
console.log(isThreeHundredExist);

if (isThreeHundredExist) {
  console.log("Found");
} else {
  console.log("Sorry");
}
