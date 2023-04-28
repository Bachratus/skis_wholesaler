import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,
    },
    reducers:{
        addItemToCart(state,action){
            state.totalQuantity++;
            const newItem = action.payload;
            state.items.push(newItem)
            console.log(newItem)
        }
    }
});
export default cartSlice;

export const cartActions = cartSlice.actions;