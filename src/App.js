import React from "react";
import "./App.css";
import MovieList from "./Components/MovieList/MovieList";
import SearchBar from "./Components/SearchBar/SearchBar";
import AddnewMovie from "./Components/AddnewMovie/AddnewMovie";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <MovieList />
      <AddnewMovie />
    </div>
  );
}

export default App;
