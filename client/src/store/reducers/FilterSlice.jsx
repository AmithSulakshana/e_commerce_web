import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    casual:[]
}

const FilterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        updateFilter:(state,action)=>{
            state.casual=action.payload.casual;
        }

        
    }
})

export const{updateFilter} = FilterSlice.actions;
export default FilterSlice.reducer