import {configureStore} from '@reduxjs/toolkit'
import UserSlice from './reducers/UserSlice'
import CartSlice from './reducers/CartSlice';
import ProductSlice from './reducers/ProductSlice';

const store = configureStore({
    reducer:{
        userSlice:UserSlice,
        cartSlice:CartSlice,
        productSlice:ProductSlice
    }
})

export default store;