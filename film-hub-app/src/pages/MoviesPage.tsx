import FilmListItem from "../components/film-list-item.component";
import useFilmFetch from "../hooks/useFilmFetch";

const MoviesPage = () => {
  const { films, isLoading, error } = useFilmFetch({ type: "movie/popular" });
  return (
    <div>
      <h1>Movies page</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>error: {error}</div>}
      {films && (
        <div className="grid grid-cols-5 gap-4">
          {films.map((film, index) => {
            return <FilmListItem key={index} film={film} />;
          })}
        </div>
      )}
    </div>
  );
};
export default MoviesPage;
