import React from 'react';
import './Letter.css';

class Letter extends React.Component {
    render() {
        const displayedValue = this.props.guessed ? this.props.value : '_';

        return (
            <span className='letter'>
                {displayedValue}
            </span>
        );
    }
}

export default Letter;