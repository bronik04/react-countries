import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import * as api from './config';
import themeSlice from "./features/theme/theme-slice";
import controlsSlice from "./features/controls/controls-slice";
import countriesSlice from "./features/countries/countries-slice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    controls: controlsSlice,
    countries: countriesSlice,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false
    }),
});
