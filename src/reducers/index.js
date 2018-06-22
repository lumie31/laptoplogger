import { combineReducers } from "redux";
import logs from "./logs";
import users from "./users";
import user from "./user";

const rootReducer = combineReducers({
  logs,
  users,
  user
});

export default rootReducer;
