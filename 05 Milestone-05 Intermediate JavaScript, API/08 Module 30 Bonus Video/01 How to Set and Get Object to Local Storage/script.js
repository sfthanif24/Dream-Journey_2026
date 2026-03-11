const addNumberToLS = () => {
  const number = Math.round(Math.random() * 10);
  console.log(number);
  localStorage.setItem("number", number);
};

const setObjectToLS = () => {
  const customer = {
    name: "sft",
    product: 3,
    price: 45,
  };
  const customerJSON = JSON.stringify(customer);
  localStorage.setItem("customer", customerJSON);
};

const readObjectFromLS = () => {
  const customerJSON = localStorage.getItem("customer");
  const customer = JSON.parse(customerJSON);
  console.log(customerJSON);
  console.log(typeof customerJSON);
  console.log(customer);
  console.log(customer.name);
};

const getNumberFromLS = () => {
  const number = localStorage.getItem("number");
  console.log("Saved from local storage", number);
};
