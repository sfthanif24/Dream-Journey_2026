const name = "sft";

const myFunc = (value) => {
  value = "sht";
  console.log("Inside func", value);
};

myFunc(name);
console.log(name);

const obj = {
  color: "red",
  model: "1j",
};

const myFunc2 = (param) => {
  ((param.color = "black"), console.log("Inside func", param));
};

myFunc2(obj);
console.log(obj);
