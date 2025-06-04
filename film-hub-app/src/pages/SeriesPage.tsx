import { useParams } from "react-router";
import FilmListItem from "../components/film-list-item.component";
import useFilmFetch from "../hooks/useFilmFetch";
import { useState } from "react";

const SeriesPage = () => {
  const { type } = useParams();
  const [page, setPage] = useState(1);
  const { films, isLoading, error } = useFilmFetch({
    type: `tv/${type}`,
    page: page,
  });
  return (
    <div className="flex flex-col items-center px-10">
      <h1 className="">{type} series</h1>
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
export default SeriesPage;
