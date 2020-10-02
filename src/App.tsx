import React from 'react';
import EpisodesList from "./Components/EpisodesList";
import HomePage from "./Pages/HomePage";

const App: React.FC = () => {
    return (
        <>
            <HomePage />
            <EpisodesList />
        </>
    )
}

export default App;