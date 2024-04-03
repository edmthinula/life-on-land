import { cart, addToCart } from "./cart.js";
import { products } from "./products.js";
import { formatCurrency } from "./money.js";

let productsHTML = "";

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
        <div class="product-image-container">
            <img class="product-image" src="${product.image}" />
        </div>

        <div class="product-name limit-text-to-2-lines">
            ${product.name}
        </div>

        <div class="product-price">
            $${formatCurrency(product.priceCents)}
        </div>

        <div class="product-spacer"></div>

        <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${
          product.id
        }">
            Add to Cart
        </button>
    </div>
  `;
});

document.querySelector(".js-products-grid").innerHTML = productsHTML;

// calculating total quantity
function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;

    addToCart(productId);
    updateCartQuantity();
  });
});
