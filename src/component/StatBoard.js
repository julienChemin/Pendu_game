import React from 'react';
import './StatBoard.css';

class StatBoard extends React.Component {
    constructor(props) {
        super(props);

        this.sortedRefs = {};
        this.sortedRefs[this.props.displayedBoard] = Array(this.props.maxAttempts + 1).fill(null)
            .map(elem => React.createRef());
    }

    componentDidMount() {
        setTimeout( () => {
            this.sortedRefs[this.props.displayedBoard].forEach(ref => {
                ref.current.style.width = ref.current.getAttribute('widthvalue');
            });
        }, 300);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.sortedRefs[this.props.displayedBoard]) {
            this.sortedRefs[this.props.displayedBoard] = Array(this.props.maxAttempts + 1).fill(null)
                .map(elem => React.createRef());
        }

        setTimeout( () => {
            this.sortedRefs[this.props.displayedBoard].forEach(ref => {
                ref.current.style.width = ref.current.getAttribute('widthvalue');
            });
        }, 300);
    }

    componentWillUnmount() {
        this.sortedRefs[this.props.displayedBoard].forEach(ref => {
            ref.current.style.width = '0%';
        });
    }

    render() {
        const boardData = this.parseBoardData(this.props.boardData);

        return (
            <ul className='boardData'>
                {boardData.map((row, index) =>
                    <li
                        key={row.category}
                    >
                        <span>{row.category} wrong guesses: </span>
                        <div className='loadBar'>
                            <div
                                ref={this.sortedRefs[this.props.displayedBoard][Number(index)]}
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

            return {
             'category': index,
             'amount': amount,
             'load': 100 * amount / totalPlayed,
            }
        });
    }
}

export default StatBoard;