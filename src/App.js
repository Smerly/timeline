import logo from './logo.svg';
import './App.css';
import D3timeline from './d3stuff/d3timeline';
import EventComponents from './EventComponents';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<div className="container">
				{/* <h1 className="sakura-h1"> hi </h1> */}
				<Router>
					<Routes>
						<Route exact path="/" Component={D3timeline} />
						<Route path="/event/:slug" Component={EventComponents} />
					</Routes>
				</Router>
			</div>
		</div>
	);
}

export default App;
