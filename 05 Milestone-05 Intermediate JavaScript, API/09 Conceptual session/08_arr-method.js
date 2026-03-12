const devices = [
  {
    id: 1,
    type: "phone",
    brand: "Apple",
    model: "iPhone 14",
    price: 999,
    storage: 128,
    color: "Midnight",
    inStock: true,
  },
  {
    id: 2,
    type: "phone",
    brand: "Samsung",
    model: "Galaxy S23",
    price: 899,
    storage: 256,
    color: "Phantom Black",
    inStock: true,
  },
  {
    id: 3,
    type: "laptop",
    brand: "Apple",
    model: "MacBook Pro",
    price: 1999,
    storage: 512,
    color: "Space Gray",
    inStock: true,
  },
  {
    id: 4,
    type: "laptop",
    brand: "Dell",
    model: "XPS 15",
    price: 1499,
    storage: 512,
    color: "Platinum Silver",
    inStock: true,
  },
];

//map
const newProduct = devices.map((product) =>
  product.price >= 1000
    ? { ...product, isExpensive: true }
    : { ...product, isExpensive: false },
);

console.log(newProduct);

//Filter
const expensiveProducts = devices.filter((product) => product.price >= 1000);
console.log(expensiveProducts);

//Find
const cheapProducts = devices.find((product) => product.price >= 1000);
console.log(cheapProducts);

const expensiveLaptop = devices
  .filter((product) => product.price >= 1000 && product.type === "laptop")
  .map((product) => ({
    id: product.id,
    name: product.brand,
    brand: product.brand,
  }));

console.log(expensiveLaptop);
