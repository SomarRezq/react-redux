import {actionTypes} from '../ActionTypes/actionTypes';
const initialState = {
    readings: []
}

export const ReadingsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.GET_READINGS: 
            return {...state, readings: payload};
        default:
            return initialState;
    }
};