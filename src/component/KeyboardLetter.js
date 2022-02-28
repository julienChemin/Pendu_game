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
                className={this.getClasses()}
                onClick={this.getOnclickEvent()}
            >
                {this.props.value}
            </span>
        );
    }

    getClasses() {
        let classes = 'keyboardLetter';

        classes += this.props.guessed
            ? (this.props.isRightGuess
                ? ' goodKeyboardLetter'
                : ' wrongKeyboardLetter')
            : this.props.attemptsLeft > 0
                ? ' clickable'
                : '';

        return classes;
    }

    getOnclickEvent() {
        return this.props.attemptsLeft > 0
            ? (this.props.guessed
                ? null
                : this.handleClick)
            : null;
    }

    handleClick(e) {
        this.props.handleClick(e);
    }
}

export default KeyboardLetter;