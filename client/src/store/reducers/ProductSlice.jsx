import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    product:{},
    quantity:1,
    colour:'',
    size:''

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
        },
        addColour:(state,action)=>{
            state.colour=action.payload.colour
        },
        addSize:(state,action)=>{
            state.size=action.payload.size
        }
    }
})

export const {addProduct,addQuantity,addColour,addSize} = ProductSlice.actions
export default ProductSlice.reducer