import { combineReducers, createStore } from "redux";
import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";

import basketReducer from "./redux/reducer";
import Basket from "./basket";
import { addProductToBasket } from "./redux/action";

const rootReducer = combineReducers({
  basket: basketReducer,
});

const store = createStore(rootReducer);

function getSampleProduct() {
  return {
    id: Math.floor(Math.random() * 10000000),
    name: "product 1",
    quantity: 1,
    price: 1.0,
  };
}

function AddProductComponent({ addProduct }) {
  return <button onClick={() => addProduct(getSampleProduct())}>Add product to basket</button>;
}

const AddProduct = connect(null, (dispatch) => ({
  addProduct: (product) => dispatch(addProductToBasket(product)),
}))(AddProductComponent);

ReactDOM.render(
  <Provider store={store}>
    <Basket />
    <div id="utils">
      <AddProduct />
    </div>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
