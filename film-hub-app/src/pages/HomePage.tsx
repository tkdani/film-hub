import FilmList from "../components/film-list.component";
import SearchBar from "../components/search-bar.component";

const HomePage = () => {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-black via-[#0f0f0f] to-green-900 text-white p-1">
      <SearchBar />
      <div className="px-10">
        <FilmList listName="Top 10 popular movies" filmType="movie/popular" />
      </div>
    </div>
  );
};
export default HomePage;
