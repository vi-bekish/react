import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../actions';
import {  fetchRuntime, formatMoney } from '../services';
import Header from '../components/Header';
import MovieCard from '../components/Movie';
import FavoriteButton from '../components/FavoriteButton';
import Loader from "../components/Loader"

class MovieDetailsPage extends Component {
 
   state = { 
     id: null 
  };

  componentDidMount = () => {
    this.props.getGenres();
    this.getCurrentMovie(this.props, true);
  };

  componentWillReceiveProps = nextProps => {
    this.props.match.params.id !== nextProps.match.params.id ? this.getCurrentMovie(nextProps, true) : this.getCurrentMovie(nextProps);
  };

  getCurrentMovie = (props, fetchInfo = false) => {
    fetchInfo &&
      this.setState({ id: parseInt(props.match.params.id, 10) }, () => {
        this.props.getMovieDetails(this.state.id);
        this.props.getSimilarMovies(this.state.id, 1);
      });
  };

  render() {
    const { movie, isFetching, isFetched, similar, isFetchedSimilar } = this.props;
  
    return isFetched && isFetchedSimilar ? (
      <>
        <div className="container">
           <Header isFetching={isFetching} />
             <div className="movieMain" >
             <div className="movie-container">
                <div>
                  <img src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt=""/>
                </div>
                
                <div>
                   <h2>{`${movie.title} (${movie.release_date.slice(0, 4)})`} </h2>
                   <h4>{movie.tagline}</h4>
                  
                    {
                      movie.all_genres.length !== 0 && (
                      <>
                        <div className="info-row genres">
                          {movie.all_genres.join(', ')}
                        </div>
                      </>
                    )}
                   
                    <div className="info-row">
                        {fetchRuntime(movie.runtime)}
                    </div>
                   
                    {
                      movie.budget !== 0 && movie.revenue !== 0 && (
                      <> 
                        <div className="info-row">
                          <h3>Бюджет / Касові збори</h3>
                          {`${formatMoney(movie.budget)} / ${formatMoney(movie.revenue)}`}
                        </div>
                      </>
                    )}

                    { 
                      movie.credits.crew[0] !== undefined && (
                      <>
                        <div className="info-row">
                          <h3>Продюсер</h3>
                          {movie.credits.crew[0].name}
                        </div>
                      </>
                    )}

                    {
                      movie.credits.crew[1] !== undefined && (
                        <>
                          <div className="info-row">
                            <h3>Автор сценарію</h3>
                            {movie.credits.crew[1].name}
                          </div>
                        </>
                      )}
                    
                    {
                      movie.credits.cast.length > 5 && (
                      <>
                        <div className="info-row actors">
                          <h3>Актори</h3>
                            {`${movie.credits.cast
                            .slice(0, 5)
                            .map(star => star.name)
                            .join(', ')} та інші`}
                        </div>
                      </>
                      )
                    }

                    <div className="info-row overview">
                      {movie.overview}
                    </div>

                    <div className="buttons-row">
                        <FavoriteButton movie={movie} id={movie.id} />
                    </div>
                  </div>
                  </div>

                  {similar.results.length !==0 && (
                    <>
                    <h2>Вам також сподобається</h2>
                    <div className="wrapper">  
                        {similar.results.map(movie => (
                          <div className="movie-box" key={movie.original_title}>
                            <MovieCard
                              short
                              movie={movie}
                              poster_path={movie.poster_path}
                              title={movie.title}
                              all_genres={movie.all_genres}
                              id={movie.id}
                            />
                          </div>
                        ))}
                    </div>
                    </>
                  )}
                  
            </div>
           <div className="footer"></div>
        </div>  
      </>
    ) : (
      <>
        <div className="container">
          <Header isFetched={!isFetched} />
          <Loader/>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie.results,
  isFetching: state.movie.isFetching,
  isFetched: state.movie.isFetched,
  similar: state.similar,
  isFetchingSimilar: state.similar.isFetching,
  isFetchedSimilar: state.similar.isFetched,
  favorites: state.favorites,
  isFetchedGenres: state.genres.isFetched
});

const mapDispatchToProps = dispatch => ({
  getGenres: () => dispatch(actions.getGenres()),
  getMovieDetails: id => dispatch(actions.getMovieDetails(id)),
  getSimilarMovies: (id, page) => dispatch(actions.getSimilarMovies(id, page))
});

export default connect( mapStateToProps, mapDispatchToProps )(MovieDetailsPage);
