export const cart =[];
export const addToCart = (productId)=>{
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
}


export const updateCartQuantity=()=>{
  let cartQuantity=0;
    cart.forEach((cartItem)=>{
      cartQuantity+=cartItem.quantity;
    });
    document.querySelector(".js-cart-quantity")
    .innerHTML=cartQuantity;

}

export const showAddedtoCart = (productId)=>{
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
}