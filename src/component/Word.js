import React from 'react';
import Letter from './Letter.js';
import './Word.css';

class Word extends React.Component {
    constructor(props) {
        super(props);

        this.arrRefs = Array(this.props.word.length).fill(null).map(ref => React.createRef());
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.gameFinished) {
            let timer = 0;
            const incrValue = 50;

            this.arrRefs.forEach(ref => {
                timer += incrValue;

                setTimeout(() => {
                    ref.current.style.transform = 'rotateY(360deg)';
                }, timer);
            });
        }
    }

    render() {
        const rightGuessesMap = this.props.rightGuessesMap;

        return (
              <div className="word">
                  {Array.from(this.props.word).map((letter, index) =>
                      <Letter
                          key={index}
                          myRef={this.arrRefs[index]}
                          value={letter}
                          guessed={rightGuessesMap[index]}
                          gameFinished={this.props.gameFinished}
                      />
                  )}
                  <div>{this.props.word}</div>
              </div>
        );
    }
}

export default Word;