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

        <div class="product-quantity">
            <label for="quantity-${product.id}">Quantity:</label>
            <select id="quantity-${
              product.id
            }" class="quantity-select" data-product-id="${product.id}">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${
          product.id
        }">
            Add to Cart
        </button>
    </div>
  `;
});

document.querySelector(".js-products-grid").innerHTML = productsHTML;

export function quantityUpdateCart() {
  let productId = "";
  let quantity = 0;

  document.querySelectorAll(".quantity-select").forEach((select) => {
    select.addEventListener("change", (event) => {
      productId = event.target.dataset.productId;
      quantity = event.target.value;
      // updateCartQuantity(productId, quantity);
    });
  });

  document.querySelectorAll(".js-add-to-cart").forEach((cartAdd) => {
    cartAdd.addEventListener("click", () => {
      console.log(quantity);
      for (let i = 1; i < quantity; i++) {
        addToCart(productId);
      }
      updateCartQuantity();
    });
  });
}

quantityUpdateCart();

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

updateCartQuantity();
