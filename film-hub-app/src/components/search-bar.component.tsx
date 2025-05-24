import { Link } from "react-router-dom";
import MoviePage from "../pages/MoviePage";

const SearchBar = () => {
  return (
    <div className="bg-green-950/80 flex flex-row items-center border-1">
      <div className="">
        <button className="py-2 px-4 hover:bg-green-900/80 duration-100 border-r-1 cursor-pointer">
          Home
        </button>
        <Link className="py-2 px-4 hover:bg-green-900 duration-100 border-r-1 cursor-pointer">
          Movies
        </Link>
        <button className="py-2 px-4 hover:bg-green-900 duration-100 border-r-1 cursor-pointer">
          Series
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
