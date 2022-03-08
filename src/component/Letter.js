import React from 'react';
import './Letter.css';
import keyboardLetter from "./KeyboardLetter";

class Letter extends React.Component {
    render() {
        const displayedValue = this.props.guessed || this.props.gameFinished
            ? this.props.value.toUpperCase()
            : '';
        const classes = this.props.guessed
            ? 'letter guessedLetter'
            : this.props.gameFinished
                ? 'letter notGuessedLetter'
                : 'letter';

        return (
            <span
                className={classes}
                ref={this.props.myRef}
            >
                {displayedValue}
            </span>
        );
    }
}

export default Letter;