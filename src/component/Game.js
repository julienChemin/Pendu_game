import { getCookie, setCookie } from 'react-use-cookie';
import React from 'react';

import './Game.css';

import Word from './Word';
import GuessArea from './GuessArea';
import Keyboard from './Keyboard';
import GameFooter from './GameFooter';

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

const maxAttempts = 8;

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            word: getWord(this.props.wordLength),
            attemptsLeft: maxAttempts,
            guesses: {},
            date: new Date().toLocaleDateString(),
        }

        this.handleGuess = this.handleGuess.bind(this);
        this.getRightGuessesMap = this.getRightGuessesMap.bind(this);
        this.getWrongGuesses = this.getWrongGuesses.bind(this);
        this.setGameCookie = this.setGameCookie.bind(this);
        this.getGameCookie = this.getGameCookie.bind(this);
        this.deleteGameCookie = this.deleteGameCookie.bind(this);
    }

    componentDidMount() {
        const data = this.getGameCookie();

        JSON.parse(data)?.date === new Date().toLocaleDateString()
            ? this.setState(JSON.parse(data))
            : this.setGameCookie();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.setGameCookie(JSON.stringify(this.state));
    }

    render() {
        return (
            <section id="gameScreen">
                <Word
                    word={this.state.word}
                    rightGuessesMap={this.getRightGuessesMap()}
                />

                <GuessArea
                    attempts={maxAttempts}
                    wrongGuesses={this.getWrongGuesses()}
                />

                <Keyboard
                    guesses={this.state.guesses}
                    handleGuess={this.handleGuess}
                    attemptsLeft={this.state.attemptsLeft}
                />

                {this.state.attemptsLeft < 0 &&
                    <GameFooter/>
                }

                <button onClick={this.deleteGameCookie}>
                    retry
                </button>
            </section>
        );
    }

    getRightGuessesMap() {
        const word = Array.from(this.state.word);

        return Array(this.state.word.length)
            .fill(false)
            .map((value, index) => {
                const letter = word[index];

                return !!this.state.guesses[letter];
            });
    }

    getWrongGuesses() {
        return Object.entries(this.state.guesses).map(([key, value]) => {
            return !value
                ? key
                : false;
        }).filter(letter => letter);
    }

    handleGuess(guess) {
        const isRightGuess = Array.from(this.state.word).includes(guess);
        const attemptsLeft = isRightGuess
            ? this.state.attemptsLeft
            : this.state.attemptsLeft - 1;
        let guesses = this.state.guesses;
        guesses[guess] = isRightGuess;

        if (attemptsLeft < 1) {
            setTimeout(() => {
                this.props.toggleModal();
            }, 500);
        }

        this.setState({
            attemptsLeft: attemptsLeft,
            guesses: guesses,
        });
    }

    setGameCookie() {
        setCookie(
            `gameLePendu${this.props.wordLength}`,
            JSON.stringify(this.state),
        );
    }

    getGameCookie() {
        return getCookie(`gameLePendu${this.props.wordLength}`);
    }

    deleteGameCookie() {
        setCookie(`gameLePendu${this.props.wordLength}`, null);
    }
}

export default Game;