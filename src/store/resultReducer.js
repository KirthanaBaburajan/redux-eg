const initialState = {
  results: [],
};

const calReducer = (state = initialState, action) => {
  if (action.type === "CLEAR") {
    return {
      ...state,
      results: [],
    };
  }
  if (action.type === "STORE") {
    let num = [...state.results, action.val];
    return {
      ...state,
      results: num,
    };
  }
  return state;
};

export default calReducer;
