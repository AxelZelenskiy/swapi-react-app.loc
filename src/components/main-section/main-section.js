import React, {Component} from 'react';

import Lists from '../lists';
import './main-section.css';
import ItemInfo from "../item-info";
import SwapiService from '../../services/sw-api-service';
import PreLoading from '../pre-loading';

export default class MainSection extends Component {
    constructor() {
        super();
        this.getListInfo();
    }

    state = {
        persons: null,
        person_info: null,
        data_loaded: false,
        clicked: null
    };
    swapi_service = new SwapiService();
    person_image_base_url = 'https://starwars-visualguide.com/assets/img/characters/';
    getListInfo() {
        const pli = this.swapi_service.getPeopleList().then((list) => {
            this.setState({
                persons: list,
                data_loaded: true
            })
        });
    };

    ListClicked = (id) => {
        this.getPersonInfo(id);
    };

    getPersonInfo = (person_id) => {
        if (person_id != null) {
            this.swapi_service.getPerson(person_id).then((person_info) => {
                this.setState({
                    person_info: person_info,
                    clicked: person_id,
                    person_image: this.person_image_base_url + person_id + '.jpg'
                });
            });
        }
    };

    render() {
        const {data_loaded, persons, person_info , person_image} = this.state;
        const list = data_loaded ? <Lists persons={persons} onClick={this.ListClicked}/> : < PreLoading/>;
        return (<div className='container'>
            <div className='row align-items-start'>
                {list}
                <ItemInfo person_info={person_info} image={person_image}/>
            </div>
        </div>);
    }
}