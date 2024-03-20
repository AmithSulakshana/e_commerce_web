import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    numberOfItem:0,
    totalPrice:0

}

const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
           state.numberOfItem = action.payload.quntity
        }, 
        addTotalPrice:(state,action)=>{
            state.totalPrice = action.payload.totalPrice
        }

    }
})

export const {addToCart,addTotalPrice} = CartSlice.actions
export default CartSlice.reducer