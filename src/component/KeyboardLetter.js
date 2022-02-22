import React from 'react';

class KeyboardLetter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='keyboardLetter'>
                <span>{this.props.value}</span>
            </div>
        );
    }
}

export default KeyboardLetter;