import React, { Component } from 'react';
import '../App.css';
import {SmallMovies} from './SmallMovies'

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      focusedmovie: {}
    };
  }

  componentDidMount() {
    this.populateMovies();
  }

  populateMovies() {
    fetch("http://www.omdbapi.com/?s=thor&apikey=c10d7bf7")
    .then(response => response.json())
    .then(json => {
      this.setState({
        movies: json.Search,
      });
    });
  }


  handleShowDetails = movie => {
    this.getMovieDetails(movie);
  }
  
  getMovieDetails = movie => {
    fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=c10d7bf7`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        focusedmovie: json
      })
    })
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.state.focusedmovie.Poster} alt="Movie Poster"/>
          <h1>{this.state.focusedmovie.Title}</h1>
          <h3>Released: {this.state.focusedmovie.Released}</h3>
          <h3>Genre: {this.state.focusedmovie.Genre}</h3>
          <h3>Director: {this.state.focusedmovie.Director}</h3>
          <h3>Writer: {this.state.focusedmovie.Writer}</h3>
          <h3>Actors: {this.state.focusedmovie.Actors}</h3>
          <h3>Runtime: {this.state.focusedmovie.Runtime}</h3>
          <h3>Plot: {this.state.focusedmovie.Plot}</h3>
          <h3>Awards: {this.state.focusedmovie.Awards}</h3>
          <h3>Box Office: {this.state.focusedmovie.BoxOffice}</h3>
          <h3>Website: <a href={this.state.focusedmovie.Website}>{this.state.focusedmovie.Website}</a></h3>
        </div>
        <hr />
        <div>
        <SmallMovies handleShowDetails={this.handleShowDetails} movies={this.state.movies} />
        </div>
        </div>
    );
  }
}
