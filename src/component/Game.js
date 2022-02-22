import React from 'react';
import Word from './Word';
import GuessArea from './GuessArea';
import Keyboard from './Keyboard';
import './Game.css';

/**
 * @param {String} length
 * @returns {String}
 */
function getWord(length) {
    const data = window['words' + length];
    const max = data.length;
    const index = Math.floor(Math.random() * max);

    return sanitizeWord(data[index]);
}

/**
 * @param {String} word
 * @returns {String}
 */
function sanitizeWord(word) {
    return word.replace(/[^\u0000-\u007E]/g, function(a){
        return window.diacriticsMap[a] || a;
    });
}

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            word: getWord('5'),
            attempts: 8,
            guess: '',
            wrongGuess: [],
        }

        this.handleGuess = this.handleGuess.bind(this);
    }

    render() {
        return (
            <section id="gameScreen">
                <Word
                    word={this.state.word}
                    guess={this.state.guess}
                />
                <GuessArea
                    attempts={this.state.attempts}
                    guess={this.state.guess}
                    wrongGuess={this.state.wrongGuess}

                />
                <Keyboard
                    handleGuess={this.handleGuess}
                />
            </section>
        );
    }

    handleGuess(guess) {console.log(guess);
        let output = {
            isRight: false,
            value:guess,
        };

        this.setState({
            guess: guess,
        });
    }
}

export default Game;