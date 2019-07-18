import React, {Component} from 'react';

import './random-planet-item.css';

export default class RandomPlanetItem extends Component {

    capitalize = (some_string) => {
        if (typeof some_string !== 'string') return '';
        return some_string.charAt(0).toUpperCase() + some_string.slice(1)
    };

    clear_subs = (some_string) => {
        if (typeof some_string !== 'string') return '';
        return some_string.replace(/(_)/g,' ');
    };

    getArrayOfListItems() {
        //planet is object - not array
        const { planet } = this.props;
        const sorted_planet = Object.entries(planet).filter(([key]) => {
            const defaults = ['name', 'rotation_period', 'population', 'gravity'];
            return defaults.includes(key);
        });
        return sorted_planet.map(([key, value]) => {
            const li_key = 'lgik' + Date.now() + key;
            key = this.clear_subs(key);
            return <li className='list-group-item' key={li_key}> {this.capitalize(key)} : {value}</li>;
        });
    };

    render() {
        const items = this.getArrayOfListItems();
        return <ul className="list-group list-group-flush">{items}</ul>;
    }
}