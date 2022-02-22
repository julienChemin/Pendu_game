import React from 'react';
import './Letter.css';

class Letter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isHide: true,
        }
    }

    render() {
        const displayedValue = this.state.isHide ? '_' : this.props.value;
        return (
            <span className='letter'>
                {displayedValue}
            </span>
        );
    }
}

export default Letter;