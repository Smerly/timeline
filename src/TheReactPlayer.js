import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useWindowSize } from './useWindowSize';
import background from './images/background.mp4';

function TheReactPlayer(size) {
	const [time, setTime] = useState(new Date());
	// const { width, height } = size;
	// console.log(width);
	// console.log(window.innerWidth);
	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setTime(new Date());
	// 	}, 1000);
	// 	return () => clearInterval(interval);
	// }, []);
	const [width, height] = useWindowSize();
	const xtraHeight = height / 8;
	const xtraWidth = width / 8;
	console.log(width);
	console.log(height);
	return (
		// <div className="background-support">
		<ReactPlayer
			className="background"
			// url="https://www.youtube.com/embed/bsntjm2xIkU"
			// url="https://www.youtube.com/embed/gyCvNhX3udA"
			url={background}
			// url="https://www.youtube.com/embed/fKRA63LXuLE"
			// url="https://www.youtube.com/embed/DJmGbClbAb0"
			loop={true}
			controls={false}
			muted={true}
			playing={true}
			playsinline={true}
			// height={'1000px'}
			// width={'2000px'}
			// height={window.innerHeight + 300}
			// width={window.innerWidth + 400}
			// style={{ marginLeft: -window.innerWidth / 3 }}
			// height={'189%'}
			// width={'177%'}
			// height={height + xtraHeight}
			// width={width + xtraWidth}
			// style={{ marginLeft: -xtraWidth / 2 }}
			height={'auto'}
			width={'100%'}

			// style={{ marginLeft: -window.innerWidth / 3 }}
			// width={size + 1000}
			// height={size + 1000}
		/>
		// </div>
	);
}

export default TheReactPlayer;
