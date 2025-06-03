import { useParams } from "react-router";
import FilmListItem from "../components/film-list-item.component";
import useFilmFetch from "../hooks/useFilmFetch";

const MoviesPage = () => {
  const { type } = useParams();
  const { films, isLoading, error } = useFilmFetch({
    type: "movie/type",
    page: 1,
  });
  return (
    <div className="flex flex-col items-center px-10">
      <h1 className="">{type} movies</h1>
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
