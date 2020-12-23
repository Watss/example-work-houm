import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles( (theme) => ({
    root: {
      maxWidth: 345,
      marginBottom: theme.spacing(2),
      borderRadius: '10px'
    },
    media: {
      height: 200,
      width : 200,
    },
    centerMedia:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  })
);

const CardPokeComponent = ({pokemon}) =>  {
  const classes = useStyles();
  console.log(pokemon);
  return (
    <Card className={classes.root}>
      <CardActionArea >
        <div className={classes.centerMedia}>
          <CardMedia 
            className={classes.media}
            image={pokemon.sprites.other.dream_world.front_default}
            title="Contemplative Reptile"
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardPokeComponent;