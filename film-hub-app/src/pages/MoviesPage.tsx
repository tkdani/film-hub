import FilmListItem from "../components/film-list-item.component";
import useFilmFetch from "../hooks/useFilmFetch";

const MoviesPage = () => {
  const { films, isLoading, error } = useFilmFetch();
  return (
    <div>
      <h1>Movies page</h1>
      {films && <FilmListItem film={films[0]} />}
    </div>
  );
};
export default MoviesPage;
