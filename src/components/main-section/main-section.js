import React, {Component} from 'react';

import Lists from '../lists';
import './main-section.css';
import ItemInfo from "../item-info";
import SwapiService from '../../services/sw-api-service';
import PreLoading from '../pre-loading';
import MainSectionContainer from "../main-section-container";

export default class MainSection extends Component {
    state = {
        persons: null,
        person_info: null,
        data_loaded: false,
        clicked: null,
        person_image: null
    };
    swapi_service = new SwapiService();
    person_image_base_url = 'https://starwars-visualguide.com/assets/img/characters/';

    componentDidMount() {
        this.swapi_service.getPeopleList().then((people_list) => {
            this.setState({
                persons: people_list,
                data_loaded: true
            });
        });
    }

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
        const {data_loaded, persons, person_info, person_image} = this.state,
            list = data_loaded ? <Lists persons={persons} onClick={this.ListClicked}/> : < PreLoading/>;
        return < MainSectionContainer right_block={list} left_block={< ItemInfo person_info={person_info} image={person_image} />} />;
    }
}