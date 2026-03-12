let arr = [1, 2, 3, 4, 5, 6, 7];

const [one, two, , , five] = arr;
console.log(one, two, five);

// Object
let obj = {
  name: "sft",
  address: "Chengdu",
  age: 22,
  street: "101 ",
  location: {
    district: "Sichuan",
    union: "Test",
    address: {
      streetNum: "10A",
      house: 502,
    },
  },
};

let {
  name,
  address,
  age,
  street,
  location: { address: locationAddress },
} = obj;
console.log(street, address, name, age);
console.log(locationAddress);
