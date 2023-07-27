import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResize } from '../resize.js';
import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import timelineDrawing from '../drawings/timelineDrawing';
import { drawTimelineEvents } from '../drawings/drawTimelineEvents';

function D3timeline() {
	const navigate = useNavigate();
	console.log(new Date('2023, 01, 01').getTime());

	const data = [
		{
			color: 'yellow',
			ts: 1659769200000,
			title: 'August 6th 2022',
		},
		{
			color: 'yellow',
			ts: 1662015600000,
			title: 'September 1st 2022',
		},
		{
			color: 'yellow',
			ts: 1664607600000,
			title: 'October 1st 2022',
		},
		{
			color: 'yellow',
			ts: 1667286000000,
			title: 'November 1st 2022',
		},
		{
			color: 'yellow',
			ts: 1669881600000,
			title: 'December 1st 2022',
		},
		{
			color: 'yellow',
			ts: 1672560000000,
			title: 'January 1st 2022',
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
	const drawTimelineEvents = (rootElement, windowSize, timelineEvents) => {
		const { width, height } = windowSize;

		const clickHandler = (d) => {
			console.log('<-- Inside Event Handler function --->');
			console.log(d.title);
			navigate(`/event/${d.title}`);
		};

		const PADDING = width / 10;
		const scale = scaleLinear()
			.domain([
				timelineEvents[0].ts,
				timelineEvents[timelineEvents.length - 1].ts,
			])
			.range([0 + PADDING, width - PADDING]);

		select(rootElement)
			.select('svg')
			.append('g')
			.selectAll('.timeline-event')
			.data(timelineEvents)
			.enter()
			.append('circle')
			.attr('r', 8)
			.attr('class', 'timeline-event')
			.attr('cy', function (d) {
				return 0;
			})
			.attr('cx', function (d, i) {
				// console.log('---', scale(d.ts));
				return scale(d.ts);
			})
			.attr('transform', `translate(${0}, ${height * (1 / 2)})`)
			.attr('fill', function (d) {
				return d.color;
			})
			.attr('stroke', 'rgba(0,0,0,1)')
			.on('mouseover', function (d, i) {
				select(rootElement)
					.select('svg')
					.append('text')
					.attr('class', 'timeline-event-text')
					.attr('font-family', 'Arial')
					.attr('font-size', '16px')
					.attr('y', height * (1 / 2) - 16 - 10)
					.attr('x', function (_d) {
						return scale(d.target.__data__.ts);
					})
					.attr('text-anchor', function (innerD) {
						if (scale(d.target.__data__.ts) > width * (3 / 4)) {
							return 'end';
						} else if (scale(d.target.__data__.ts) > width / 2) {
							return 'middle';
						} else {
							return 'start';
						}
					})
					.style('pointer-events', 'visible')
					.style('fill', '#004669')
					.style('font-weight', 'bold')
					.text(`${i.title}`)
					.append('tspan')
					.text(`${new Date(i.ts).toLocaleString()}`)
					.attr('x', scale(d.target.__data__.ts))
					.attr('y', height * (1 / 2) - 32 - 10);
			})
			.on('click', (d, i) => {
				console.log(i);
				clickHandler(i);
			})
			.on('mouseout', function (d, i) {
				select(rootElement).selectAll('text.timeline-event-text').remove();
			});
	};
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

	return <div ref={rootRef} style={{ height: 500 }}></div>;
}

export default D3timeline;
