export const addorder = (item) => {
  return {
    type: "ADD_ORDER",
    payload: item
  };
};

export const increaseQty = (id) => ({
  type: "INCREASE_QTY",
  payload: id
});

export const decreaseQty = (id) => ({
  type: "DECREASE_QTY",
  payload: id
});

export const removeOrderItem = (id) => ({
  type: "REMOVE_ORDER",
  payload: id
});

export const clearOrders = () => ({
  type: "CLEAR_ORDERS"
});


export const resetfilter = () => {
  return {
    type: "RESET_FILTER",
  };
};

export const setfilter = (value) => {
  return {
    type: "SET_FILTER",
    payload: value,
  };
};

export const settablenumber = (num) => {
  return {
    type: "SET_TABLE_NUMBER",
    payload: num,
  };
};

export const clearTableBill = (table) => ({
  type: "CLEAR_TABLE_BILL",
  payload: table
});
