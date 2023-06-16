import { configureStore } from "@reduxjs/toolkit";
import superUserReducer from "./slices/SuperUserSice";
import guestReducer from "./slices/GuestSlice";
import projectManagerReducer from "./slices/ProjectManagerSlice";
import siteEngineerReducer from "./slices/SiteEngineerSlice";
import adminReducer from "./slices/AdminSlice";
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
  siteEngineer: siteEngineerReducer,
  admin: adminReducer,
  guest:guestReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persistedReducer,
});





