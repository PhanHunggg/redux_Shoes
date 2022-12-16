import { combineReducers, createStore } from "redux";
// import { phoneReducer } from "./reducers/phoneRedux";

import {shoesReducer } from "./reducers/shoesRedux";

const rootReducer = combineReducers({
  // phoneReducer,
  shoesReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
