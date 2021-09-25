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

    case "REMOVE":
      const deletedId = state.carts.findIndex(
        (item) => item.id == action.payload
      );
      const deletedItemPrice =
        state.carts[deletedId].price * state.carts[deletedId].amount;

      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== action.payload),
        totalAmount: state.totalAmount - deletedItemPrice,
      };

    default:
      return state;
  }
};
