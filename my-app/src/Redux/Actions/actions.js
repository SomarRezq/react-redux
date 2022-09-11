import {actionTypes} from  "../ActionTypes/actionTypes";

export const getReadings = ((readings) => {
    return {
        type: actionTypes.GET_READINGS,
        payload: readings
    }
});