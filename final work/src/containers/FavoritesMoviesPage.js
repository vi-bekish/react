import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../actions';
import MovieCards from '../components/MoviesList';
import Header from '../components/Header';
import Loader from "../components/Loader"
import { getTotalPages, sliceMoviesToPages } from '../services';

class FavoritesMoviesPage extends Component {
    
  state = {
      page: null,
      pages: null,
      movies: [],
      doneslicing: false
    };

  componentDidMount = () => {
    this.getCurrentPage(this.props);
    this.props.genres === undefined && this.props.getGenres();
  };

  componentWillReceiveProps = nextProps => {
    (this.props.match.params.page !== nextProps.match.params.page || this.props.favorites.length !== nextProps.favorites.length) &&
      this.getCurrentPage(nextProps);
    this.props.match.params.page !== nextProps.match.params.page && window.scrollTo(0, 0);
    this.props.favorites.length === nextProps.favorites.length && window.scrollTo(0, 0);
  };

  getCurrentPage = props => {
    this.setState(
      {
        page: props.match.params.page === undefined ? 1 : parseInt(props.match.params.page, 10),
        pages: getTotalPages(props.favorites.length)
      },
      () => {
        this.setState({ 
          movies: sliceMoviesToPages(props.favorites, this.state.page), 
          doneslicing: true });
      }
    );
  };

  render() {
    const { isFetchedGenres } = this.props;
    const { page, pages, movies, doneslicing } = this.state;

    return isFetchedGenres && doneslicing ? (
      <>
        <div className="container">
          <Header />
          {movies.length !== 0 ? (
            <MovieCards
              movies={movies}
              pages={pages}
              page={page}
              start="/favorites/page/1"
              next={`/favorites/page/${page + 1}`}
              back={`/favorites/page/${page - 1}`}
            />
          ) : (
            <>
              <div className="alert">Ви ще не маєте вподобаних фільмів</div>
              {page !== 1 && <Redirect to={`/favorites/page/${pages}`} />}
            </>
          )}
        </div>
      </>
    ) : (
      <>
        <div className="container">
          <Header isFetched={!(movies.length !== 0)} isFetchedGenres={!isFetchedGenres} />
          <Loader/>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie,
  isFetching: state.movie.isFetching,
  genres: state.genres.genres,
  isFetchedGenres: state.genres.isFetched,
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  getMovieDetails: id => dispatch(actions.getMovieDetails(id)),
  getGenres: () => dispatch(actions.getGenres())
});

export default connect(
mapStateToProps,
  mapDispatchToProps
)(FavoritesMoviesPage);
