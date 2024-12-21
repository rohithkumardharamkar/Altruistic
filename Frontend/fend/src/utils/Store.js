import {configureStore} from '@reduxjs/toolkit'
import saveReducer from './saveSlice'; 

const Store=configureStore({
    reducer:{
        save:saveReducer
    }
})
export default Store