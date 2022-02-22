import React from 'react';
import Letter from './Letter.js';
import './Word.css';

class Word extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
              <div className="word">
                  {Array.from(this.props.word).map((letter, index) =>
                      <Letter
                          key={index}
                          value={letter}
                      />
                  )}
                  <div>{this.props.word}</div>
              </div>
        );
    }
}

export default Word;