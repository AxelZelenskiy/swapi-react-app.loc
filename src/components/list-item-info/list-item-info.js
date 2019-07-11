import React, {Component} from 'react';

import './list-item-info.css';

export default class ListItemInfo extends Component {

    render(){
        const {person_info: {name , birth_year , height, mass , skin_color}} = this.props;
        return (
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Birth year : {birth_year}</li>
                    <li className="list-group-item">Height : {height}</li>
                    <li className="list-group-item">Mass : {mass}</li>
                    <li className="list-group-item">Skin color : {skin_color}</li>
                </ul>
            </div>

        )
    };
}