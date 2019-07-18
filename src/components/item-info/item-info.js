import React, {Component} from "react";

import './item-info.css';
import Icon from './stormtrooper-icon-64.png';
import ListItemInfo from "../list-item-info";
import ListItemMissing from "../list-item-missing";
import RandomPlanetError from "../random-planet-error";
import ErrorButton from "../error-button";

export default class ItemInfo extends Component {

    state = {
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        console.log("Call component did catch");
        this.setState({
            hasError: true
        });
        console.log('State changed to ', this.state.hasError);
    };

    err_action = (err) => {
        this.setState({
            hasError:true
        });
    };

    render() {
        const {person_info, image} = this.props,
            {hasError} = this.state;
        if (hasError) return < RandomPlanetError />;
        const info_list = (person_info) ? < ListItemInfo person_info={person_info} err_action={this.err_action}/> : < ListItemMissing/>;
        const src = (person_info) ? image : Icon;
        return (<div className='col-6 col-sm-12 col-md-6'>
                <div
                    className='my-card-wrapper'>
                    <div className="card jumbotron my-card-body">
                        <img src={src} className="card-img-top my-info-card-image" alt="Some image here"/>
                        {info_list}
                    </div>
                </div>
                < ErrorButton />
            </div>
        );
    }
}