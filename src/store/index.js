import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartItem = [{ id: '001', title: 'bottle', quantity: 1, price: 1000 }];
// let cartItem = new Map([['001', { id: '001', title: 'bottle', quantity: 1, price: 1000 }]]);

const cartInitialState = { toggle: false, cartItem };

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    toggleCart(state) {
      state.toggle = !state.toggle;
    },
    addProductToCart(state, action) {
      const payload = action.payload;
      console.log('payload:', payload);
    }
  }
});

const store = configureStore({
  reducer: { cartReducer: cartSlice.reducer }
});

export const cartAction = cartSlice.actions;
export default store;
