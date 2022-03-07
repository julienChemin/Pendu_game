import React from "react";

import './App.css';

import AppHeader from './component/AppHeader';
import Game from './component/Game';
import Modal from "./component/Modal";
import {getCookie, setCookie} from "react-use-cookie";

const maxAttempts = 8;
const gameModes = ['4', '5', '6'];

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            wordLength: '5',
            modalIsOpen: false,
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleEndGame = this.handleEndGame.bind(this);
        this.saveUserGameState = this.saveUserGameState.bind(this);
        this.setUserGameStatCookie = this.setUserGameStatCookie.bind(this);
        this.getUserGameStatCookie = this.getUserGameStatCookie.bind(this);
    }

    render() {
        return (
            <div className="App">
                <AppHeader
                    toggleModal={this.toggleModal}
                />

                <Game
                    toggleModal={this.toggleModal}
                    wordLength={this.state.wordLength}
                    handleEndGame={this.handleEndGame}
                    maxAttempts={maxAttempts}
                />

                <Modal
                    isOpen={this.state.modalIsOpen}
                    toggleModal={this.toggleModal}
                    userGameStat={this.getUserGameStatCookie()}
                    gameModes={gameModes}
                    displayedBoard={this.state.wordLength}
                    maxAttempts={maxAttempts}
                />
            </div>
        );
    }

    toggleModal() {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen,
        });
    }

    handleEndGame(attemptsLeft) {
        setTimeout(() => {
            this.toggleModal();
        }, 400);

        this.saveUserGameState(attemptsLeft);
    }

    saveUserGameState(attemptsLeft) {
        const userGameStat = this.getUserGameStatCookie();
        const data = userGameStat[this.state.wordLength] ?? {};

        const moveAmount = maxAttempts - attemptsLeft;
        data[moveAmount] = data[moveAmount]
            ? data[moveAmount] + 1
            : 1;
        userGameStat[this.state.wordLength] = data;

        this.setUserGameStatCookie(userGameStat);
    }

    setUserGameStatCookie(data) {
        setCookie(
            `gameLePenduUserGameStat`,
            JSON.stringify(data),
        );
    }

    getUserGameStatCookie() {
        const data = getCookie(`gameLePenduUserGameStat`);

        return data
            ? JSON.parse(data)
            : {};
    }
}

export default App