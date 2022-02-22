import React from 'react';
import Guess from './Guess';
import './GuessArea.css';

class GuessArea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const wrongGuess = this.props.wrongGuess;
        const attempts = Array(this.props.attempts)
            .fill('')
            .map((attempt, index) =>
                <Guess
                    key={index}
                    value={wrongGuess[index] ? wrongGuess[index] : ''}
                />
            );

        return (
            <div className='guessArea'>
                {attempts}
            </div>
        );
    }
}

export default GuessArea;