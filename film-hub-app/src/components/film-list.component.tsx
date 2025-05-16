import useFilmFetch from "../hooks/useFilmFetch";

const FilmList = () => {
  const { films, isLoading, error } = useFilmFetch();
  return <div></div>;
};
export default FilmList;
