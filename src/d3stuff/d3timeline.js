import { useRef, useEffect } from 'react';
import { useResize } from '../resize.js';
import { select } from 'd3-selection';
import timelineDrawing from '../drawings/timelineDrawing';
import { drawTimelineEvents } from '../drawings/drawTimelineEvents';

function D3timeline() {
	console.log(new Date('2023, 01, 01').getTime());

	const data = [
		{
			color: 'yellow',
			ts: 1659769200000,
			title: 'August 6th 2022',
		},
		{
			color: 'green',
			ts: 1660978800000,
			title: 'August 20th 2022',
		},
		{
			color: 'orange',
			ts: 1660978800000,
			title: 'October 20th, 2022',
		},
		{
			color: 'orange',
			ts: 1660978800000,
			title: 'October 20th, 2022',
		},
		{
			color: 'orange',
			ts: 1660978800000,
			title: 'October 20th, 2022',
		},
		{
			color: 'orange',
			ts: 1660978800000,
			title: 'October 20th, 2022',
		},
		{
			color: 'orange',
			ts: 1660978800000,
			title: 'October 20th, 2022',
		},

		{
			color: 'green',
			ts: 1682924400000,
			title: 'May 1st 2023',
		},
		{
			color: 'yellow',
			ts: 1684566000000,
			title: 'May 20th 2023',
		},
		{
			color: 'red',
			ts: 1691305200000,
			title: 'Aug 6 2023',
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
			drawTimelineEvents(rootRef.current, size, data);
		}
	}, [size]);

	return (
		<div ref={rootRef} style={{ height: 500 }}>
			d3timeline
		</div>
	);
}

export default D3timeline;
