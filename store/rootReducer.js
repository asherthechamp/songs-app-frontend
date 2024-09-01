import { combineReducers } from "@reduxjs/toolkit";
import songsReducer from "./songs/slice";

const rootReducer = combineReducers({
  songs: songsReducer,
});

export default rootReducer;
