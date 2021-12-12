import { all, fork } from "redux-saga/effects";
import * as testSaga from "./sagas/testSaga/testSaga";

export function* rootSaga() {
  yield all([...Object.values(testSaga)].map(fork));
}
