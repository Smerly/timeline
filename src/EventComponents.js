import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import backArrow from './images/340.png';
import { Link } from 'react-router-dom';
import { useResize } from './resize';

function EventComponents() {
	const rootRef = useRef(HTMLDivElement | null);
	// getting the right size
	const size = useResize(rootRef);
	console.log(size.width);
	const { slug } = useParams();
	console.log(slug);
	console.log(backArrow.naturalHeight);
	return (
		<div>
			<div className='overlay' />
			
			<Link to={`/`}>
				<img src={backArrow} style={{ width: '4vw', margin: '1vw', marginLeft: '4vw', marginTop: '3vw' }} />
			</Link>
			<div className='event-main container'>{slug}</div>
		</div>
	);
}

export default EventComponents;
