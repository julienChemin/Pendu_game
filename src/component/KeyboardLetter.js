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
            : this.props.gameFinished
                ? ''
                : ' clickable';

        return classes;
    }

    getOnclickEvent() {
        return this.props.gameFinished
            ? null
            : (this.props.guessed
                ? null
                : this.handleClick);
    }

    handleClick(e) {
        this.props.handleClick(e);
    }
}

export default KeyboardLetter;