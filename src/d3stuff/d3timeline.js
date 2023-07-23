import { useRef, useEffect } from 'react';
import { useResize } from '../resize.js';
import { select } from 'd3-selection';
import timelineDrawing from '../drawings/timelineDrawing';

function D3timeline() {
	const data = [
		{
			color: 'red',
			ts: Date.now(),
			title: 'hi',
		},
		{
			color: 'yellow',
			ts: 1690128079017,
			title: 'lol',
		},
		{
			color: 'blue',
			ts: 1690145779087,
			title: 'yo',
		},
	];
	// Getting the size of the root Div element (being the screen)
	const rootRef = useRef(HTMLDivElement | null);
	// getting the right size
	const size = useResize(rootRef);
	useEffect(() => {
		select(rootRef.current)?.select('svg').remove();
		console.log(size);
		if (size) {
			select(rootRef.current)
				.append('svg')
				.attr('width', size.width)
				.attr('height', size.height);
			timelineDrawing(rootRef.current, size, data);
		}
	}, [size]);

	return (
		<div ref={rootRef} id="d3-timeline-widget">
			d3timeline
		</div>
	);
}

export default D3timeline;
