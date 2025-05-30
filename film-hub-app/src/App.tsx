import { Outlet } from "react-router";
import SearchBar from "./components/search-bar.component";

const App = () => {
  return (
    <div className="min-h-screen bg-linear-180 from-black via-green-950 to-green-900 text-white p-1">
      <SearchBar />
      <Outlet />
    </div>
  );
};
export default App;
