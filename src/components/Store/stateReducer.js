export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const totalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;
      const existingIndex = state.carts.findinc;
      const updatedShoes = state.carts.concat(action.payload);

      return {
        carts: updatedShoes,
        totalAmount: totalAmount,
      };
    default:
      return state;
  }
};
