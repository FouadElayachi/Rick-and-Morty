import React, {useContext, useEffect, lazy, Suspense} from "react";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import {Store} from "../store/store";
import {fetchData} from "../actions/fetchData";
import {toggleFav} from "../actions/toggleFav";
import CircularStatic from "../Components/CircularStatic";


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
            width: 1000,
            height: 1000,
        }
    }),
);

const EpisodesList = lazy<any>(() => import('../Components/EpisodesList'));

const HomePage: React.FC = () => {
    const classes = useStyles();
    const { state, dispatch } = useContext(Store);

    useEffect(() => {
        state.episodes.length === 0 && fetchData(dispatch);
    })

    console.log(state.favourites);

    const props = {
        episodes: state.episodes,
        favourites: state.favourites,
        toggleFav: toggleFav,
        dispatch: dispatch,
        state: state
    };

    return(
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Episodes list</ListSubheader>
                </GridListTile>
                <Suspense fallback={<CircularStatic />}>
                    <EpisodesList {...props} />
                </Suspense>
            </GridList>
        </div>
    )
}

export default HomePage;