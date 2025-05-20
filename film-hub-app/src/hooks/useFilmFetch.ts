import { useState, useEffect } from "react";

const useFilmFetch = () => {
  const [films, setFilms] = useState(null);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = import.meta.env.VITE_TMDB_API_KEY;

    const fetchFilms = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!res.ok) throw Error("Error in fetching data");
        const data = await res.json();
        setFilms(data.results.slice(0, 10));
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilms();
  }, []);

  return { films, isLoading, error };
};
export default useFilmFetch;
