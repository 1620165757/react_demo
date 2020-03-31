import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {ADD_TODO} from "../redux/actions";
import {requestApi} from "../request/request";

function* fetchUser(action: any) {
    console.log('user',111);
    const user = yield call(requestApi.addTodoAsync);
    console.log('user',user);
}

function* reduxSaga() {
    yield takeLatest(ADD_TODO, fetchUser);
}

export default reduxSaga;
