import { cart } from "./cart.js";
import { renderOrderSummary } from "./orderSummary.js";
import { renderPaymentSummary } from "./paymentSummary.js";

renderOrderSummary();
renderPaymentSummary();

const cartButton = document.querySelector(".place-order-button");

if (cart.length === 0) {
  cartButton.disabled = true;
  cartButton.textContent = "Cart is Empty"; // Optional message
} else {
  cartButton.disabled = false;
  cartButton.textContent = "Go to Checkout";
  document.querySelector(".js-delete-link").addEventListener("click", () => {
    window.location.reload(true);
  });
}

// document.querySelector(".js-delete-link").addEventListener("click", () => {
//   window.location.reload(true);
// });
