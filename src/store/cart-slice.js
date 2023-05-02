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

      let existingIdenticalItemQuantity =
        state.items.filter((item) => item.id === newItem.id).length !== 0
          ? state.items.filter((item) => item.id === newItem.id)[0].quantity
          : null;
      let existingIdenticalItemMaxQuantity =
        state.items.filter((item) => item.id === newItem.id).length !== 0
          ? state.items.filter((item) => item.id === newItem.id)[0].maxQuantity
          : null;
      if (existingIdenticalItemMaxQuantity) {
        if (
          existingIdenticalItemQuantity + newItem.quantity >
          existingIdenticalItemMaxQuantity
        )
          return;
      }

      state.totalQuantity = state.totalQuantity + newItem.quantity;
      const identicalItemExist =
        state.items.filter((item) => item.id === newItem.id).length !== 0;
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
      } else {
        state.items.push(newItem);
      }
    },
    removeItemFromCart(state, action) {
      function removeObjectWithId(arr, id) {
        const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
        if (objWithIdIndex > -1) {
          arr.splice(objWithIdIndex, 1);
        }
        return arr;
      }
      let itemRemovedEntirely = false;

      const idOfItemToRemove = action.payload.id;
      state.totalQuantity = state.totalQuantity - 1;
      const itemsCopy = [...state.items];
      itemsCopy.map((item) => {
        if (item.id === idOfItemToRemove) {
          if (item.quantity === 1) {
            itemRemovedEntirely = true;
          }
          return {
            ...item,
            quantity: (item.quantity -= 1),
          };
        } else {
          return {
            ...item,
          };
        }
      });
      if (itemRemovedEntirely) removeObjectWithId(itemsCopy, idOfItemToRemove);
      state.items = itemsCopy;
    },
    removeItemFromCartEntirely(state, action) {
      function removeObjectWithId(arr, id) {
        const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
        if (objWithIdIndex > -1) {
          arr.splice(objWithIdIndex, 1);
        }
        return arr;
      }
      const idOfItemToRemove = action.payload.id;
      const quantityOfRemovedItem = action.payload.quantity;
      state.totalQuantity -= quantityOfRemovedItem;
      const itemsCopy = [...state.items];
      removeObjectWithId(itemsCopy, idOfItemToRemove);
      state.items = itemsCopy;
    },
    resetCart(state) {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});
export default cartSlice;

export const cartActions = cartSlice.actions;
