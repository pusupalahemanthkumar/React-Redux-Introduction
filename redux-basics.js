/*          Redux Basics        */

// Importing Requireed Files And Packages Here.
const redux = require("redux");
const createStore = redux.createStore;

// Defining Initial State Here.
const initialState = {
  counter: 0,
};

// Defining Reducer Here.
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  return state;
};

// Creating Redux  Store Here.
const store = createStore(rootReducer);

// Subscription Here.
store.subscribe(() => {
  console.log(" subscription :", store.getState());
});

// Dispatching Action Here.
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
