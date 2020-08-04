import {combineReducers} from "redux";
import count from "./count";
import total from "./total";

const reducer = combineReducers({
    total,
    count
})
export default reducer;
