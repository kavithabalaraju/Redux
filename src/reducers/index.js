import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import loggedReducer from "./isLogged";

const allReducer = combineReducers({
    counter:CounterReducer,
    isLogged:loggedReducer
    
}
);
export default allReducer;