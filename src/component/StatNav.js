import React from 'react';
import './StatNav.css';

class StatNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayedBoard: this.props.displayedBoard,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <nav className='statNav'>
                <ul>
                    {this.props.gameModes.map((modeLabel, index) =>
                        <li
                            className={this.props.displayedBoard === modeLabel ? 'selectedStatNav' : ''}
                            key={index}
                            onClick={this.handleClick}
                        >
                            {modeLabel} Letters
                        </li>
                    )}
                </ul>
            </nav>
        )
    }

    handleClick(e) {
        this.props.handleDisplayedBoard(e.currentTarget.innerText[0]);
    }
}

export default StatNav;