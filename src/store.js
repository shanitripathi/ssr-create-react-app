import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export default (state = {}) => {
  const store = createStore(reducers, state, applyMiddleware(thunk));
  return store;
};
