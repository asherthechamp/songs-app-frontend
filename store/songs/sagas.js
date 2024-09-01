import { call, put, takeLatest, select } from "redux-saga/effects";
import axios from "axios";
import {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
} from "./slice";
import axiosInstance from "../../api";

const getFilter = (state) => state.songs.filter;

function* fetchSongs() {
  try {
    // const response = yield call(axiosInstance.get, "/api/songs");
    const filter = yield select(getFilter);
    const response = yield call(
      axiosInstance.get,
      `/api/songs?filter=${filter}`
    );
    yield put(fetchSongsSuccess(response.data));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

export function* watchFetchSongs() {
  yield takeLatest(fetchSongsRequest.type, fetchSongs);
}
