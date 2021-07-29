import {combineReducers} from "redux";
import logReducer from "./logReducer";
import memberReducer from "./memberReducer";

export default combineReducers({
    log: logReducer,
    member: memberReducer
})
