import { combineReducers } from "redux";
import musicReducer from "./songReducer";

const reducers = combineReducers({
    musicReducer,
});

export default reducers;