import './App.css';
import AppHeader from './component/AppHeader';
import Game from './component/Game';
import Modal from "./component/Modal";
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    render() {
        return (
            <div className="App">
                <AppHeader
                    toggleModal={this.toggleModal}
                />

                <Game
                    toggleModal={this.toggleModal}
                />

                <Modal
                    isOpen={this.state.modalIsOpen}
                    toggleModal={this.toggleModal}
                />
            </div>
        );
    }

    toggleModal() {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen,
        });
    }
}

export default App