import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { selectDetails } from '../store/details/details-selectors';
import { useEffect } from 'react';
import {
  clearDetails,
  loadCountryByName,
} from '../store/details/details-actions';

export const Details = () => {
  const dispatch = useDispatch();

  const { name } = useParams();
  const navigate = useNavigate();

  const { currentCountry, status, error } = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, name]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>

      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <h2>Loading...</h2>}
      {currentCountry && (
        <Info
          push={navigate}
          {...currentCountry}
        />
      )}
    </div>
  );
};
