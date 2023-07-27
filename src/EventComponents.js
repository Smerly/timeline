import React from 'react';
import { useParams } from 'react-router-dom';

function EventComponents() {
	const { slug } = useParams();
	console.log(slug);
	return (
		<div>
			<div>{slug}</div>
		</div>
	);
}

export default EventComponents;
