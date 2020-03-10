import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import MovieList from "./Components/MovieList/MovieList";
import SearchBar from "./Components/SearchBar/SearchBar";
import AddnewMovie from "./Components/AddnewMovie/AddnewMovie";
import Description from "./Components/Description/Description";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchBar />
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route
            exact
            path="/description/:id"
            render={props => <Description {...props} />}
          />
        </Switch>
        <AddnewMovie />
      </BrowserRouter>
    </div>
  );
}

export default App;
