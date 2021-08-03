import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productListReducers,
  productDetailReducers,
} from "../reducers/productReducer";

import { cartReducers } from "../reducers/cartReducer";
const cartItemFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

// console.log(cartItemFromStorage);

export default () => {
  const middleware = [thunk];
  const initialState = {
    // cart: { cartItems: "aemsSolanki" },
    cart: { cartItems: cartItemFromStorage },
  };
  const store = createStore(
    combineReducers({
      productsList: productListReducers,
      productDetail: productDetailReducers,
      cart: cartReducers,
    }),
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return store;
};
