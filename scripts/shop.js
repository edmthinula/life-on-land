import { cart, addToCart } from "./cart.js";
import { products } from "./products.js";
import { formatCurrency } from "./money.js";

// function propertySelector(product) {
//   let selectorHTML = "";

//   products.forEach((product) => {
//     if (product.type === "color") {
//       const productType = "color";
//     } else if (product.type === "fragrance") {
//       const productType = "fragrance";
//     } else {
//       const productType = "";
//     }

//     selectorHTML += `
//     <label for="product-${product.type}">${product.type}:</label>
//     <select id="property-${product.type}" class="property-select" data-product-property="${product.type}">
//         <option value="${product.productType[0]}">${product.productType[0]}</option>
//         <option value="${product.productType[1]}">${productType[1]}</option>
//         <option value="${product.productType[2]}">${productType[2]}</option>
//     </select>
//     `;
//   });

//   return [selectorHTML, productType];
// }

function propertySelector(product) {
  let selectorHTML = "";
  let productType = "";

  if (product.type) {
    if (product.type === "color") {
      productType = "color";
    } else if (product.type === "fragrance") {
      productType = "fragrance";
    }

    selectorHTML += `
    <label for="product-${product.type}">${product.type}:</label>
    <select id="property-${
      product.type
    }" class="property-select" data-product-property="${product.type}">
        ${product[productType]
          .map((option) => `<option value="${option}">${option}</option>`)
          .join("")}
    </select>
    `;
  }

  return [selectorHTML, productType];
}

let productsHTML = "";

products.forEach((product) => {
  const [selectorHTML, productType] = propertySelector(product);

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

        <div class="product-spacer">
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
          <div class="product-property">
              ${selectorHTML}
          </div>
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
  // const propertySelect = document.querySelector(
  //   `.property-select[data-product-id="${productId}"]`
  // );
  // const selectedProperty = propertySelect.value;

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

// document.querySelectorAll(".js-add-to-cart").forEach((button) => {
//   button.addEventListener("click", () => {
//     const productId = button.dataset.productId;

//     addToCart(productId);
//     updateCartQuantity();
//   });
// });

// document.querySelectorAll(".js-add-to-cart").forEach((button) => {
//   button.addEventListener("click", () => {
//     const productId = button.dataset.productId;
//     const quantitySelect = document.querySelector(
//       ".quantity-select[data-product-id=" + productId + "]"
//     );
//     const quantity = Number(quantitySelect.value);
//     const propertySelect = document.querySelector(
//       ".property-select[data-product-id=" + productId + "]"
//     );
//     const selectedProperty = propertySelect.value;

//     for (let i = 0; i < quantity; i++) {
//       addToCart(productId, selectedProperty);
//       console.log(cart);
//     }

//     updateCartQuantity();
//   });
// });

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    console.log("Product ID: ", productId); // Debugging line

    const quantitySelect = document.querySelector(
      ".quantity-select[data-product-id=" + productId + "]"
    );
    console.log("Quantity Select: ", quantitySelect); // Debugging line

    if (quantitySelect) {
      const quantity = Number(quantitySelect.value);

      const propertySelect = document.querySelector(
        ".property-select[data-product-id=" + productId + "]"
      );
      console.log("Property Select: ", propertySelect); // Debugging line

      if (propertySelect) {
        const selectedProperty = propertySelect.value;

        for (let i = 0; i < quantity; i++) {
          addToCart(productId, selectedProperty);
          console.log(cart);
        }

        updateCartQuantity();
      }
    }
  });
});

updateCartQuantity();
