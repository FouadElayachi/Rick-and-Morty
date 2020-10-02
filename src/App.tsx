import React from 'react';
import NavBar from "./Components/NavBar";
import Routing from './Components/Routing';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routing />
        </BrowserRouter>
    )
}

export default App;