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
            attemptsLeft: 8,
            guess: '',
            rightGuessesMap: Array(5).fill(false),
            wrongGuesses: [],
        }

        this.handleGuess = this.handleGuess.bind(this);
    }

    render() {
        return (
            <section id="gameScreen">
                <Word
                    word={this.state.word}
                    rightGuessesMap={this.state.rightGuessesMap}
                />
                <GuessArea
                    attempts={this.state.attempts}
                    guess={this.state.guess}
                    wrongGuesses={this.state.wrongGuesses}

                />
                <Keyboard
                    handleGuess={this.handleGuess}
                />
            </section>
        );
    }

    handleGuess(guess) {
        let isRightGuess = false;
        let rightGuessesMap = this.state.rightGuessesMap;
        let wrongGuesses = this.state.wrongGuesses;
        let attemptsLeft = this.state.attemptsLeft;

        Array.from(this.state.word).map((letter, index) => {
            if (guess === letter) {
                isRightGuess = true;
                rightGuessesMap[index] = true;
            }
        });

        if (!isRightGuess) {
            wrongGuesses.push(guess);
            attemptsLeft -= 1;
        }

        this.setState({
            attemptsLeft: attemptsLeft,
            guess: guess,
            rightGuessesMap: rightGuessesMap,
            wrongGuesses: wrongGuesses,
        });
    }
}

export default Game;