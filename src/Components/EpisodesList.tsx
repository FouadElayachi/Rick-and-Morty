import React, {useContext, useEffect} from "react";
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

//this interface should be moved from this file
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
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            width: 800,
            height: 1000,
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
    }),
);

const EpisodesList: React.FC = () => {
    const classes = useStyles();
    const { state, dispatch } = useContext(Store);

    useEffect(() => {
        state.episodes.length === 0 && fetchData(dispatch);
    })

    console.log(state.favourites);

    let style = {};
    return(
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Episodes list</ListSubheader>
                </GridListTile>
                {state.episodes.map((episode: IEpisode) => {
                    state.favourites.includes(episode) ? style={color: 'orange'}: style={}
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
                )})}
            </GridList>
        </div>
    )
}

export default EpisodesList;