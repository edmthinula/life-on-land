import { cart, addToCart } from "./cart.js";
// import { formatCurrency } from "./utils/money.js";
import { renderPaymentSummary } from "./paymentSummary.js";

console.log(cart.length);
// document.querySelector(".js-cart-quantity").innerHTML = cart.length;
renderPaymentSummary();
