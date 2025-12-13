import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    item: undefined
}

export const product = createSlice({
    name: 'produits',
    initialState,
    reducers:{
        addProduct: (state, action) =>{
            state.item = action.payload
        }
    }
})

export function getProduct(action){
    return function(dispatch, getState){
        fetch('/data/inventory.json')
        .then(response => response.json())
        .then(data => {
            dispatch(addProduct(data.products))
            
        })
    }
}


export const { addProduct } = product.actions
export default product.reducer