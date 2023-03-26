import { combineReducers } from "redux";
import cartProdsReducer from "./cartProdsReducer";
import wishlistProdsReducer from "./wishlistProdsReducer";
import currentUserReducer from "./currentUserReducer";

const rootReducer = combineReducers({
  cartProds: cartProdsReducer,
  wishlistProds: wishlistProdsReducer,
  currentUser: currentUserReducer,
});

export default rootReducer;

