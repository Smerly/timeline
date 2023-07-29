import React from 'react';
import { useParams } from 'react-router-dom';
import backArrow from './images/340.png';
import { Link } from 'react-router-dom';

function EventComponents() {
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
