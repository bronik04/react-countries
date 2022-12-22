import {combineReducers} from "redux";
import {themeReducers} from "./theme/theme-reducers";
import {countriesReducer} from "./countries/countries-reducer";
import {controlsReducer} from "./controls/controls-reducer";
import {detailsReducer} from "./details/details-reducer";

export const rootReducer = combineReducers({
  theme: themeReducers,
  countries: countriesReducer,
  controls: controlsReducer,
  details: detailsReducer,
});