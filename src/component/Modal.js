import React from 'react';
import StatNav from './StatNav';
import StatBoard from './StatBoard';

import './Modal.css';

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayedBoard: null,
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleDisplayedBoard = this.handleDisplayedBoard.bind(this);
    }

    render() {
        const modalClasses = this.props.isOpen
            ? 'modal'
            : 'modal hide';
        const displayedBoard = this.state.displayedBoard ?? this.props.displayedBoard;
        const boardData = this.props.isOpen
            ? this.props.userGameStat[displayedBoard] ?? {}
            : {};

        return (
            <section
                className={modalClasses}
                onClick={this.toggleModal}
            >
                <div className='modalContent'>
                    <span
                        className='closeModal'
                        onClick={this.toggleModal}
                    >x</span>

                    <StatNav
                        gameModes={this.props.gameModes}
                        displayedBoard={displayedBoard}
                        handleDisplayedBoard={this.handleDisplayedBoard}
                    />
                    {this.props.isOpen &&
                        <StatBoard
                            displayedBoard={displayedBoard}
                            boardData={boardData}
                            maxAttempts={this.props.maxAttempts}
                        />
                    }
                </div>
            </section>
        )
    }

    toggleModal(e) {
        if (e.target === e.currentTarget) {
            this.props.toggleModal(e);
        }
    }

    handleDisplayedBoard(displayedBoard) {
        this.setState({
            displayedBoard: displayedBoard,
        });
    }
}

export default Modal;