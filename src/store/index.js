import {createStore, combineReducers, applyMiddleware} from "redux";
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import {thunk} from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import {countReducer} from "./countReducer";
import {userReducer} from "./userReducer";
import {countWatcher} from "../saga/countSaga";

const sagaMiddlware = createSagaMiddleware();

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,

  count: countReducer,
  users: userReducer,
});

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddlware)));

sagaMiddlware.run(countWatcher);