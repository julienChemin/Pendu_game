import React from 'react';
import '../style/component/Guess.css';

class Guess extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const classAttrValue = `guess ${this.props.value ? 'wrongGuess' : ''}`;

        return (
            <span className={classAttrValue}>
                {this.props.value}
            </span>
        );
    }
}

export default Guess;