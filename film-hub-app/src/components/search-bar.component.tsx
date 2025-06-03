import { NavLink } from "react-router";

const SearchBar = () => {
  return (
    <nav className="bg-green-800/50 border-1 rounded flex">
      <li className="inline-block p-2 border-r-1 hover:bg-green-800/80">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="inline-block relative p-2 border-r-1 cursor-pointer group">
        Movies
        <ol className="hidden list-none absolute w-max bg-black rounded border-1 top-10 left-0 group-hover:block">
          <li className="px-2 py-1 hover:bg-green-800/80 rounded">
            <NavLink to={"/movies/popular"}>Popular</NavLink>
          </li>
          <li className="px-2 py-1 hover:bg-green-800/80 rounded">
            <NavLink to={"/movies/now_playing"}>Now Playing</NavLink>
          </li>
          <li className="px-2 py-1 hover:bg-green-800/80 rounded">
            <NavLink to={"/movies/upcoming"}>Upcoming</NavLink>
          </li>
          <li className="px-2 py-1 hover:bg-green-800/80 rounded">
            <NavLink to={"/movies/top_rated"}>Top Rated</NavLink>
          </li>
        </ol>
      </li>
      <li className="inline-block relative p-2 border-r-1 cursor-pointer group">
        Series
        <ol className="hidden list-none absolute w-max bg-black rounded border-1 top-10 left-0 group-hover:block">
          <li className="px-2 py-1 hover:bg-green-800/80 rounded">
            <NavLink to={"/movies/popular"}>Popular</NavLink>
          </li>
          <li className="px-2 py-1 hover:bg-green-800/80 rounded">
            <NavLink to={"/movies/airing_today"}>Airing Today</NavLink>
          </li>
          <li className="px-2 py-1 hover:bg-green-800/80 rounded">
            <NavLink to={"/movies/on_tv"}>On Tv</NavLink>
          </li>
          <li className="px-2 py-1 hover:bg-green-800/80 rounded">
            <NavLink to={"/movies/top_rated"}>Top Rated</NavLink>
          </li>
        </ol>
      </li>
    </nav>
  );
};
export default SearchBar;
