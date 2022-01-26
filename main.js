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

const counterRender = document.getElementById("counter-render");
const incrementButton = document.getElementById("button-increment");
const decrementButton = document.getElementById("button-decrement");

// MAIN
const render = () => {
  //getState() return the current value
  counterRender.innerText = store.getState();
};

//display the value before the first action
render();

//subscribe will be triggered every time the state change
store.subscribe(render);

incrementButton.addEventListener("click", () =>
  store.dispatch(incrementAction)
);
decrementButton.addEventListener("click", () =>
  store.dispatch(decrementAction)
);
