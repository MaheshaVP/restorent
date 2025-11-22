import { combineReducers } from "redux";
import filterreducer from "./filterreducer";
import tablereducer from "./tablereducer";
import orderreducer from "./orderreducer";

export default combineReducers({
  filterreducer,
  tablereducer,
  orderreducer,
});
