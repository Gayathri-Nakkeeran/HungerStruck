"use client";
import { Provider } from "react-redux";
import React, { ReactNode } from "react";
import store from "../redux/store";
type ProviderProps = {
  children: React.ReactNode;
};
import { PersistGate } from "redux-persist/integration/react";
export default function DataProvider({ children }: ProviderProps) {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      {children}
      {/* </PersistGate> */}
    </Provider>
  );
}
