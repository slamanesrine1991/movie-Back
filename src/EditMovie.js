import React, { Component } from 'react'

class EditMovie extends Component {
  render() {
    return (
      <div>
        <h1>Edit movie</h1>
        <form className = "movie-form" >
      <h2> Add a Movie </h2> 
      <input onChange={this.onChange} type = "text"placeholder = "Title"name = "title" / >
      <input onChange={this.onChange} type = "text"placeholder = "Year" name = "year" / >
      <input onChange={this.onChange} type = "text"placeholder = "Poster"  name = "poster"/ >
      <textarea onChange={this.onChange}placeholder = "Description" name = "description">
      </textarea> 
      <input onChange={this.onChange} type = "text"placeholder = "Rating"name = "ratingFilm" / >
      <button type = "button" onClick={this.addMoviePressed}> Edit Movie </button>
      </form>
      </div>
    )
  }
}

export default EditMovie
