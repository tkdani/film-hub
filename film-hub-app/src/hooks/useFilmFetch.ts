import { useState, useEffect } from "react";

const useFilmFetch = () => {
  const [films, setFilms] = useState(null);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilms = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          {
            headers: {
              Authorization: `Bearer ${
                import.meta.env.VITE_TMDB_API_KEY
              }Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!res.ok) throw Error("Error in fetching data");
        const data = await res.json();
        setFilms(data);
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
        console.log(films);
      }
    };

    fetchFilms();
  }, []);

  return { films, isLoading, error };
};
export default useFilmFetch;
