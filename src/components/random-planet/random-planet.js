import React, {Component} from 'react';

import './random-planet.css';

import RandomPlanetCard from '../random-planet-card';
import RandomPlanetError from '../random-planet-error';
import PreLoading from '../pre-loading';
import SwapiService from '../../services/sw-api-service';

export default class RandomPlanet extends Component {
    constructor() {
        super();
        this.getRandomPlanet();
    };

    state = {
        id: null,
        error: false,
        planet: {
            name: null,
            gravity: null,
            rotationPeriod: null,
            population: null
        },
        random_planet_url: null,
        planets_updated: false
    };

    swapi_service = new SwapiService();
    img_planets_loc = 'https://starwars-visualguide.com/assets/img/planets/';
    unknown_planet_img = 'assets/img/unknown_planet.png';

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    onError = (err) => {
        this.setState({
            error:true,
            planets_updated: true
        })
    };
    getRandomPlanet() {
        let id = this.getRandomInt(1, 62);
        this.swapi_service.getPlanet(id).then((planet_data) => {
            this.setState({planet: planet_data, id: id, planets_updated: true});
            this.getRandomPlanetImageUrl(this.state);
        }).catch(this.onError);
    };

    getRandomPlanetImageUrl({id}) {
        let img_url = (id === null) ? null : (this.img_planets_loc + id + '.jpg');
        if (img_url != null) {
            //    check exist file on remote server
            fetch(img_url, {method: 'HEAD'}).then(res => {
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
            }).catch((err)=> { console.log('it is error',err)});
        } else {
            //    url will be default image of planet
            this.setState({
                random_planet_url: this.unknown_planet_img
            });
        }
    };

    render() {
        const {planet, random_planet_url, planets_updated, error } = this.state;
        const has_data = (planets_updated && !error) ? true : false;
        const card = has_data ?  < RandomPlanetCard planet={planet} random_planet_url={random_planet_url}/> : null;
        const preloader = planets_updated ? null : < PreLoading />;
        const error_msg = (planets_updated && error) ? < RandomPlanetError /> : null;
        return (
            <div className="container card mb-3 random-planet">
                {card}
                {error_msg}
                {preloader}
            </div>
        );
    };
}