import React, { Component } from 'react';
import Pagination from './Pagination';
import Movie from './Movie';
import PropTypes from 'prop-types';

class MoviesList extends Component {
  render() {
    const { movies, pages, page, start, next, back } = this.props;

    return (
      <>
      <div className="wrapper">
        {movies.map(movie => (
          <div className="movie-box" key={movie.original_title}>
            <Movie
              id={movie.id}
              movie={movie}
              poster_path={movie.poster_path}
              title={movie.title}
              all_genres={movie.all_genres}
              overview={movie.overview}
            />
          </div>
        ))}
        </div>
        <Pagination pages={pages} page={page} start={start} next={next} back={back} />
      </>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  pages: PropTypes.number,
  page: PropTypes.number,
  start: PropTypes.string,
  next: PropTypes.string,
  back: PropTypes.string,
};

export default MoviesList;
