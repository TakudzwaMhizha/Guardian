
import { cart } from "../data/cart.js";
const productsGrid = document.querySelector(".products-grid");
const cartQuantityEl = document.querySelector(".js-cart-quantity");
const addedMesageTimeout = [];

let productsHtml = "";


products.forEach((product)=>{
  const html = ` <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src=${product.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="select-quantity-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"  data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>`;
  productsHtml+=html;
})

productsGrid.innerHTML=productsHtml;


document.querySelectorAll(".js-add-to-cart")
.forEach((button)=>{
  
  button.addEventListener("click",()=>{
    const {productId} = button.dataset;
    let matchingItem;
    const selectQuant = document.querySelector(`.select-quantity-${productId}`);
    cart.forEach((item)=>{
      if(item.productId===productId){
        matchingItem=item;
      }
    })
    if(matchingItem){
      matchingItem.quantity+=Number(selectQuant.value);
    }
    else{

      cart.push({
      productId,
      quantity: Number(selectQuant.value)
    });

    }
    //updating cart quantity
    let cartQuantity=0;
    cart.forEach((item)=>{
      cartQuantity+=item.quantity;
    });
    cartQuantityEl.innerHTML=cartQuantity;

    //Added to cart popup
    const addedPopup =document.querySelector(`.added-to-cart-${productId}`);
    const prevTimeout = addedMesageTimeout[productId];
    if(prevTimeout){
      clearTimeout(prevTimeout);
    }
    addedPopup.style.opacity="100%";

    const newTimeoutId = setTimeout(()=>{
      addedPopup.style.opacity="0";
      delete addedMesageTimeout[productId];
    },2000);
    addedMesageTimeout[productId] = newTimeoutId;
    console.log(addedMesageTimeout)

  });
});




