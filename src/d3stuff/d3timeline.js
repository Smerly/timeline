import { useRef, useEffect } from 'react';
import { useResize } from '../resize.js';

function D3timeline() {
	const rootRef = useRef(HTMLDivElement | null);
	const size = useResize(rootRef);
	useEffect(() => {
		console.log('size', size);
	}, [size]);

	return (
		<div ref={rootRef} id="d3-timeline-widget">
			d3timeline
		</div>
	);
}

export default D3timeline;
