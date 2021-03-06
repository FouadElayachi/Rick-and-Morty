import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Grid, Button, AppBar, Toolbar, Avatar} from "@material-ui/core";
import StyledLink from "./StyledLink/StyledLink";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        row:{
            flexGrow:1
        },
        grow:{
            flexGrow:1
        },
        container:{
            width:1170,
            margin:"auto"
        },
        buttonFontSize:{
            fontSize:"11px",
            color:"#a1a1a1"
        },

        AppBar:{
            backgroundColor:theme.palette.background.paper,
            backgroundSize:"cover"
        },
        mainLogo:{
            color: "#a1a1a1",
            justifyContent:"left",
            '&:hover':{
                background:"transparent"
            }
        },

        avatar:{
            height:"100%",
            borderRadius:0,
        },
    }),
);

const NavBar: React.FC = () => {
    const classes = useStyles();
    return (
        <AppBar position="sticky" color="default" className={classes.AppBar}>
            <Grid item sm={12} xs={12} className={classes.container}>
                <Toolbar>
                    <Grid className={classes.grow}>
                        <Button className={classes.mainLogo}>
                            <Avatar src="https://upload.wikimedia.org/wikipedia/fr/c/c8/Rick_and_Morty_logo.png" className={classes.avatar} />
                        </Button>
                    </Grid>
                    <StyledLink to="/">EPISODES</StyledLink>
                    <StyledLink to="/favourites">FAVOURITES</StyledLink>
                </Toolbar>
            </Grid>
        </AppBar>
    );
}

export default NavBar;