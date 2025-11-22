const initialState = {
  table_number: null,
};

const tablereducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TABLE_NUMBER":
      return {
        ...state,
        table_number: action.payload,
      };

    default:
      return state;
  }
};

export default tablereducer;
