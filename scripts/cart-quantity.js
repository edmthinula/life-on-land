import { cart } from "./cart.js";

export function cartQuantityNav() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  console.log(cartQuantity);
  // cartQuantity += `<span>${cart.length}</span>`;

  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}
