import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  showModal: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    createDessert(state, action) {
      const dessertTotalPrice = {
        ...action.payload,
        totalPrice: action.payload.price,
      };
      state.cart.push(dessertTotalPrice);
    },
    incrementDessert(state, action) {
      const currDessert = state.cart.find(
        (dessert) => dessert.name === action.payload
      );
      currDessert.quantity += 1;
      currDessert.totalPrice = currDessert.quantity * currDessert.price;
    },
    decrementDessert(state, action) {
      const currDessert = state.cart.find(
        (dessert) => dessert.name === action.payload
      );
      currDessert.quantity -= 1;
      currDessert.totalPrice = currDessert.quantity * currDessert.price;

      if (currDessert.quantity === 0)
        cartSlice.caseReducers.removeDessert(state, {
          payload: currDessert.name,
        });
      // if (currDessert.quantity === 0)
      //   state.cart = state.cart.filter(
      //     (dessert) => dessert.name !== currDessert.name
      //   );
    },
    removeDessert(state, action) {
      state.cart = state.cart.filter(
        (dessert) => dessert.name !== action.payload
      );
    },
    reset(state) {
      state.cart = [];
    },
    modal(state, action) {
      state.showModal = action.payload;
    },
  },
});

export const {
  createDessert,
  incrementDessert,
  decrementDessert,
  removeDessert,
  reset,
  modal,
} = cartSlice.actions;

export default cartSlice.reducer;
