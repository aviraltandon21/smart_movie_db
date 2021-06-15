import React from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import useStyles from './styles';
import classNames from 'classnames';

const MovieCard = ({movie:{original_title,overview,release_date,poster_path},i,activeMovie}) => {
    const classes = useStyles();
    return(
        <Card className={classNames (classes.card,activeMovie===i? classes.activeCard: null)}>
            <CardActionArea>
            <CardMedia className={classes.media} image={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(release_date)).toDateString()}</Typography>
        
                </div>
                <Typography className={classes.title} gutterBottom variant="h5">{original_title}</Typography>
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{overview}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
               
                <Typography variant="h5" color="textSecondary">{i+1}</Typography>
            </CardActions>
        </Card>
    )
}

export default MovieCard
