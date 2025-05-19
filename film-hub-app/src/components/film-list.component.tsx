import useFilmFetch from "../hooks/useFilmFetch";
import FilmDetail from "./film-detail.component";

const FilmList = (props: any) => {
  const { listName } = props;
  const { films = [], isLoading, error } = useFilmFetch();
  return (
    <div className="w-3/4 p-4">
      <h2 className="border-b">{listName}</h2>
      {error && <div>404 ERROR</div>}
      {isLoading && <div>Loading...</div>}
      {films && (
        <div className="grid grid-cols-5 w-max gap-4">
          {films.map((film: any) => {
            return <FilmDetail key={film.id} film={film} />;
          })}
        </div>
      )}
    </div>
  );
};
export default FilmList;
