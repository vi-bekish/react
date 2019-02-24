import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from "./containers/MainPage";
import MovieDetailsPage from "./containers/MovieDetailsPage";
import SearchResultsPage from "./containers/SearchResultsPage";
import FavoritesMoviesPage from "./containers/FavoritesMoviesPage";


const Root = () => {
  return(
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/favorites/page/:page" component={FavoritesMoviesPage} />
        <Route path="/search" component={SearchResultsPage} />
        <Route path="/movie/:id" component={MovieDetailsPage} />
        <Route path="/:page" component={MainPage} />
      </Switch>
    </>
  )
}

export default Root;