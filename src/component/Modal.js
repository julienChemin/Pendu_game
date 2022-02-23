import React from 'react';
import './Modal.css';

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
    }

    render() {
        const modalClasses = this.props.isOpen
            ? 'modal'
            : 'modal hide';

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
                </div>
            </section>
        )
    }

    toggleModal(e) {
        if (e.target === e.currentTarget) {
            this.props.toggleModal(e);
        }
    }
}

export default Modal;