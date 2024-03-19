import {put, takeEvery, call} from 'redux-saga/effects';
import {fetchUsers, setUsers} from "../store/userReducer";

export const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users')

function* fetchUserWorker() {
  const data = yield call(fetchUsersFromApi);
  const json = yield call(() => new Promise(resolve => resolve(data.json())));
  yield put(setUsers(json));
}

export function* userWatcher() {
  yield takeEvery('FETCH_USERS', fetchUserWorker);
}