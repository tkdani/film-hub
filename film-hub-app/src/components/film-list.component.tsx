import { useEffect, useState } from "react";
import useFilmFetch from "../hooks/useFilmFetch";
import FilmDetail from "./film-detail.component";
import { TfiAngleRight } from "react-icons/tfi";
import { TfiAngleLeft } from "react-icons/tfi";

const FilmList = (props: any) => {
  const { listName, filmType } = props;
  const { films = [], isLoading, error } = useFilmFetch({ filmType });
  const [visibleFilms, setVisibleFilms] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [onFirstSet, setOnFirstSet] = useState(true);

  useEffect(() => {
    if (onFirstSet && films) setVisibleFilms(films.slice(0, 5));
    else if (films) setVisibleFilms(films.slice(5, 10));
  }, [films, onFirstSet]);

  const handleOnNextFilmsClick = () => {
    setOnFirstSet(!onFirstSet);
  };

  return (
    <div className=" p-4 w-full">
      <h2 className="border-b mb-5 p-2 text-2xl w-full">{listName}</h2>
      <div className="flex justify-between items-center px-10">
        {error && <div>404 ERROR</div>}
        {isLoading && <div>Loading...</div>}
        {films && (
          <>
            <div className="flex flex-wrap gap-12">
              {visibleFilms?.map((film: any, index: number) => {
                return (
                  <div key={index} className="relative">
                    <span className="absolute -left-7 font-bold text-3xl font-ranking">
                      {onFirstSet ? index + 1 : index + 1 + visibleCount}
                    </span>
                    <FilmDetail key={film.id} film={film} />
                  </div>
                );
              })}
            </div>
            <button
              onClick={handleOnNextFilmsClick}
              className="cursor-pointer bg-white/20 h-max w-max py-6 rounded-xs hover:bg-white/30 duration-75 hover:scale-105 ml-10"
            >
              {onFirstSet ? (
                <TfiAngleRight className="h-10 w-max" />
              ) : (
                <TfiAngleLeft className="h-10 w-max" />
              )}
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default FilmList;
