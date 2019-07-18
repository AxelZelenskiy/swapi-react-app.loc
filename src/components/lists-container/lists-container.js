import React, { Component } from 'react';

import './lists-container.css';

export default class ListsContainer extends Component {
    render(){
        const { content } = this.props;
        return (
            <div className='col-6 col-md-6 col-sm-12'>
                <div className=" list-col">
                    <ul className='list-group lists-f jumbotron'>
                        {content}
                    </ul>
                </div>
            </div>
        )
    }
}