import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import backArrow from './images/340.png';
import { Link } from 'react-router-dom';
import { useResize } from './resize';
import ReactPlayer from 'react-player';
import data from './data.json';
import topTimeline from './images/top-timeline.png'

function EventComponents() {
	const rootRef = useRef(HTMLDivElement | null);
	// getting the right size
	const size = useResize(rootRef);
	const whichVid = (str) => {
		if (str === "carousel") {
			return "https://drive.google.com/file/d/1P4grhg6BL5_NzG1O0xsX9-AAtqwpji-_/preview"
		} else if (str === "kdramakiss") {
			return "https://drive.google.com/file/d/16hEz-xJbSqmaTupEKFO3WO9SGLecFcDy/preview"
		} else if (str === "daisy-dance") {
			return "https://drive.google.com/file/d/1Vf0x8qNcMTjDLpBwPK_xmF4GKHY5Dka_/preview"
		} else if (str === "FAAS") {
			return "https://drive.google.com/file/d/1cR-MaKTP4q2yfl8pNlInPCaY-qSTX8Xd/preview"
		} else if (str === "tsukemen") {
			return "https://drive.google.com/file/d/1xyXd79ETJcz5Cuw0EqLK11vgLg2HeFg_/preview"
		// } else if (str == "kdramakiss") {
		// 	return ""
		}
	}
	
	

	console.log(data.events)
	console.log(size.width);
	const { slug } = useParams();
	let myData;
	for (let i = 0; i < data.events.length; i++) {
		if (data.events[i].title == slug) {
			console.log(data.events[i])
			myData = data.events[i]
		}
	}
	console.log(myData.images)
	console.log(slug);
	console.log(backArrow.naturalHeight);
	return (
		<div>
			<div className='overlay' />
			
			<Link to={`/`}>
				<img src={backArrow} style={{ width: '4vw', margin: '1vw', marginLeft: '4vw', marginTop: '3vw' }} />
			</Link>
			<div className='event-main container'>
				<h1 className='sakura-h1' style={{fontSize: '4vw'}}>{slug}</h1>
				<header className='sakura-header'>{myData.date}</header>
				<img src={topTimeline} style={{width: '40vw', margin: 'auto'}}/>
				<p className='sakura-p' style={{margin: '8vw'}}>
					{myData.description}
				</p>
				<div className='img-box'>
			{myData.images.map((each) => {
				return (
					<div>
						<img src={each} className='event-img' />
					</div>
				)
			})}

			{myData.videos.map((each) => {
				console.log(each)
				console.log(whichVid(each))
				return (
					<div>
						<iframe src={whichVid(each)} className='event-img' style={{width: 640, height:480}} ></iframe>
					</div>
				)
			})}
			</div>
			
			</div>
			
		</div>
	);
}

export default EventComponents;
