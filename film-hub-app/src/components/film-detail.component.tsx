const FilmDetail = (props: any) => {
  const { film } = props;
  return (
    <div className="flex flex-col hover:scale-110 cursor-pointer duration-100">
      <div>
        <img
          className="rounded-tl-xs rounded-tr-xs "
          src={`https://image.tmdb.org/t/p/w185${film.poster_path}`}
        />
      </div>
      <div className="p-2 bg-white/40 rounded-br-sm rounded-bl-sm h-20 flex flex-col justify-between">
        <div className="font-title text-md max-w-40">{film.title}</div>
        <div className="flex justify-between text-white/50 text-xs italic">
          <span>
            {film.vote_average.toFixed(1)} / 10 ({film.vote_count})
          </span>
          <span></span>
          <span>{film.release_date.substring(0, 4)}</span>
        </div>
      </div>
    </div>
  );
};
export default FilmDetail;
