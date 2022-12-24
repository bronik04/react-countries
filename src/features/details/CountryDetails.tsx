import React from 'react';
import { Info } from './Info';
import { useDetails } from './use-details';
import { NavigateFunction } from 'react-router-dom';

interface CountryDetailsProps {
  navigate: NavigateFunction;
  name?: string;
}

const CountryDetails = ({ navigate, name }: CountryDetailsProps) => {

  const { status, error, currentCountry } = useDetails(name);
  return (
    <>
      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <h2>Loading...</h2>}
      {currentCountry && (
        <Info
          push={navigate}
          {...currentCountry}
        />
      )}
    </>
  );
};

export default CountryDetails;
