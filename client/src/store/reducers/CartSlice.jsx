import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    numberOfItem:0,

}

const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
           state.numberOfItem = action.payload.quntity
        }

    }
})

export const {addToCart} = CartSlice.actions
export default CartSlice.reducer