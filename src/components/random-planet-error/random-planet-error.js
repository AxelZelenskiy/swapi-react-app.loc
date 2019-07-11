import React from 'react';

import './random-planet-error.css';
import icon from './death-star-icon-14-64.png';

const RandomPlanetError = () => {
    return (<div className='Error-class'>
        <img src={icon} alt="Something wrong here"/>
        <h4>Ooops!!! Something going wrong!!!</h4>
        <h5>Our command of repair droids will be send immediately as soon as possible</h5>
    </div>);
};

export default RandomPlanetError;