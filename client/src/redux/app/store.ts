import { combineReducers, configureStore } from "@reduxjs/toolkit";
import quizzesReducer from "../features/quizzes/quizzes.slice";
import announsReducer from "../features/announs/announs.slice";

// const persistCofnig = {
//   key: "root",
//   storage,
//   version: 2,
//   whitelist: [],
// };

const rootReducer = combineReducers({
  quizzes: quizzesReducer,
  announs: announsReducer,
});
// const persistedReducer = persistReducer(persistCofnig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
});

// export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
