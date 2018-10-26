import { all } from "redux-saga/effects";
import { watchDemoSaga } from "./sagaDemo";
export default function* rootSaga() {
  yield all([watchDemoSaga()]);
}
