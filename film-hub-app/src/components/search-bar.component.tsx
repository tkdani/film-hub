const SearchBar = () => {
  return (
    <div className="bg-green-950/80 flex flex-row items-center border-1">
      <div className="">
        <button className="py-2 px-4 hover:bg-green-900/80 duration-100 border-r-1">
          Home
        </button>
        <button className="py-2 px-4 hover:bg-green-900 duration-100 border-r-1">
          Movies
        </button>
        <button className="py-2 px-4 hover:bg-green-900 duration-100 border-r-1">
          Series
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
