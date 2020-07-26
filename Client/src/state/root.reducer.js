import { combineReducers } from "redux";
import productReducer from "./product.slice";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";
// import priceRedcuer from "./priceSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  products: productReducer,
  // price: priceRedcuer,
});

export default rootReducer;
