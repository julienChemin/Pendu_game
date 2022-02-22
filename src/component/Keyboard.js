import React from 'react';
import KeyboardLetter from './KeyboardLetter';

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
            language: 'french',
        }
    }

    render() {
        const keyboardRows = keyboards[`${this.state.language}KeyboardRows`];

        return (
            <div>
                {keyboardRows.map((row, index) =>
                    <div key={index} className='keyboardRow'>
                        {row.map(letter =>
                            <KeyboardLetter
                                key={letter}
                                value={letter}
                            />
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default Keyboard;