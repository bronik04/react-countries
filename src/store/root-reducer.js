import {combineReducers} from "redux";
import {themeReducers} from "./theme/theme-reducers";
import {countriesReducer} from "./countries/countries-reducer";

export const rootReducer = combineReducers({
  theme: themeReducers,
  countries: countriesReducer,
});