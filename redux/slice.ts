// const cartItemsArray: string[] = [];

import { PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  filterBy: "All",
  searchBy: "",
  cartItems: [],
  cartCount: 0,
  cartQuantity: {},
  cartTotalAmount: 0,

  sortBy: "default",
  name: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  postal: "",
};

import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    storingFilter: (state, action: PayloadAction<any>) => {

      state.filterBy = action.payload.event;
    },

    searchingItem: (state, action:PayloadAction<any>) => {

      state.searchBy = action.payload;

    },

    addingCartItem: (state:any, action:PayloadAction<{id:string , price:number}>) => {

      state.cartTotalAmount += action.payload.price

      if (state.cartItems.indexOf(action.payload.id) == -1)
        state.cartItems.push(action.payload.id);
      state.cartCount += 1;

      if (state.cartQuantity[action.payload.id] == null) {
        state.cartQuantity[action.payload.id] = 1
      }
      else {
        state.cartQuantity[action.payload.id] += 1
      }


    },
    setSortBy: (state, action) => {

      state.sortBy = action.payload;
    },

    settingName: (state, action) => {
      state.name = action.payload;
    },

    settingEmail: (state, action) => {
      state.email = action.payload;
    },

    settingPhone: (state, action) => {
      state.phone = action.payload;
    },

    settingCountry: (state, action) => {
      state.country = action.payload;
    },

    settingCity: (state, action) => {
      state.city = action.payload;
    },

    settingPostal: (state, action) => {
      state.postal = action.payload;
    },

    removingFromCart: (state:any, action:PayloadAction<{id:string , price:number}>) => {

      var index = state.cartItems.indexOf(action.payload.id);

      if (index !== -1) {

        state.cartItems.splice(index, 1)


      }


      state.cartCount -= state.cartQuantity[action.payload.id];

      state.cartTotalAmount -= (action.payload.price * state.cartQuantity[action.payload.id])

    },

    removingFilterSearch: (state, payload) => {
      state.filterBy = "All";
      state.searchBy = "";

    },
    removingSearch: (state, payload) => {
      state.searchBy = "";

    },
    increasingQuantity: (state:any, action:PayloadAction<{id:string , price:number}>) => {
      state.cartQuantity[action.payload.id] += 1
      state.cartCount += 1
      state.cartTotalAmount += action.payload.price;
    },
    decreasingQuantity: (state:any, action:PayloadAction<{id:string , price:number}>) => {
      state.cartTotalAmount -= action.payload.price

      if (state.cartQuantity[action.payload.id] > 1) {
        state.cartQuantity[action.payload.id] -= 1
        state.cartCount -= 1
      }

      else {

        var index = state.cartItems.indexOf(action.payload.id);

        if (index !== -1) {
          state.cartItems.splice(index, 1)
          state.cartCount -= 1;

        }



      }
    },
    clearingCart: (state, action) => {
       state.cartCount = 0
      state.cartItems = []
      state.cartQuantity = {}
      state.cartTotalAmount = 0
    },

  },

});

export default slice.reducer;
export const {
  storingFilter,
  searchingItem,
  addingCartItem,
  setSortBy,
  settingName,
  settingEmail,
  settingPhone,
  settingCountry,
  settingCity,
  settingPostal,
  removingFromCart,
  removingFilterSearch,
  removingSearch,
  increasingQuantity,
  decreasingQuantity,
  clearingCart,
} = slice.actions;
