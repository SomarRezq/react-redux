import {combineReducers} from 'redux';
import {ReadingsReducer} from "./ReadingsReducer";

const reducers = combineReducers({
    readings: ReadingsReducer
});
export default reducers;