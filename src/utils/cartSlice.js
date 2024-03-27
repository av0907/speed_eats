import { createSlice, current } from "@reduxjs/toolkit";
import { list } from "postcss";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        deleteItem: (state,action) => {
            state.items =  state.items.filter((item)=>item?.card?.info?.id !== action?.payload?.card?.info?.id)
        },
        emptyCart: (state) =>{
            state.items.length=0;
        }
    }
});

export default cartSlice.reducer;

export const {addItem, deleteItem, emptyCart} = cartSlice.actions;