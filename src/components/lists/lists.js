import React, {Component} from 'react';

import './lists.css';

export default class Lists extends Component {
    getId(val) {
        const re = /\/(\d*)\/$/;
        let result = val.match(re);
        return result[result.length - 1];
    };

    genList() {
        const {persons, onClick} = this.props;
        let work_set_of_persons = [];
        persons.forEach(person => {
            let id = this.getId(person.url),
                key = person.name + id + 'key';
            let new_element = <li className='list-group-item my-add-to-list-item' id={id} key={key} onClick={() => {
                onClick(id);
            }}>
                <a className='link-add' href="#">{person.name}</a>
            </li>;
            work_set_of_persons.push(new_element);
        });
        return work_set_of_persons;
    };

    render() {
        const persons_list = this.genList();
        return (
            <div className="col-5 jumbotron list-col">
                <ul className='list-group lists-f'>
                    {persons_list}
                </ul>
            </div>
        )
    }
}