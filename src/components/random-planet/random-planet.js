import React, {Component} from 'react';

import './random-planet.css';

import RandomPlanetCard from '../random-planet-card';
import RandomPlanetError from '../random-planet-error';
import PreLoading from '../pre-loading';
import SwapiService from "../../services/sw-api-service";

export default class RandomPlanet extends Component {

    state = {
        error: false,
        planets_updated: false,
        planet_toggle: false,
        random_planet_url: null,
        id: null
    };

    swapi_service = new SwapiService();
    img_planets_loc = 'https://starwars-visualguide.com/assets/img/planets/';
    unknown_planet_img = 'assets/img/unknown_planet.png';

    componentDidMount() {
        this.getRandomPlanet();
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    getRandomPlanet = () => {
        let id = this.getRandomInt(1, 62);
        this.swapi_service.getPlanet(id).then((planet_data) => {
            this.setState({planet: planet_data, id: id});
            this.getRandomPlanetImageUrl(this.state);
           this.planetUpdated();
        }).catch(this.onError);
    };

    getRandomPlanetImageUrl({id}) {
        let img_url = (id === null) ? null : (this.img_planets_loc + id + '.jpg');
        if (img_url != null) {
            //    check exist file on remote server
                fetch(img_url, {method: 'HEAD'})
                .then(res => {
                    if (res.ok) {
                        this.setState({
                            random_planet_url: img_url
                        });
                    } else {
                        this.setState({
                            random_planet_url: this.unknown_planet_img
                        });
                        throw new Error('Not found image. Script will upload default image');
                    }
                })
                .catch((err) => {
                    console.log('Error occure while loading image ', err) });
        } else {
            //    url will be default image of planet
            this.setState({
                random_planet_url: this.unknown_planet_img
            });
        }
    };

    clickToggle = () => {
        this.setState(({planet_toggle}) => {return {planet_toggle:!planet_toggle}
        });
    };

    planetUpdated = () => {
        this.setState({planets_updated: true});
    };

    onError = () => {
        this.setState({
            error: true,
            planets_updated: true
        })
    };

    render() {
        const { planet, planets_updated, error, planet_toggle, random_planet_url } = this.state;
        const has_data = (planets_updated && !error);
        const card = (has_data && !planet_toggle) ? < RandomPlanetCard planet={planet} image_url={random_planet_url} getNewPlanet={this.getRandomPlanet}/> : null;
        const preloader = planets_updated ? null : < PreLoading/>;
        const error_msg = (planets_updated && error) ? < RandomPlanetError/> : null;
        return (<div className='container'>
                <div className="card mb-3 random-planet">
                    {card}
                    {error_msg}
                    {preloader}
                </div>
                <button className='random-planet-button btn btn-warning' onClick={this.clickToggle}
                        type='button'>Toggle
                </button>
                <button className='random-planet-button btn btn-danger' type='button'>Throw Err</button>
            </div>
        );
    };
}