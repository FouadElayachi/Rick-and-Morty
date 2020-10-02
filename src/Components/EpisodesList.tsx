import React, {useContext, useEffect, FunctionComponent} from "react";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Store} from "../store/store";
import {fetchData} from "../actions/fetchData";
import {toggleFav} from "../actions/toggleFav";

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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
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
                    <GridListTile key={episode.id}>
                        <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
                        <GridListTileBar
                            title={episode.name}
                            subtitle={<span>Season: {episode.season} | Episode: {episode.number}</span>}
                            actionIcon={
                                <IconButton style={style} onClick={() => toggleFav(episode, dispatch, state)} aria-label="Add to favourites list" className={classes.icon}>
                                    <FavoriteIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                )})
    )
}

export default EpisodesList;