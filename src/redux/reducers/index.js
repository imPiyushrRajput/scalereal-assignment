import {combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productDetailsReducer, productListReducer } from "./prouductReducer"
const rootReducer = combineReducers({
    cart:cartReducer,
    product:productListReducer,
    productDetails: productDetailsReducer,
});

export default rootReducer;