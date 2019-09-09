import React, { Component } from 'react';
import '../App.css';

export class SmallMovies extends Component {
    handleShowDetailsButtonPressed = movie => {
        this.props.handleShowDetails(movie);
      };
    render() {
        let movieList = this.props.movies.map(movie => {
            return (
                <li>
                    <img src={movie.Poster} alt="Movie Poster" />
                    <h4>{movie.Title}</h4>
                    <button onClick={() => this.handleShowDetailsButtonPressed(movie)}>
                    Show Details!
                    </button>
                </li>
            );
        });
        return (
            <ul>{movieList}</ul>
        );
    }
}