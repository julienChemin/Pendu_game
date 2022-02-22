import React from 'react';
import './KeyboardLetter.css';

class KeyboardLetter extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        let className = 'keyboardLetter';

        if (this.props.guessed) {
            className += this.props.isRightGuess
                ? ' goodKeyboardLetter'
                : ' wrongKeyboardLetter';
        }

        return (
            <span
                className={className}
                onClick={this.props.guessed
                    ? null
                    : this.handleClick
                }
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