import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      const newItems = state.items.filter(
        (item) => item.card.info.id !== action.payload
      );
      state.items.length = 0;
      newItems.map((item) => state.items.push(item));
    },
    clearItems: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItems, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
