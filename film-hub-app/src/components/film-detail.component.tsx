const FilmDetail = (props: any) => {
  const { film } = props;
  return (
    <div className="flex flex-col">
      <div>
        <img src={`https://image.tmdb.org/t/p/w154${film.poster_path}`} />
      </div>
      <div>
        <div className="font-title">{film.title}</div>
        <div>{film.popularity}</div>
      </div>
    </div>
  );
};
export default FilmDetail;
