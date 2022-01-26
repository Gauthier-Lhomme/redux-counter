//Actions
const incrementAction = {
  type: "INCREMENT",
};

const decrementAction = {
  type: "DECREMENT",
};

//Reducer
let initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};

// STORE
const { createStore } = Redux;
const store = createStore(counterReducer);

//getState() return the current value
const render = () => console.log(store.getState());

//subscribe will be triggered every time the state change
store.subscribe(render);

store.dispatch(incrementAction);
// 1

store.dispatch(decrementAction);
// 0

store.dispatch(incrementAction);
// 1