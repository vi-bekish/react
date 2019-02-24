import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../actions';
import MovieCards from '../components/MoviesList';
import Header from '../components/Header';
import Loader from "../components/Loader"
import { fetchURL } from '../services';

class SearchResultsPage extends Component {
 
     state = {
      page: null,
      movie: ''
    };

  componentDidMount = () => {
    this.getCurrentPage(this.props, false);
    this.props.genres === undefined && this.props.getGenres();
  };

  componentWillReceiveProps = nextProps => {
    this.getCurrentPage(this.props, true, nextProps);
  };

  getCurrentPage = (props, update, nextProps) => {
    const updater = update
      ? fetchURL(props, 'page') !== fetchURL(nextProps, 'page') || fetchURL(props, 'movie') !== fetchURL(nextProps, 'movie')
      : true;
    const uniProps = nextProps === undefined ? props : nextProps;

    updater &&
      this.setState(
        {
          page: fetchURL(uniProps, 'page') === undefined ? 1 : parseInt(fetchURL(uniProps, 'page'), 10),
          movie: fetchURL(uniProps, 'movie')
        },
        () => {
          this.props.getMovieSearchResults(this.state.movie, this.state.page);
        }
      );
  };

  render() {
    const {
      search: { total_pages: pages },
      search: { results: movies },
      isFetched,
      isFetchedGenres
    } = this.props;
    const { page, movie } = this.state;

    return isFetched && isFetchedGenres ? (
      <>
        <div class="container">
          <Header />
          <MovieCards
            movies={movies}
            pages={pages}
            page={page}
            start={{ pathname: '/search', search: `movie=${movie}` }}
            next={{ pathname: '/search', search: `page=${page + 1}&movie=${movie}` }}
            back={{ pathname: '/search', search: `page=${page - 1}&movie=${movie}` }}
          />
        
        {movies.length === 0 && (
          <div className="alert">Кіна не буде :(</div>
        )}
        </div>
      </>
    ) : (
      <>
        <div class="container">
          <Header isFetched={!isFetched} isFetchedGenres={!isFetchedGenres} />
          <Loader/>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
  isFetching: state.search.isFetching,
  isFetched: state.search.isFetched,
  isFetchedGenres: state.genres.isFetched
});

const mapDispatchToProps = dispatch => ({
  getMovieSearchResults: (query, page) => dispatch(actions.getMovieSearchResults(query, page)),
  getGenres: () => dispatch(actions.getGenres())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage);
