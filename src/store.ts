import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import * as api from './config';
import themeSlice from "./features/theme/theme-slice";
import controlsSlice from "./features/controls/controls-slice";
import countriesSlice from "./features/countries/countries-slice";
import detailSlice from "./features/details/details-slice";
import {useDispatch} from "react-redux";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    controls: controlsSlice,
    countries: countriesSlice,
    details: detailSlice,
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

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

