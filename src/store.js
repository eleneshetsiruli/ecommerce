import { createStore, combineReducers } from "redux";

const initialState = {
  isOpen: false,
};
const initialSearchValue = "";

function reducer(state = initialState, action) {
  switch (action.type) {
    case "open":
      return { ...state, isOpen: true };
    case "close":
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

function searchValue(state = initialSearchValue, action) {
  switch (action.type) {
    case "set":
      return action.newValue;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  open: reducer,
  search: searchValue,
});

const store = createStore(rootReducer);

export default store;
