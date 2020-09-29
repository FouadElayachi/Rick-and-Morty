import React, {useContext, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import {Store} from "../store/store";
import {fetchData} from "../actions/fetchData";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 800,
        height: 1000
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

const EpisodesList: React.FC = () => {
    const classes = useStyles();
    const { state, dispatch } = useContext(Store);

    useEffect(() => {
        state.episodes.length === 0 && fetchData(dispatch);
    })

    return(
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Episodes list</ListSubheader>
                </GridListTile>
                {state.episodes.map((episode: any) => (
                    <GridListTile key={episode.id}>
                        <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
                        <GridListTileBar
                            title={episode.name}
                            subtitle={<span>Season: {episode.season}</span>}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}

export default EpisodesList;