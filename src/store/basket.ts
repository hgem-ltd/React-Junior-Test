import { createSlice } from "@reduxjs/toolkit";

interface Item {
  id: string;
  name: string;
  price: number;
  vegetarian: boolean;
  quantity: number;
}

interface Basket {
  items: Item[];
}

const initialState: Basket = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) item.quantity++;
      else state.items.push({ ...action.payload, quantity: 1 });
    },
    removeItem: (state, action) => {
      let index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[index].quantity > 1) state.items[index].quantity--;
      else state.items.splice(index, 1);
    },
  },
});

export const { addItem, removeItem } = basketSlice.actions;
export default basketSlice.reducer;
