import { all } from "redux-saga/effects";
import { watchCommonSaga } from "./common";
export default function* rootSaga() {
  yield all([watchCommonSaga()]);
}
