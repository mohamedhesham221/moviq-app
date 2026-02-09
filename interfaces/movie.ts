import type {
  Genre,
  ProductionCompany,
  ProductionCountry,
  SpokenLanguage,
} from "./api";

export interface Movie {
  title: string;
  id: number;
  vote_average: string;
  backdrop_path: string | null;
  poster_path: string | null;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  vote_count: number;
}
