import {call, put, takeEvery} from "redux-saga/effects";
import fetchCountries from "../saga/api"
import {onLoading, putCollection} from "../redux/slice"
import {TResponse} from "../components/types";

///worker
function* tryGetCities() {
    try {
        const resp: TResponse = yield call(fetchCountries)
        yield put(putCollection(resp))
    } catch {
        console.log("error");
    }
}

export function* getCountryWatcher() {
    yield takeEvery(onLoading, tryGetCities);
}

