import { createSlice } from "@reduxjs/toolkit";

let saveSlice=createSlice({
    name:'save',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>
        {
            state.items.push(action.payload);
        },
        removeItem:(state)=>
        {
            state.items.pop();
        },
        clearItems:(state)=>
        {
            state.items.length=0;
        }
    }
})

export const {addItem,removeItem,clearItems}=saveSlice.actions
export default saveSlice.reducer