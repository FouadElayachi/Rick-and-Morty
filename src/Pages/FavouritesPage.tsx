import React, { FunctionComponent, useContext, useEffect, Suspense, lazy } from 'react'
import {Store} from "../store/store";
import { fetchData } from '../actions/fetchData';
import { toggleFav } from '../actions/toggleFav';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import CircularStatic from "../Components/CircularStatic";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";


const EpisodesList = lazy<any>(() => import('../Components/EpisodesList'));

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

const FavouritesPage: FunctionComponent = () => {
    const classes = useStyles();
    const { state, dispatch } = useContext(Store);

    useEffect(() => {
        state.favourites.length === 0 && fetchData(dispatch)
    });

    const props: any = {
        episodes: state.favourites,
        store: { state, dispatch },
        toggleFav,
        favourites: state.favourites
    }
    return (
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

export default FavouritesPage;