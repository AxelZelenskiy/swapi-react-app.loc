import React from 'react';
import './header.css';

const Header = () => {
    return (<div className='container'>
        <div className='row'>
            <div className='My-Header d-flex col'>
                <h1><a href="/">Starbase DB</a></h1>
                <ul className='nav my-nb1'>
                    <li className='nav-item'>
                        <a href="#" className="nav-link">People</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#" className="nav-link">Planets</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#" className="nav-link">Starships</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>);
};

export default Header;