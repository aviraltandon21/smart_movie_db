import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { Grid,Grow,Typography } from '@material-ui/core';
import useStyles from './styles';

// const infoCards = [
//     { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
//     { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
//     { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
//   ];

const MovieCards = ({movies,activeMovie}) => {
    const classes = useStyles();

    if(!movies.length) {
        return (
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                <div style={{width: '60px'}}></div>
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                        <div className={classes.card} style={{backgroundColor: '#006A4E'}}>
                            <Typography variant="h5">Latest Movies</Typography>
                           <Typography variant="h6"><center><strong>Get details of some latest movies.</strong></center></Typography>
                            <Typography variant="h6" component="h6">Try saying: <br /> <i>Show me latest movies</i></Typography>
                        </div>
                        </Grid>
                        <div style={{width: '60px'}}></div>
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                        <div className={classes.card} style={{backgroundColor: '#8A2BE2'}}>
                            <Typography variant="h5">Movie by names</Typography>
                           <Typography variant="h6"><center><strong>Search movie by their name</strong></center></Typography>
                            <Typography variant="h6" component="h6">Try saying: <br /> <i>Show me details of movie (any movie name).<br/>For ex - Show me details of movie avengers</i></Typography>
                        </div>
                        </Grid>
                        <div style={{width: '60px'}}></div>
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                        <div className={classes.card} style={{backgroundColor: '#E32636'}}>
                            <Typography variant="h5">Top-rated movies</Typography>
                           <Typography variant="h6"><center><strong>Get details of some top-rated movies.</strong></center></Typography>
                            <Typography variant="h6" component="h6">Try saying: <br /> <i>Show me top rated movies</i></Typography>
                        </div>
                        </Grid>
                    
                </Grid>
            </Grow>
        )
    }


    return(
        <Grow in>

            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {movies.map((movie,i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                <MovieCard movie={movie} activeMovie={activeMovie} i={i}/>
                </Grid>
            ))}
            </Grid>
            
        </Grow>
    )
}

export default MovieCards;
