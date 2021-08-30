import { combineReducers } from "redux";
import authReducer from "./auth-reducers";
import loadingReducers from "./loading-reducers";
const reducers = combineReducers({
  auth: authReducer,
  load: loadingReducers,
});
export default reducers;
