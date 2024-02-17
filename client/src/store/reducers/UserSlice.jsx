import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName:'',
    id:0,
    authStatus:false
}

const UserSlice = createSlice({
     name:'user',
     initialState,
     reducers:{
        loginSuccess: (state, action) => {
            state.authStatus = true;
            state.userName = action.payload.userName;
            state.id = action.payload.id;
        }
     }
})

export const { loginSuccess } = UserSlice.actions;
export default UserSlice.reducer