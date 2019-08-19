import React from 'react';
import '../css/App.css';
import { clickscan, checkclientlocalip } from '../actions/crudAction';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			localip: null
		}
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		checkclientlocalip()
			.then(res => {
				this.setState({
					localip: res.data.localip
				})
			})
	}

	handleClick() {
		clickscan('startscan')
	}

	render() {
		return (
			<div className="App">
				<h1>Your IP address is: {this.state.localip}</h1>
				<button onClick={this.handleClick}>Scan</button>
			</div>
		)
	}
}

export default App;
