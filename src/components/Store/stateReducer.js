export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedShoes = state.carts.concat(action.payload);
      const totalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      return {
        carts: updatedShoes,
        totalAmount: totalAmount,
      };
    default:
      return state;
  }
};
