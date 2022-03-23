import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import setValuesReducer from "./StateForms";

const reducers = combineReducers({
  formValues: setValuesReducer,
});

const middleware = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);
export default store;
