import { takeEvery, put, take } from "redux-saga/effects";

import {
  storingFilter,
  searchingItem,
  addingCartItem,
  setSortBy,
  settingCity,
  settingCountry,
  settingEmail,
  settingName,
  settingPhone,
  settingPostal,
  removingFromCart,
  removingFilterSearch,
  removingSearch,
  increasingQuantity,
  decreasingQuantity,
  clearingCart,
} from "./slice.jsx";
import { PayloadAction } from "@reduxjs/toolkit";

function* storeFilter(action: PayloadAction<string>) {
  // console.log("Saga Working", action);
  yield put(storingFilter(action.payload));
}

function* setSearch(action: PayloadAction<string>) {
  // console.log("Saga working for search button");
  yield put(searchingItem(action.payload));
}

function* addToCart(action: PayloadAction<string>) {
  // console.log("saga working for cart adding");
  yield put(addingCartItem(action.payload));
}
function* setSorting(action: PayloadAction<string>) {
  // console.log("saga working for sorting");
  yield put(setSortBy(action.payload));
}

function* setName(action: PayloadAction<string>) {
  yield put(settingName(action.payload));
}
function* setEmail(action: PayloadAction<string>) {
  yield put(settingEmail(action.payload));
}
function* setPhone(action: PayloadAction<string>) {
  yield put(settingPhone(action.payload));
}
function* setCountry(action: PayloadAction<string>) {
  yield put(settingCountry(action.payload));
}
function* setCity(action: PayloadAction<string>) {
  yield put(settingCity(action.payload));
}
function* setPostal(action: PayloadAction<string>) {
  yield put(settingPostal(action.payload));
}

function* removeFromCart(action: PayloadAction<number>) {
  // console.log("safa for remove cart");
  yield put(removingFromCart(action.payload));
}

function* removeFilterSearch(action: PayloadAction<string>) {
  yield put(removingFilterSearch(action.payload));
}

function* removeSearch(action: PayloadAction<string>) {
  // console.log("sag for home");
  yield put(removingSearch(action.payload));
}

function* increaseQuantity(action: PayloadAction<string>) {
  yield put(increasingQuantity(action.payload));
}

function* decreaseQuantity(action: PayloadAction<string>) {
  yield put(decreasingQuantity(action.payload));
}

function* clearCart() {
  yield put(clearingCart);
}
function* rootSaga() {
  yield takeEvery("storeFilter", storeFilter);
  yield takeEvery("setSearch", setSearch);
  yield takeEvery("addToCart", addToCart);
  yield takeEvery("setSorting", setSorting);
  yield takeEvery("setName", setName);
  yield takeEvery("setEmail", setEmail);
  yield takeEvery("setPhone", setPhone);
  yield takeEvery("setCountry", setCountry);
  yield takeEvery("setCity", setCity);
  yield takeEvery("setPostal", setPostal);
  yield takeEvery("removeFromCart", removeFromCart);
  yield takeEvery("removeFilterSearch", removeFilterSearch);
  yield takeEvery("removeSearch", removeSearch);
  yield takeEvery("increaseQuantity", increaseQuantity);
  yield takeEvery("decreaseQuantity", decreaseQuantity);
  yield takeEvery("clearCart", clearCart);
}

export default rootSaga;
