import React, {Component} from 'react';

import './random-planet-card.css';
import RandomPlanetItem from "../random-planet-item";

export default class RandomPlanetCard extends Component {

    componentDidMount() {
        const { getNewPlanet } = this.props;
        this.interval = setInterval(getNewPlanet, 180000);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    };

    render() {
        const { planet, image_url } = this.props;
        return (
                <div className="row no-gutters row-of-card-body">
                    <div className="col-md-4 d-flex my-img-container">
                        <img src={image_url} className="card-img"
                             alt="Planet image"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Planet information</h5>
                            <p className="card-text">
                            </p>
                            <div className='list-wrapper'>
                                < RandomPlanetItem planet={planet}/>
                            </div>
                            <p className="card-text">
                                <small className="text-muted">*Updates every 3 minutes</small>

                            </p>
                        </div>
                    </div>
                </div>
        );
    };
}