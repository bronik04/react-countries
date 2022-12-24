import { Region } from './region';

type Currency = {
  code: string;
  name: string;
  symbol: string;
};

type Language = {
  iso693_1: string;
  iso693_2: string;
  name: string;
  nativeName: string;
};

export type Country = {
  name: string;
  nativeName: string;
  flag: string;
  flags: {
    png: string;
    svg: string;
  };
  region: Region;
  subregion: string;
  capital: string;
  population: number;
  topLevelDomain: string[];
  borders: string[];
  currencies: Currency[];
  languages: Language[];
};

type Info = {
  title: string;
  description: string;
};

export type CountryInfo = {
  name: string;
  img: string;
  info: Info[];
};
