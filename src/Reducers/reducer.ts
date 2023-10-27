import { combineReducers } from "redux";
import musicReducer from "./songReducer";
import searchReducer from './searchReducer';

const reducers = combineReducers({
    musicReducer,
    searchReducer,
});

export default reducers;