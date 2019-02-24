import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import PropTypes from 'prop-types';

class Movie extends Component {

  render() {
    const {  id, all_genres, movie, poster_path, title } = this.props;

    return (
        <div className="movie-item" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w300${poster_path})`}} >
            <div className="movie-details">

              <h3>{title}</h3>

              <div className="genres-row"variant="subheading">
                {all_genres.join(', ')}
              </div>

            <div className="buttons-row">
              <FavoriteButton movie={movie} id={id} />
              <div className="btn"><Link to={`/movie/${id}`}>Подробиці</Link></div>
            </div>
          </div>
            
        </div>
    );
  }
}

Movie.propTypes = {
  id: PropTypes.number,
  all_genres: PropTypes.array.isRequired,
  movie: PropTypes.object.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default Movie;
