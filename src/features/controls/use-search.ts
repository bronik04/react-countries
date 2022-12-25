import { useSelector } from 'react-redux';
import { setSearch } from './controls-slice';
import {selectSearch} from "./controls-selectors";
import {useAppDispatch} from "../../store";
import {ChangeEventHandler} from "react";

export type Search = ChangeEventHandler<HTMLInputElement>

export const useSearch = (): [string, Search] => {
  const dispatch = useAppDispatch();
  const search = useSelector(selectSearch);
  const handleSearch:Search = (e) => {
    dispatch(setSearch(e.target.value));
  };
  return [search, handleSearch];
};
