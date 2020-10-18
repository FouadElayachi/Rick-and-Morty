import React, {useContext, useEffect, lazy, Suspense} from "react";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {Store} from "../store/store";
import {fetchData} from "../actions/fetchData";
import {toggleFav} from "../actions/toggleFav";
import CircularStatic from "../Components/CircularStatic";
import {Grid} from "@material-ui/core";


const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
            marginTop: 10
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
                <Grid className={classes.root} container justify="center" spacing={3}>
                    <Suspense fallback={<CircularStatic />}>
                        <EpisodesList {...props} />
                    </Suspense>
                </Grid>
    )
}

export default HomePage;