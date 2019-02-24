import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../actions';
import PropTypes from 'prop-types';

class FavoriteButton extends Component {
  shouldComponentUpdate(nextProps) {
    const addFavorite =
      nextProps.favorites.some(movie => movie.id === nextProps.id) === true &&
      this.props.favorites.some(movie => movie.id === this.props.id) === false;

    const removeFavorite =
      nextProps.favorites.some(movie => movie.id === nextProps.id) === false &&
      this.props.favorites.some(movie => movie.id === this.props.id) === true;

    return removeFavorite === true ? removeFavorite : addFavorite;
  }

  render() {
    const { movie, id, favorites, addMovieToFavorites, removeMovieFromFavorites } = this.props;

    return favorites.some(favmovie => favmovie.id === id) ? (
      <button className="fav-button remove" onClick={() => removeMovieFromFavorites(movie)}>
        Більше не подобається
      </button>
    ) : (
      <button className="fav-button add" onClick={() => addMovieToFavorites(movie)}>
        Вподобати
      </button>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  addMovieToFavorites: id => dispatch(actions.addMovieToFavorites(id)),

  removeMovieFromFavorites: id => dispatch(actions.removeMovieFromFavorites(id))
});


FavoriteButton.propTypes = {
  id: PropTypes.number, 
  favorites:  PropTypes.array.isRequired,
  addMovieToFavorites: PropTypes.func.isRequired,
  removeMovieFromFavorites: PropTypes.func.isRequired,

};


export default connect( mapStateToProps, mapDispatchToProps)(FavoriteButton);
