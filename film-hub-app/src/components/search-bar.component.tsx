import { NavLink } from "react-router";

const SearchBar = () => {
  const pages = ["Home", "Movies", "Series"];
  return (
    <div className="bg-green-800/50 border-1 flex">
      {pages.map((page) => {
        return (
          <NavLink
            to={page === "Home" ? "/" : `/${page}`}
            className={({ isActive }) => {
              return isActive
                ? "bg-green-900/80 py-2 px-3 border-r-1"
                : "py-2 px-3 border-r-1 hover:bg-green-900/80";
            }}
          >
            {page}
          </NavLink>
        );
      })}
    </div>
  );
};
export default SearchBar;
