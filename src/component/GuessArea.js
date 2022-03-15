import React from 'react';
import Guess from './Guess';
import '../style/component/GuessArea.css';

class GuessArea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const wrongGuesses = this.props.wrongGuesses;
        const attempts = Array(this.props.attempts)
            .fill('')
            .map((attempt, index) =>
                <Guess
                    key={index}
                    value={wrongGuesses[index] ? wrongGuesses[index] : ''}
                />
            );

        return (
            <div className='guessArea'>
                <span>
                    Wrong guesses:
                </span>
                {attempts}
            </div>
        );
    }
}

export default GuessArea;