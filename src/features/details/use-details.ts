import { useSelector } from 'react-redux';
import { clearDetails, loadCountryByName } from './details-slice';
import { useEffect } from 'react';
import { selectDetails } from './details-selector';
import { useAppDispatch } from '../../store';

export const useDetails = (name: string | undefined) => {
  const dispatch = useAppDispatch();
  const details = useSelector(selectDetails);

  useEffect(() => {
    if (name) {
      dispatch(loadCountryByName(name));
    }

    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, name]);

  return details;
};
