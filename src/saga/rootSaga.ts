import {getCountryWatcher} from "./countrySaga";
import {all} from "redux-saga/effects";

function* rootSaga() {
    yield all([getCountryWatcher()]);
}

export default rootSaga;
