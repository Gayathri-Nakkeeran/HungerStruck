// const cartItemsArray: string[] = [];


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
    storingFilter: (state, action) => {
      // console.log("slice working now");
      // console.log(action);
      state.filterBy = action.payload.event;
    },

    searchingItem: (state, action) => {
      // console.log("Slice working for search Button", action);
      state.searchBy = action.payload;
      // console.log()
    },

    addingCartItem: (state, action) => {
      console.log("slice working for adding cartitem", action.payload);
      state.cartTotalAmount += action.payload.price
      // let item: string = action.payload;
      if (state.cartItems.indexOf(action.payload.id) == -1)
        state.cartItems.push(action.payload.id);
      state.cartCount += 1;

      if (state.cartQuantity[action.payload.id] == null) {
        state.cartQuantity[action.payload.id] = 1
      }
      else {
        state.cartQuantity[action.payload.id] += 1
      }

      // state.cartQuantity[action.payload] == 0 ? 1 : state.cartQuantity[action.payload] + 1;
    },
    setSortBy: (state, action) => {
      console.log("slice working for sorting", action);
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

    removingFromCart: (state, action) => {
      // console.log("slice remove cart");
      console.log(action.payload.id)
      var index = state.cartItems.indexOf(action.payload.id);
      // console.log(index);
      if (index !== -1) {
        console.log("splicingggggg")
        state.cartItems.splice(index, 1)
        // state.cartCount -= 1;

      }
      // state.cartItems.splice(action.payload.id, 1);
      // console.log(state.cartQuantity, action.payload, "from splice fro remove")
      // if (state.cartCount > 0)
      console.log(state.cartQuantity)
      state.cartCount -= state.cartQuantity[action.payload.id];

      state.cartTotalAmount -= (action.payload.price * state.cartQuantity[action.payload.id])
      // state.cartQuantity[action.payload] == 0 ? 1 : state.cartQuantity[action.payload] - 1;
    },

    removingFilterSearch: (state, payload) => {
      state.filterBy = "All";
      state.searchBy = "";
      // console.log("slice working");
    },
    removingSearch: (state, payload) => {
      state.searchBy = "";
      // console.log("slice for home page");
    },
    increasingQuantity: (state, action) => {
      state.cartQuantity[action.payload.id] += 1
      state.cartCount += 1
      state.cartTotalAmount += action.payload.price;
    },
    decreasingQuantity: (state, action) => {
      state.cartTotalAmount -= action.payload.price
      // console.log(state.cartQuantity[action.payload] > 0, "check check")
      if (state.cartQuantity[action.payload.id] > 1) {
        state.cartQuantity[action.payload.id] -= 1
        state.cartCount -= 1
      }

      else {
        console.log("else working")
        var index = state.cartItems.indexOf(action.payload.id);
        // console.log(index);
        if (index !== -1) {
          state.cartItems.splice(index, 1)
          state.cartCount -= 1;

        }

        // state.cartCount -= 1;

      }
    },
    clearingCart: (state, action) => {
      console.log("slice")
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
