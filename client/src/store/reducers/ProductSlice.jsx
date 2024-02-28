import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    product:{},
    quantity:1

}

const ProductSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        addProduct:(state,action)=>{

            state.product=action.payload.product

        },
        addQuantity:(state,action)=>{
           state.quantity=action.payload.quantity
        }
    }
})

export const {addProduct,addQuantity} = ProductSlice.actions
export default ProductSlice.reducer