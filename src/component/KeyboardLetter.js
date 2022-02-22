import React from 'react';
import './KeyboardLetter.css';

class KeyboardLetter extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <span
                className='keyboardLetter'
                onClick={this.handleClick}
            >
                {this.props.value}
            </span>
        );
    }

    handleClick(e) {
        this.props.handleClick(e);
    }
}

export default KeyboardLetter;