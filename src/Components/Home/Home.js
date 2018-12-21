import React, { Component } from 'react';
import './home.css';
import {getRhymes} from '../../Routes/rhymes.services';
import RhymeItem from '../RhymeItem/RhymeItem';

class Home extends Component {
	constructor(props){
			super(props);
			this.state = {
					word: '',
					rhymes: []
			}
			this.handleGetRhymes = this.handleGetRhymes.bind(this);
			this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleGetRhymes(){
		let word = this.state.word;
		getRhymes(word)
			.then( res => {
				this.setState({ rhymes: res.data });
			});
	}

	handleInputChange(e){
    const key = e.target.name;
    let newState = this.state[key];
    newState = e.target.value;
    this.setState({ [key]: newState });
  }

  render() {
		console.log(this.state);
		let rhymes = this.state.rhymes;
		const displayRhymes = rhymes.map( word => {
			const index = rhymes.indexOf(word);
			return (<RhymeItem
								key={`rhyme${index}`}
								index={index}
								word={word.word}
								syllables={word.syllables}
			/>)
		})
    return (
      <div className="home-body">
        <h1>Lyric Rhymer</h1>
				<input placeholder='word' type='text' name='word' value={this.state.word} onChange={ e => { this.handleInputChange(e) }}/>
				<button onClick={this.handleGetRhymes}>Get Rhymes</button>

				<table className="rhyme-wrap">
            <thead>
                <tr>
                    <td> <strong>Word</strong> </td>
                    <td> <strong>Syllables</strong> </td>
                </tr>
            </thead>
						{displayRhymes}
				</table>
      </div>
    );
  }
}

export default Home;