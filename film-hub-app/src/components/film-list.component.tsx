import useFilmFetch from "../hooks/useFilmFetch";
import FilmDetail from "./film-detail.component";
import { TfiAngleRight } from "react-icons/tfi";

const FilmList = (props: any) => {
  const { listName } = props;
  const { films = [], isLoading, error } = useFilmFetch();
  return (
    <div className="w-3/4 p-4">
      <h2 className="border-b mb-5">{listName}</h2>
      <div className="flex justify-between items-center">
        {error && <div>404 ERROR</div>}
        {isLoading && <div>Loading...</div>}
        {films && (
          <div className="grid grid-cols-5 w-max gap-10">
            {films.map((film: any) => {
              return <FilmDetail key={film.id} film={film} />;
            })}
          </div>
        )}
        <button className="cursor-pointer bg-white/20 h-max w-max py-6 rounded-xs hover:bg-white/30 duration-75 hover:scale-105">
          <TfiAngleRight className="h-10 w-max" />
        </button>
      </div>
    </div>
  );
};
export default FilmList;
