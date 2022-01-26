const incrementAction = {
  type: "INCREMENT",
};

const decrementAction = {
  type: "DECREMENT",
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};

console.log(counterReducer(13, incrementAction));
