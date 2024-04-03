import { cart } from "./cart.js";

export function cartQuantityNav() {
  let cartQuantity = "";

  console.log(cart.length);
  cartQuantity += `<span>${cart.length}</span>`;

  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}
