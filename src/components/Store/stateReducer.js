export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
    case "REMOVE":
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== action.payload.id),
      };
  }
};
