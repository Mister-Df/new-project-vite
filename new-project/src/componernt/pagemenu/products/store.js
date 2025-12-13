import { configureStore } from "@reduxjs/toolkit";
import product from "./product";
import cart from "./cart";

export const store = configureStore({
    reducer:{
        product,
        cart
    }
})