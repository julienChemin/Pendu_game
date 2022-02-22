import React from 'react';
import './Word.css';

class Word extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
              <div className="word">
                  {this.props.word}
              </div>
        );
    }
}

export default Word;