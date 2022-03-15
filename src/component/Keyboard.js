import React from 'react';
import KeyboardLetter from './KeyboardLetter';
import '../style/component/Keyboard.css';

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

function ButtonKeyboardLanguage(props) {
    const language = props.language;
    const currentLanguage = props.currentLanguage;

    const displayedLanguage = `${language[0].toUpperCase()}${language.slice(1)}`;
    const classes = `${language} ${language === currentLanguage ? 'selectedKeyboardLanguage' : ''}`;

    return (
        <span
            className={classes}
            onClick={props.onClick}
        >
            {displayedLanguage}
        </span>
    );
}

class Keyboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            language: 'azerty',
        };

        this.acceptedKeyboard = [
            'azerty',
            'qwerty',
        ];

        this.handleClick = this.handleClick.bind(this);
        this.handleKeyboardLanguageChange = this.handleKeyboardLanguageChange.bind(this);
    }

    render() {

        const keyboardRows = this.getKeyboardRows();

        return (
            <div className='keyboard'>
                {keyboardRows}

                <div className='keyboardLanguages'>
                    {this.acceptedKeyboard.map(language =>
                        <ButtonKeyboardLanguage
                            key={language}
                            language={language}
                            currentLanguage={this.state.language}
                            onClick={this.handleKeyboardLanguageChange}
                        />
                    )}
                </div>
            </div>
        );
    }

    getKeyboardRows() {
        const guesses = this.props.guesses;

        return keyboards[`${this.state.language}KeyboardRows`].map((row, index) => {
            return <div key={index} className='keyboardRow'>
                {row.map(letter => {
                    return <KeyboardLetter
                        key={letter}
                        value={letter}
                        gameFinished={this.props.gameFinished}
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

        keyboardLanguage = this.acceptedKeyboard.includes(keyboardLanguage)
            ? keyboardLanguage
            : 'azerty';

        this.setState({
            language: keyboardLanguage
        });
    }
}

export default Keyboard;