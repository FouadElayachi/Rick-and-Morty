import React, { FunctionComponent, useContext, useEffect, Suspense, lazy } from 'react'
import {Store} from "../store/store";
import { fetchData } from '../actions/fetchData';
import { toggleFav } from '../actions/toggleFav';
import CircularStatic from "../Components/CircularStatic";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

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

const FavouritesPage: FunctionComponent = () => {
    const classes = useStyles();
    const { state, dispatch } = useContext(Store);

    useEffect(() => {
        state.favourites.length === 0 && fetchData(dispatch)
    });

    const props: any = {
        episodes: state.favourites,
        toggleFav: toggleFav,
        favourites: state.favourites,
        dispatch: dispatch,
        state: state
    }
    return (
        <Grid className={classes.root} container justify="center" spacing={3}>
            <Suspense fallback={<CircularStatic />}>
                <EpisodesList {...props} />
            </Suspense>
        </Grid>
    )
}

export default FavouritesPage;