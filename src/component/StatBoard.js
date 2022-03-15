import React from 'react';
import '../style/component/StatBoard.css';

class StatBoard extends React.Component {
    constructor(props) {
        super(props);

        this.sortedRefs = {};

        this.updateRefs = this.updateRefs.bind(this);
        this.loadBarAnimation = this.loadBarAnimation.bind(this);
    }

    componentDidMount() {
        this.loadBarAnimation('start');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.loadBarAnimation('start');
    }

    componentWillUnmount() {
        this.loadBarAnimation('stop');
    }

    render() {
        const boardData = this.parseBoardData(this.props.boardData);

        this.updateRefs();

        return (
            <ul className='boardData'>
                {boardData.map((row, index) =>
                    <li key={row.category}>
                        <span>{row.category} wrong guesses: </span>
                        <div className='loadBar'>
                            <div
                                ref={this.sortedRefs[this.props.displayedBoard][index]}
                                widthvalue={row.load + '%'}
                            />
                        </div>
                        <span>{row.amount}</span>
                    </li>
                )}
            </ul>
        )
    }

    parseBoardData(data) {
        const arrData = Object.entries(data);
        const totalPlayed = arrData.reduce((acc, row) => { return acc + row[1] }, 0);

        return Array(this.props.maxAttempts + 1).fill('').map((row, index) => {
            const rowData = data[index];
            const amount = rowData ?? 0;
            const load = Number.isNaN(Math.floor(100 * amount / totalPlayed))
                ? 0
                : Math.floor(100 * amount / totalPlayed);

            return {
             'category': index,
             'amount': amount,
             'load': load,
            }
        });
    }

    updateRefs() {
        if (!this.sortedRefs[this.props.displayedBoard]) {
            this.sortedRefs[this.props.displayedBoard] = Array(this.props.maxAttempts + 1).fill(null)
                .map(elem => React.createRef());
        }
    }

    loadBarAnimation(action) {
        if (action === 'start') {
            setTimeout( () => {
                this.sortedRefs[this.props.displayedBoard].forEach(ref => {
                    ref.current.style.width = ref.current.getAttribute('widthvalue');
                });
            }, 200);

            return;
        }

        this.sortedRefs[this.props.displayedBoard].forEach(ref => {
            ref.current.style.width = '0%';
        });
    }
}

export default StatBoard;