export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const totalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;
      const eIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      let updatedShoes;
      const eItem = state.carts[eIndex];

      if (eItem) {
        let updatedItem = {
          ...eItem,
          amount: eItem.amount + action.payload.amount,
        };
        updatedShoes = [...state.carts];
        updatedShoes[eIndex] = updatedItem;
      } else {
        updatedShoes = state.carts.concat(action.payload);
      }

      return {
        carts: updatedShoes,
        totalAmount: totalAmount,
      };

    default:
      return state;
  }
};
