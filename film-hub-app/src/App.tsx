import FilmList from "./components/film-list.component";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0f0f0f] to-green-900 text-white">
      <FilmList listName="Top 10 popular movies" />
    </div>
  );
}

export default App;
