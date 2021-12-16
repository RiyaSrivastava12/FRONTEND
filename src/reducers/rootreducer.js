
import loginReducer from "./loginreducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({

   login: loginReducer,
});

export default rootReducer;