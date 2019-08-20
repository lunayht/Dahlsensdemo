import React from 'react';
import Header from '../components/Header';
import MainRouter from '../routers/MainRouter';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<MainRouter />
			</div>
		)
	}
}

export default App;
