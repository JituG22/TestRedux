import React from "react";
import { connect} from "react-redux";
import {removeProductFromBasket } from "./redux/action";

// You can use console.log for debugging purposes.

// This component is already implemented and working as expected.
// `Please focus on Redux related parts.

export function Basket({products = [], onRemove, totalPrice = 0.0 }) {
  return (
    <div>
      <ul className="products">
        {products.map((product) => (
          <li key={product.id} id={`product-${product.id}`}>
            <span>Name: {product.name}</span>
            <span>Quantity: {product.quantity}</span>
            <span>Quantity: {product.price}</span>
            <button
              id={`remove-${product.id}`}
              onClick={() => {onRemove(product.id)}}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div>
        Total price: <span id="total-price">{totalPrice}</span>
      </div>
    </div>
  );
}

function totalPriceFun(arr){
  let sum = 0;
  for(let i=0; i < arr.length; i++){
    let reduce =  arr[i].price * arr[i].quantity;
    sum = (sum+reduce).toFixed(1)
  }
  return sum
}
function mapStateToProps(state) {
  return {
    products:[...state.basket.basket.products],
    totalPrice: totalPriceFun(state.basket.basket.products)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRemove:(productId)=> dispatch(removeProductFromBasket(productId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);