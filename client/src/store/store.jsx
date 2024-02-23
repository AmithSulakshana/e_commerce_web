import {configureStore} from '@reduxjs/toolkit'
import UserSlice from './reducers/UserSlice'
import CartSlice from './reducers/CartSlice';

const store = configureStore({
    reducer:{
        userSlice:UserSlice,
        cartSlice:CartSlice
    }
})

export default store;