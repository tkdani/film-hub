import useFilmFetch from "../hooks/useFilmFetch";
import FilmDetail from "./film-detail.component";

const MoviesPage = (props: any) => {
  const { filmType } = props;
  const { films = [], isLoading, error } = useFilmFetch({ filmType });

  return (
    <div className="p-10 w-full ">
      {error && <div>404 ERROR</div>}
      {isLoading && <div>Loading...</div>}
      {films && (
        <div className="grid grid-cols-7 gap-5">
          {films.map((film: any) => {
            return <FilmDetail key={film.id} film={film} />;
          })}
        </div>
      )}
    </div>
  );
};
export default MoviesPage;
