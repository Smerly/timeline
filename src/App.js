import logo from './logo.svg';
import './App.css';
import D3timeline from './d3stuff/d3timeline';
import EventComponents from './EventComponents';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ReactPlayer from 'react-player';

function App() {
	return (
		<div className="App">
			<ReactPlayer
				className="background"
				// url="https://www.youtube.com/embed/bsntjm2xIkU"
				// url="https://www.youtube.com/embed/gyCvNhX3udA"
				url="https://www.youtube.com/embed/5wRWniH7rt8"
				// url="https://www.youtube.com/embed/fKRA63LXuLE"
				// url="https://www.youtube.com/embed/DJmGbClbAb0"
				loop={true}
				controls={false}
				muted={true}
				playing={true}
				playsinline={true}
				height={'1000px'}
				width={'2000px'}
			/>
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
