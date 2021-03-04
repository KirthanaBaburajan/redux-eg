const initialState = {
  counter: 0,
};

const calReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + parseInt(action.val),
    };
  }
  if (action.type === "ADDITION") {
    return {
      ...state,
      counter: state.counter + parseInt(action.val),
    };
  }
  if (action.type === "RESET") {
    return {
      ...state,
      counter: 0,
    };
  }
  return state;
};

export default calReducer;
