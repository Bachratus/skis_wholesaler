import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      state.totalQuantity = state.totalQuantity + newItem.quantity;
      const identicalItemExist = state.items.filter((item) => item.id === newItem.id).length !== 0;
      const itemsCopy = [...state.items];
      if (identicalItemExist) {
        itemsCopy.map((item) => {
          if (item.id === newItem.id) {
            return {
              ...item,
              quantity: (item.quantity += newItem.quantity),
            };
          } else {
            return {
              ...item,
            };
          }
        });
        state.items = itemsCopy;
      }
      else{
        state.items.push(newItem);
      }
      console.log(newItem);
    },
  },
});
export default cartSlice;

export const cartActions = cartSlice.actions;
