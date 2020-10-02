import React from 'react';
import {Route, Switch} from 'react-router-dom';
import FavouritesPage from "../Pages/FavouritesPage";
import HomePage from "../Pages/HomePage";

const Routing: React.FC = () => {
    return(
        <Switch>
            <Route exact path="/"><HomePage /></Route>
            <Route exact path="/favourites"><FavouritesPage /></Route>
        </Switch>
    );
}

export default Routing;