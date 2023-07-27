import logo from './logo.svg';
import './App.css';
import D3timeline from './d3stuff/d3timeline';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<div className="container">
					<h1 className="sakura-h1"> hi </h1>
					<Routes>
						<Route component={D3timeline} exact path="/" />
						<Route path="/something" />
					</Routes>
					<D3timeline />
				</div>
			</div>
		</Router>
	);
}

export default App;
