import React from 'react';
import Word from './Word';
import Guess from './Guess';
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
 * @param {String} length
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
    }

    render() {
        return (
            <section id="gameScreen">
                <Word word={getWord('5')} />
                <Guess/>
                <Keyboard/>
            </section>
        );
    }
}

export default Game;