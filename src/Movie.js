import React, {
  Component
} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rater from 'react-rater'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Movie extends Component {

  render() {
    return (

      <div className = "movie-card" >

      <Card >
      <CardMedia style = { { paddingTop: '56.25%' }}image = {
        this.props.meta.poster
      }title = {
        this.props.meta.title}/>
       <CardContent >
      <Typography gutterBottom variant = "h5" component = "h2" > {
        this.props.meta.title
      } </Typography>
       <Typography component = "p" > {this.props.meta.year}
</Typography> 
      <Typography gutterBottom variant = "h5"component = "h2" >

      <Rater total = { 5 }rating = {this.props.meta.ratingFilm}/>

      </Typography> 
      </CardContent>
<button > <Link to="/EditMovie">Home</Link>edit</button>
      </Card>     
       </div>





    )
  }
}

export default Movie;