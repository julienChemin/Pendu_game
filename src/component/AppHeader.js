import React from 'react';
import './AppHeader.css';

class AppHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="App-header">
                <ul className="headerNav">
                    <li onClick={this.props.toggleModal}>
                        My stats
                    </li>
                </ul>
            </header>
        );
    }
}

export default AppHeader;