import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    itemCart: [

    ]
}

export const cart = createSlice({
    name: 'card',
    initialState,
    reducers:{
        addCart: (state, action) =>{
            state.itemCart.push(action.payload)
        },
        deleteCart: (state, action) =>{
            const delet = state.itemCart.findIndex(elt => elt.id === action.payload)
            state.itemCart.splice(delet, 1)
        },
        priceCart: (state, action) =>{
            state.itemCart.find(state => state.id === action.payload.id).
            quantity = Number(action.payload.value)
            
        }
    }
})

export function getCartItem(action){
    return function(dispatch, getState){
        const cartItem = getState()
        const isAlreadyCart = cartItem.cart.itemCart.find(state => state.id === action)
    
        if (!isAlreadyCart) {
            const addProduct = cartItem.product.item.find(state => state.id === action)

            const newCart = {
                ...addProduct,
                quantity: 1
            }
            dispatch(addCart(newCart))
            console.log(newCart);
            
        }
    }
}

export const { addCart, deleteCart, priceCart } = cart.actions
export default cart.reducer