import ReactPlayer from 'react-player';

function TheReactPlayer(size) {
	const { width, height } = size;
	console.log(width);
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
			height={'1000px'}
			width={'2000px'}
			style={{ marginLeft: -200 }}
			// width={size + 1000}
			// height={size + 1000}
		/>
	);
}

export default TheReactPlayer;
