import * as actionTypes from "../action/actionTypes";

const initState = {
    backgroundColor: '#ffd09f',
    colorData:[]
};
export const reduxReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_BACKGROUND_COLOR:
            return {
                ...state,
                backgroundColor: action.backgroundColor
            };
        case actionTypes.UPDATE_COLOR_DATA:
            return {
                ...state,
                colorData: action.payload.colorData
            };
        default:
            return {
                ...state,
            }
    }
};
