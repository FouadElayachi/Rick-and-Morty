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

const EpisodesList: React.FC = (props:any) => {
    return(
        <>

        </>
    )
}

export default EpisodesList;