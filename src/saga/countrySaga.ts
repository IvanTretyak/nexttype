import {call, put, takeEvery} from "redux-saga/effects";
import fetchCountries from "../saga/api"
import {onLoading, putCollection, putShowCollection} from "../redux/slice"
import {TResponse} from "../components/types";

///worker
function* tryGetCities() {
    try {
        const resp: TResponse = yield call(fetchCountries)
        yield put(putCollection(resp))
        yield put(putShowCollection(resp))
    } catch {
        console.log("error");
    }
}

export function* getCountryWatcher() {
    yield takeEvery(onLoading, tryGetCities);
}

