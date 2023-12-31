import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import sliceReducer from "./slice";
import { enableMapSet } from "immer";
enableMapSet();
// const persistConfig = {
//   key: "root",
//   storage,
// };

const sagaMiddleWare = createSagaMiddleware();
// const persistedReducer = persistReducer(persistConfig, sliceReducer);
const appStore = configureStore({
  reducer: sliceReducer,
  middleware: [sagaMiddleWare],
});
sagaMiddleWare.run(rootSaga);

export default appStore;

export type RootState = ReturnType<typeof appStore.getState>;
// export const persistor = persistStore(appStore);
