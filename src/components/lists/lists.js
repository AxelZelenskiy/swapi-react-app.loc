import React, {Component} from 'react';

import './lists.css';
import PreLoading from "../pre-loading";
import ListsContainer from "../lists-container";

export default class Lists extends Component {
    state = {
        persons_list: null
    };

    getId(val) {
        const re = /\/(\d*)\/$/;
        let result = val.match(re);
        return result[result.length - 1];
    }

    componentDidMount() {
        const {persons, onClick} = this.props,
            list = persons.map((person) => {
                const id = this.getId(person.url),
                    key = person.name + id + 'key';
                return <li className='list-group-item my-add-to-list-item' id={id} key={key} onClick={() => {
                    onClick(id);
                }}>
                    {person.name}
                </li>;
            });
        this.setState({
            persons_list: list
        });
    }

    render() {
        const {persons_list} = this.state;
        if (persons_list) { return <ListsContainer content={persons_list} /> }
        return <PreLoading/>;
    }
}