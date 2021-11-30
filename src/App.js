import React from 'react'
import './App.scss';
import Fretboard from './components/Fretboard';
import Key from './components/Key';
import Scale from './components/Scale';
import fretboardData from './data/fretboard.json'
import resolveScale from './utils/mapper';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			key: null,
			scale: null,
			fretboard: fretboardData,
			initialFretboard: fretboardData
		}
		this.resolveScale = resolveScale
	}


	setScaleData = (e) => {
		e.preventDefault()
		if(this.state.key && this.state.scale) {
			const clone = [];
			this.state.initialFretboard.forEach(i => clone.push({...i}))
			const resolved = this.resolveScale(this.state.key, this.state.scale, clone)
			
			this.setState({
				fretboard: resolved
			})
		}		
	}

	setKey = (data) => {
		this.setState({
			key: data
		})
	}

	setScale = (data) => [
		this.setState({
			scale: data
		})
	]
  	

	render() {
		return (
			<div className="container">
				<h1>Scale Mapper</h1>
				<form className="form" onSubmit={this.setScaleData}>
					<Key setKey={this.setKey} />
					<Scale setScale={this.setScale} />
					<button disabled={!this.state.key || !this.state.scale } className="form__button" type="submit">Generate Notes</button>
				</form>
				<Fretboard data={this.state.fretboard} chosenKey={this.state.key}/>
			</div>
		  );
		
	}

}

export default App;
