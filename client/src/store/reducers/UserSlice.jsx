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
        },

        loginFail: (state, action) => {
            state.authStatus = false;
            state.userName = '';
            state.id = 0
        }
     }
})

export const { loginSuccess,loginFail } = UserSlice.actions;
export default UserSlice.reducer