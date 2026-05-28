import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import { userRegisterReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  user: userRegisterReducer,
});

const addressFromStorage = localStorage.getItem("address")
  ? JSON.parse(localStorage.getItem("address"))
  : {};

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  user: { userInfo: userInfoFromStorage, address: addressFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
