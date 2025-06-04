import { useEffect, useState } from "react";
import type { Film } from "../types/filmType";

interface filmType {
  type: string;
  page: number;
}

const useFilmFetch = (props: filmType) => {
  const { type, page } = props;
  const [films, setFilms] = useState<Film[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;

    const filmFetch = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/${type}?language=en-US&page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
        if (!res.ok) throw Error("Error in fetching data");
        const data = await res.json();
        const filteredFilms: Film[] = data.results.map((item: any) => ({
          id: item.id,
          title: item.name ? item.name : item.title,
          overview: item.overview,
          poster_path: item.poster_path,
          backdrop_path: item.backdrop_path,
          release_date: item.first_air_date
            ? item.first_air_date
            : item.release_date,
          vote_average: item.vote_average,
          vote_count: item.vote_count,
          popularity: item.popularity,
          genre_ids: item.genre_ids,
          original_language: item.original_language,
        }));

        setFilms(filteredFilms);
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    filmFetch();
  }, [type, page]);

  return { films, isLoading, error };
};
export default useFilmFetch;
