import { combineReducers } from "redux";

import number from "./number";
import title from "./title";
import day from "./day";
import todos from "./todos"

export default combineReducers({
    number,
    title,
    day,
    todos,
});