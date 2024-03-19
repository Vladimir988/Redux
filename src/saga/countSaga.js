import {put, takeEvery} from 'redux-saga/effects';
import {incrementCreator} from "../store/countReducer";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function* incrementWorker() {
  yield delay(1000);
  yield put(incrementCreator());
}

function* decrementWorker() {

}

export function* countWatcher() {
  yield takeEvery('ASYNC_INCREMENT', incrementWorker);
}