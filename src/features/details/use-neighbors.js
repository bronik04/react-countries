import {useEffect} from "react";
import {loadNeighborsByBorder, selectNeighbors} from "./details-slice";
import {useDispatch, useSelector} from "react-redux";

export const useNeighbors = (borders = []) => {
  const dispatch = useDispatch();
  const neighbors = useSelector(selectNeighbors);
  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsByBorder(borders));
    }
  }, [borders, dispatch]);

  return neighbors;
}