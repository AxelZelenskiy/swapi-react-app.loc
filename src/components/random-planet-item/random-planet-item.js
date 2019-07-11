import React, {Component} from 'react';

import './random-planet-item.css';

export default class RandompPlanetItem extends Component {
    getArrayOfListItems() {
        const {planete: {name, rotation_period, population, gravity}} = this.props;
        let result = [], work_array = [];
        work_array.push({'name': name});
        work_array.push({'rotationPeriod': rotation_period});
        work_array.push({'population': population});
        work_array.push({'gravity': gravity});
        work_array.forEach((element) => {
            let obj_key = Object.keys(element).shift(),
                li_key = 'lgik' + Date.now() + obj_key,
                new_element = <li className='list-group-item'
                                  key={li_key}> {obj_key.toUpperCase()} : {Object.values(element)}</li>;
            result.push(new_element);
        });
        return result;

    };

    render() {
        const items = this.getArrayOfListItems();
        return <ul className="list-group list-group-flush">{items}</ul>;
    }
}