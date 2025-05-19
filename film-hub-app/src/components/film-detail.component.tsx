const FilmDetail = (props: any) => {
  const { film } = props;
  return (
    <div className="flex flex-col bg-black/40">
      <div>
        <img src={`https://image.tmdb.org/t/p/w154${film.poster_path}`} />
      </div>
      <div>
        <div className="font-title">{film.title}</div>
        <span>{film.vote_average.toFixed(1)} / 10</span>
      </div>
    </div>
  );
};
export default FilmDetail;
