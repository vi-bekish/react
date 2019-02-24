import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../actions';
import MovieCards from '../components/MoviesList';
import Header from '../components/Header';
import Loader from "../components/Loader";

class MainPage extends Component {
  
    state = {
      page: null
    };

  componentDidMount = () => {
    this.props.getGenres();
    this.getCurrentPage(this.props);
  };

  componentWillReceiveProps = nextProps => {
    this.props.match.params.page !== nextProps.match.params.page && this.getCurrentPage(nextProps);
  };

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   return this.props.favorites === nextProps.favorites;
  // }

  getCurrentPage = props => {
    this.setState({ page: props.match.params.page === undefined ? 1 : parseInt(props.match.params.page, 10) }, () => {
      this.props.getPopularMovies(this.state.page);
    });
  };

  render() {
    const {
      movies: { results: movies },
      movies: { total_results: pages },
      isFetched,
      isFetchedGenres
    } = this.props;
    const { page } = this.state;

    return isFetched && isFetchedGenres ? (
      <>
        <div className="container">
          <Header />
          <MovieCards movies={movies} pages={pages} page={page} start="/" next={`/${page + 1}`} back={`/${page - 1}`} />
          <div className="footer"></div>
        </div>
      </>
    ) : (
      <>
        <div className="container">
          <Header isFetched={!isFetched} isFetchedGenres={!isFetchedGenres} />
          <Loader/>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  isFetching: state.movies.isFetching,
  isFetched: state.movies.isFetched,
  isFetchedGenres: state.genres.isFetched
});

const mapDispatchToProps = dispatch => ({
  getPopularMovies: page => dispatch(actions.getPopularMovies(page)),
  getGenres: () => dispatch(actions.getGenres())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
