import React, {Component} from "react";

import './item-info.css';
import Icon from './stormtrooper-icon-64.png';
import ListItemInfo from "../list-item-info";
import ListItemMissing from "../list-item-missing";

export default class ItemInfo extends Component {

    render() {
        const {person_info , image} = this.props;
        console.log('Propertys is ', this.props);
        const info_list = (person_info != null) ? < ListItemInfo person_info={person_info}/> : < ListItemMissing/>;
        const src = (person_info != null) ? image : Icon;
        console.log('Src is ', src);
        return (<div className='col-6 offset-1 my-card-wrapper'>
                <div className="card jumbotron my-card-body">
                    <img src={src} className="card-img-top my-info-card-image" alt="Some image here"/>

                    { info_list }
                </div>
            </div>
        );
    }
}