import {configureStore} from '@reduxjs/toolkit'
import UserSlice from './reducers/UserSlice'

const store = configureStore({
    reducer:{
        userSlice:UserSlice
    }
})

export default store;