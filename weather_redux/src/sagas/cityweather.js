import { takeLatest, put, call } from 'redux-saga/effects'
import weatherapi from '../api/weatherapi'

function* watchcitycallasync(action) {

    var responsedata = yield call(weatherapi, action.payload)
    yield put({
        type: 'SET_WEATHER_ASYNC',
        payload: responsedata
    });
}

export function* watchcitycall() {
    // console.log("dispatch caught")
    yield takeLatest("SET_WEATHER", watchcitycallasync);
}