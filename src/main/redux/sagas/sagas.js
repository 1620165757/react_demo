import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import * as actionTypes from "../action/actionTypes";
import axios from 'axios';

function* getColorData() {
    const colorData = yield call(axios.get, './data.json');
    yield put({type: actionTypes.UPDATE_COLOR_DATA, payload: colorData.data})
}

export function* sagas() {
    yield takeEvery(actionTypes.GET_COLOR_DATA, getColorData)
}
