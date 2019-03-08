import React, {Component} from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Axios from 'axios';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    backgroundColor: `white`,

  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class AddMovie extends Component {
  state = {
    open: false,

  };

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };
  constructor(props) {
    super(props);
    this.addNewMovie = this.addNewMovie.bind(this);
  }
  addNewMovie(e) {
    e.preventDefault();
    var movie = {
      title: this.title.value,
      year: this.year.value,
      description: this.description.value,
      poster: this.poster.value,
      ratingFilm: this.ratingFilm.value
    };
    this.props.addMovie(movie);
  }
  onChange=(e)=>{
this.setState({
  [e.target.name]:e.target.value
})
  }
  addMoviePressed=()=>{
    Axios.post('/add-movie',{title:this.state.title,
       year:this.state.year,
       poster:this.state.poster,
       description:this.state.description}).then(res=> Axios.get('/movies').then(res => this.props.updateMovieList(res.data))).catch(err=>alert('erreur'))
  }
  
  render() {
    const {classes} = this.props;

    return ( <div className = "movie-card" >
      <Button className = "open-modal"onClick = {this.handleOpen} > + </Button>
      <Modal aria-labelledby = "simple-modal-title" aria-describedby = "simple-modal-description" open = {this.state.open}
      onClose = {this.handleClose} >
      <div style = {getModalStyle()} >
      <form className = "movie-form" >
      <h2> Add a Movie </h2> 
      <input onChange={this.onChange} type = "text"placeholder = "Title"name = "title" / >
      <input onChange={this.onChange} type = "text"placeholder = "Year" name = "year" / >
      <input onChange={this.onChange} type = "text"placeholder = "Poster"  name = "poster"/ >
      <textarea onChange={this.onChange}placeholder = "Description" name = "description">
      </textarea> 
      <input onChange={this.onChange} type = "text"placeholder = "Rating"name = "ratingFilm" / >
      <button type = "button" onClick={this.addMoviePressed}> Add Movie </button>
      </form>
      </div> 
      </Modal>
      </div>
    );
  }
}

export default AddMovie;