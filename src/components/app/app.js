import React from 'react';

import Header from "../header";
import RandomPlanet from "../random-planet";
import MainSection from "../main-section";
import './app.css';

const App = () => {
    return (<div className='wrapper'>
            <Header/>
            <RandomPlanet/>
            <MainSection/>
        </div>
    );
};

export default App;