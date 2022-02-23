import React from 'react';
import KeyboardLetter from './KeyboardLetter';
import './Keyboard.css';

const keyboards = {
    frenchKeyboardRows: [
        ['a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm'],
        ['w', 'x', 'c', 'v', 'b', 'n'],
    ],
    englishKeyboardRows: [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    ],
};

class Keyboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            language: 'frenchKeyboard',
        };

        this.acceptedLanguage = [
            'frenchKeyboard',
            'englishKeyboard',
        ];

        this.handleClick = this.handleClick.bind(this);
        this.handleKeyboardLanguageChange = this.handleKeyboardLanguageChange.bind(this);
    }

    render() {
        const keyboardRows = keyboards[`${this.state.language}Rows`];
        const guesses = this.props.guesses;

        return (
            <div className='keyboard'>
                {keyboardRows.map((row, index) =>
                    <div key={index} className='keyboardRow'>
                        {row.map(letter =>
                            <KeyboardLetter
                                key={letter}
                                value={letter}
                                guessed={letter in guesses}
                                isRightGuess={letter in guesses && guesses[letter]}
                                handleClick={this.handleClick}
                            />
                        )}
                    </div>
                )}
                <div className='keyboardLanguage'>
                    <span
                        className='frenchKeyboard'
                        onClick={this.handleKeyboardLanguageChange}
                    >
                        Azerty
                    </span>
                    <span
                        className='englishKeyboard'
                        onClick={this.handleKeyboardLanguageChange}
                    >
                        Qwerty
                    </span>
                </div>
            </div>
        );
    }

    handleClick(e) {
        this.props.handleGuess(e.currentTarget.textContent);
    }

    handleKeyboardLanguageChange(e) {
        let keyboardLanguage = e.currentTarget.classList[0];

        keyboardLanguage = this.acceptedLanguage.includes(keyboardLanguage)
            ? keyboardLanguage
            : 'french';

        this.setState({
            language: keyboardLanguage
        });
    }
}

export default Keyboard;