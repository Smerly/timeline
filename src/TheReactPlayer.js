import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';

function TheReactPlayer(size) {
	const [time, setTime] = useState(new Date());
	const { width, height } = size;
	console.log(width);
	console.log(window.innerWidth);
	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setTime(new Date());
	// 	}, 1000);
	// 	return () => clearInterval(interval);
	// }, []);
	return (
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
			// height={'1000px'}
			// width={'2000px'}
			// height={window.innerHeight + 300}
			// width={window.innerWidth + 1000}
			// style={{ marginLeft: -window.innerWidth / 3 }}
			height={'100%'}
			width={'100%'}
			style={{ marginLeft: -window.innerWidth / 3 }}
			// width={size + 1000}
			// height={size + 1000}
		/>
	);
}

export default TheReactPlayer;
