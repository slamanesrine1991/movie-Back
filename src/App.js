import React, { Component } from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
//import Header from './Header';
import Movie from "./Movie";
import axios from 'axios';
//import { initialMovies } from "./movies";

import AddMovie from "./AddMovie";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      filterValue: "",
      rating: 0,
      ratingFilter: ""
    };

    this.addMovieToGallery = this.addMovieToGallery.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
 componentDidMount(){
 axios.get('/movies').then(res=>this.setState({movies:res.data}))
  .catch(err=>console.log('erreur'));
 }
 updateMovieList=(movie)=>{
   this.setState({movies:movie})
 }
  render() {
    let tab = this.state.movies;
    if (this.state.filterValue != "") {
      {
        tab = this.state.movies.filter(x =>
          x.title.toLowerCase().includes(this.state.filterValue)
        );
      }
    }
    if (this.state.rating != 0) {
      {
        tab = this.state.movies.filter(a => a.ratingFilm == this.state.rating);
      }
    }

    return (
      <div className="App">
        <button className="accueil" onClick={this.handleRefresh}>
         
          Accueil
        </button>
        <Rater
          total={5}
          rating={this.state.rating}
          onRate={rating => {
            this.setState({
              rating: rating.rating
            });
          }}
        />
        <input type="text" placeholder="Search" onChange={this.handleChange} />
        <h1> Cartoon App </h1>
        <div className="movies">
          
          {Object.keys(tab).map(key => (
            <Movie key={key} meta={tab[key]} />
          ))}
          <AddMovie updateMovieList={(value)=>{this.updateMovieList(value)}} />
        </div>
      </div>
    );
  }

  handleRefresh = () => {
    this.setState({
      movies: [],
      filterValue: "",
      rating: 0
    });
  };

  handleChange(event) {
    this.setState({
      filterValue: event.target.value
    });
  }

  addMovieToGallery(movie) {
    var currentMovies = [...this.state.movies, movie];

    this.setState({
      movies: currentMovies
    });
  }
}
export default App;
