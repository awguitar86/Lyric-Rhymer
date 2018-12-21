import React, { Component } from 'react';

class RhymeItem extends Component {
  render() {
    const {word, syllables} = this.props;
    return (
        <tbody>
            <tr>
                <td>{word}</td>
                <td>{syllables}</td>
            </tr>
        </tbody>
    );
  }
}

export default RhymeItem;