import React, {FunctionComponent} from "react";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Card, CardActionArea, CardContent, CardMedia, CardActions, Grid} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

interface IEpisode {
    airdate: string,
    airstamp: string,
    airtime: string,
    id: number,
    image: { medium: string, original: string },
    name: string,
    number: number,
    runtime: number,
    season: number,
    summary: string,
    url: string
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            maxWidth: 345,
        },
        icon: {
            color: 'rgba(O, O, O, 0.54)',
        },
        img: {
            width: 500
        }
    }),
);

const EpisodesList: FunctionComponent = (props:any) => {
    const { episodes, favourites, toggleFav, state, dispatch } = props;
    const classes = useStyles();
    let style = {};
    return(
            episodes.map((episode: IEpisode) => {
                favourites.includes(episode) ? style={color: 'orange'}: style={}
                return(
                    <Grid key={episode.id} item>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.img}
                                    component="img"
                                    alt={`Rick and Morty ${episode.name}`}
                                    height="140"
                                    image={episode.image.medium}
                                    title={`Rick and Morty ${episode.name}`}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {episode.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {<span>Season: {episode.season} | Episode: {episode.number}</span>}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <IconButton style={style} onClick={() => toggleFav(episode, dispatch, state)} aria-label="Add to favourites list" className={classes.icon}>
                                    <FavoriteIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                )})
    )
}

export default EpisodesList;