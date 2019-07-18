import React, { Component } from 'react';

import './main-section-container.css';

export default class MainSectionContainer extends Component{
    render () {
        const {right_block, left_block} = this.props;
        return (
            <div className='container'>
                <div className='row align-items-start'>
                    {right_block}
                    {left_block}
                </div>
            </div>
        );
    };
}