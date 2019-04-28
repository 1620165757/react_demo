import {CHANGE_BACKGROUND_COLOR} from "./actionTypes";

export function changeBackgroundColor(text) {
    return {
        type: CHANGE_BACKGROUND_COLOR,
        backgroundColor: text,
    }
}
