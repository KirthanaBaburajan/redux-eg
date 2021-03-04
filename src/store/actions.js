export const increment = (value) => {
  return {
    type: "INCREMENT",
    val: value,
  };
};

export const addition = (value) => {
  return {
    type: "ADDITION",
    val: value,
  };
};

export const clear = () => {
  return {
    type: "CLEAR",
  };
};

export const store = (value) => {
  return {
    type: "STORE",
    val: value,
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};
