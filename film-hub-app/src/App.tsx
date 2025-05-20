import FilmList from "./components/film-list.component";

function App() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-black via-[#0f0f0f] to-green-900 text-white">
      <div className="px-10">
        <FilmList listName="Top 10 popular movies" />
      </div>
    </div>
  );
}

export default App;
