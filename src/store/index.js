import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./root-reducer";
import thunk from "redux-thunk";
import axios from "axios";
import * as api from "../config";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(
    thunk.withExtraArgument({
      client: axios,
      api,
    })
  )
))