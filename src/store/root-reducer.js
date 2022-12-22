import {combineReducers} from "redux";
import {themeReducers} from "./theme/theme-reducers";

export const rootReducer = combineReducers({
  theme: themeReducers,
  countries: combineReducers,
});