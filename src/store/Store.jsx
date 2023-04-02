import { configureStore } from "@reduxjs/toolkit";
import superUserReducer from "./slices/SuperUserSice";
import projectManagerReducer from "./slices/ProjectManagerSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
}

const reducer = combineReducers({
  superUser: superUserReducer,
  projectManager: projectManagerReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persistedReducer,
});
