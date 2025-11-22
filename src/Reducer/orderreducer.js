const initialState = {
  orders: {} // { 1: [...items], 2: [...items] }
};

export default function orderreducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ORDER": {
      const { table_number } = action.payload;

      const prevOrders = state.orders[table_number] || [];

      return {
        ...state,
        orders: {
          ...state.orders,
          [table_number]: [...prevOrders, action.payload]
        }
      };
    }

    case "CLEAR_TABLE_BILL": {
      const newOrders = { ...state.orders };
      delete newOrders[action.payload]; // remove table orders
      return { ...state, orders: newOrders };
    }

    default:
      return state;
  }
}
