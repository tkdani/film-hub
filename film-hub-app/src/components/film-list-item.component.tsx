import type { Film } from "../types/filmType";

interface ListItem {
  film: Film;
}

const FilmListItem = (props: ListItem) => {
  const { film } = props;
  return (
    <div className="flex flex-col w-max hover:scale-110 duration-75">
      <div className="bg-black border-1 border-b-0 rounded-tr-xs rounded-tl-xs flex items-center justify-center overflow-hidden">
        {film.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w185${film.poster_path}`}
            alt={film.title}
          />
        ) : (
          <span className="text-xs text-white">No image</span>
        )}
      </div>
      <div className=" bg-white/50 flex flex-row justify-between h-16 border-1 border-t-0 rounded-br-xs rounded-bl-xs p-1">
        <div className="flex flex-col">
          <span>{film.title}</span>
          <span className="italic text-xs">
            {film.vote_average.toFixed(1)} / 10 ({film.vote_count})
          </span>
        </div>
        <span className="italic ">{film.release_date.slice(0, 4)}</span>
      </div>
    </div>
  );
};
export default FilmListItem;
