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
    case "INCREMENT":
      console.log();

      return {
        ...state,
        carts: state.carts.filter((item) =>
          item.id === action.payload.id ? (item.amount += 1) : item
        ),
      };

    case "DECREMENT":
      return {
        ...state,
        carts: state.carts.filter((item) =>
          item.id === action.payload.id
            ? item.amount > 1
              ? (item.amount -= 1)
              : (item.amount = 0)
            : item.amount
        ),
      };
  }
};
