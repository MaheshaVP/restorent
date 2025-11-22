const initialState = {
  filter_name: "All Items",
};

const filterreducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, filter_name: action.payload };

    case "RESET_FILTER":
      return { ...state, filter_name: "All Items" };

    default:
      return state;
  }
};

export default filterreducer;
