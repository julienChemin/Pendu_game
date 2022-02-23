import React from 'react';
import KeyboardLetter from './KeyboardLetter';
import './Keyboard.css';

const keyboards = {
    azertyKeyboardRows: [
        ['a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm'],
        ['w', 'x', 'c', 'v', 'b', 'n'],
    ],
    qwertyKeyboardRows: [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    ],
};

class Keyboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            language: 'azertyKeyboard',
        };

        this.acceptedLanguage = [
            'azertyKeyboard',
            'qwertyKeyboard',
        ];

        this.handleClick = this.handleClick.bind(this);
        this.handleKeyboardLanguageChange = this.handleKeyboardLanguageChange.bind(this);
    }

    render() {

        const keyboardRows = this.getKeyboardRows();

        return (
            <div className='keyboard'>
                {keyboardRows}

                <div className='keyboardLanguage'>
                    <span
                        className='azertyKeyboard'
                        onClick={this.handleKeyboardLanguageChange}
                    >
                        Azerty
                    </span>

                    <span
                        className='qwertyKeyboard'
                        onClick={this.handleKeyboardLanguageChange}
                    >
                        Qwerty
                    </span>
                </div>
            </div>
        );
    }

    getKeyboardRows() {
        const guesses = this.props.guesses;

        return keyboards[`${this.state.language}Rows`].map((row, index) => {
            return <div key={index} className='keyboardRow'>
                {row.map(letter => {
                    return <KeyboardLetter
                        key={letter}
                        value={letter}
                        guessed={letter in guesses}
                        isRightGuess={letter in guesses && guesses[letter]}
                        handleClick={this.handleClick}
                    />
                })}
            </div>
        });
    }

    handleClick(e) {
        this.props.handleGuess(e.currentTarget.textContent);
    }

    handleKeyboardLanguageChange(e) {
        let keyboardLanguage = e.currentTarget.classList[0];

        keyboardLanguage = this.acceptedLanguage.includes(keyboardLanguage)
            ? keyboardLanguage
            : 'azerty';

        this.setState({
            language: keyboardLanguage
        });
    }
}

export default Keyboard;