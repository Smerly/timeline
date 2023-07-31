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
			<Link to={`/`}>
				<img src={backArrow} width="70px" style={{ margin: '5vw' }} />
			</Link>
			<div>{slug}</div>
		</div>
	);
}

export default EventComponents;
