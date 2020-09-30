import React from 'react';
import EpisodesList from "./Components/EpisodesList";
import NavBar from "./Components/NavBar";

const App: React.FC = () => {
    return (
        <>
            <NavBar />
            <EpisodesList />
        </>
    )
}

export default App;