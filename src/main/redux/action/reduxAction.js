import * as actionTypes from "./actionTypes";

export function changeBackgroundColor(text) {
    return {
        type: actionTypes.CHANGE_BACKGROUND_COLOR,
        backgroundColor: text,
    }
}
export function getColorData() {
    return{
        type:actionTypes.GET_COLOR_DATA
    }
}
