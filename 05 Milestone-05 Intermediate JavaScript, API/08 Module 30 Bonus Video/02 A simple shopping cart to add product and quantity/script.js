const handleProducts = () => {
  const productEl = document.getElementById("product");
  const quantityEl = document.getElementById("quantity");
  const product = productEl.value;
  const quantity = parseInt(quantityEl.value);
  console.log("Product add", product, quantity);
  displayProduct(product, quantity);
  addProductCart(product, quantity);
  productEl.value = "";
  quantityEl.value = "";
};

const getCart = () => {
  let cart = {};

  const cartJSON = localStorage.getItem("cart");
  // console.log(cartJSON);
  if (cartJSON) {
    cart = JSON.parse(cartJSON);
  }

  return cart;
};

const addProductCart = (product, quantity) => {
  const cart = getCart();

  if (cart[product]) {
    cart[product] = cart[product] + quantity;
  } else {
    cart[product] = quantity;
  }

  console.log(cart);
  const cartJSON = JSON.stringify(cart);
  localStorage.setItem("cart", cartJSON);
};

const displayProduct = (product, quantity) => {
  const li = document.createElement("li");
  li.innerHTML = `${product} : ${quantity}`;

  const ul = document.getElementById("products-container");
  ul.appendChild(li);
};

// display products from stored local storage
const displayStoredProducts = () => {
  const cart = getCart();
  for (const product in cart) {
    const quantity = cart[product];
    console.log(product, quantity);
    displayProduct(product, quantity);
  }
};

displayStoredProducts();
/*
 To save Object/array in the local storage 
 1. Convert the object to JSON string by using JSON.stringify
 2. localStorage.setItem()
*/

/**
 *  to get object/array from the local storage
 * 1. get the item from the local storage and it will be in JSON string
 * 2. convert the JSON string to js object by using JSON.parse
 */
