import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import booksReducer from "./reducers/booksReducer";

const configStore = () => {
  var initialState = {};

  try {
    initialState = sessionStorage.getItem("bible-app")
      ? JSON.parse(sessionStorage.getItem("bible-app"))
      : {};
  } catch (error) {
    console.log("getError", error);
  }

  const saver = (store) => (next) => (action) => {
    let stateToSave = store.getState();

    sessionStorage.setItem("bible-app", JSON.stringify({ ...stateToSave }));

    return next(action);
  };

  const rootReducer = combineReducers({
    booksReducer: booksReducer,
  });

  return createStore(rootReducer, applyMiddleware(thunk, saver));
};

export default configStore;
