import React, {Component} from 'react';

import './error-button.css';

export default class ErrorButton extends Component {
    state = {
        error: false
    };

    genError = () => {
      this.setState({
          error : true
      });
    };

    render() {
        if (this.state.error) this.foo.bar = 33;
        return <button className='error-button btn btn-danger' type='button'
                       onClick={this.genError}>Throw Err
        </button>;
    }
}