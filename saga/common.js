import { put, takeLatest } from "redux-saga/effects";
import { GET_COMMON } from "../constants/actionTypes";
import { getCommon } from "../api/common";
import { getCommonSuccess } from "../actions/common";
function* getDataCommon(action) {
  try {
    const data = yield getCommon(action.payload);
    yield put(getCommonSuccess(data));
  } catch (err) {
    console.log("err==>", err);
  }
}
export function* watchCommonSaga() {
  yield takeLatest(GET_COMMON, getDataCommon);
}
