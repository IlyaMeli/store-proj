import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./root.reducer";
import {
  save_state_locally,
  get_local_state,
} from "./middleware/localstorage.middleware";

const store = configureStore({
  reducer: rootReducer,
  preloadedState: get_local_state(),
  middleware: [...getDefaultMiddleware(), save_state_locally],
});

export default store;
