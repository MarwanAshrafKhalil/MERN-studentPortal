import { combineReducers, configureStore } from "@reduxjs/toolkit";
import quizzesReducer from "../features/quizzes/quizzes.slice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistCofnig = {
  key: "root",
  storage,
  version: 2,
  whitelist: [],
};

const rootReducer = combineReducers({
  quizzes: quizzesReducer,
});
const persistedReducer = persistReducer(persistCofnig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
