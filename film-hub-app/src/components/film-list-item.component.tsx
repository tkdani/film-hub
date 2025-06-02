import type { Film } from "../types/filmType";

interface ListItem {
  film: Film;
}

const FilmListItem = (props: ListItem) => {
  const { film } = props;
  return (
    <div className="w-40 flex flex-col hover:scale-105 duration-75">
      <div className="h-60 border-1 border-b-0 rounded-tr-xs rounded-tl-xs">
        {film.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w342${film.poster_path}`}
            alt={film.title}
            className=" h-full w-full object-cover rounded-tr-xs rounded-tl-xs"
          />
        ) : (
          <span className="text-xs text-white">No image</span>
        )}
      </div>
      <div className="bg-white/50 flex flex-col justify-between h-20 border-1 border-t-0 rounded-br-xs rounded-bl-xs p-1">
        <span className="text-pretty w-40">{film.title}</span>
        <div className="flex flex-row items-center justify-between">
          <span className="italic text-xs">
            {film.vote_average.toFixed(1)} / 10 ({film.vote_count})
          </span>
          <span className="italic text-xs">
            {film.release_date.slice(0, 4)}
          </span>
        </div>
      </div>
    </div>
  );
};
export default FilmListItem;
