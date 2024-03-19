import {all} from 'redux-saga/effects';
import {setUsers} from "../store/userReducer";
import {userWatcher} from "./userSaga";
import {countWatcher} from "./countSaga";

export function* rootWatcher() {
  yield all([countWatcher(), userWatcher()]);
}