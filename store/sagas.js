import { all } from "redux-saga/effects";
import { watchFetchSongs } from "./songs/sagas";

export default function* rootSaga() {
  yield all([watchFetchSongs()]);
}
