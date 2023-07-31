// import { select } from 'd3-selection';
// import { axisBottom } from 'd3-axis';
// import { scaleLinear } from 'd3-scale';
// import { drawTimelineEvents } from './drawTimelineEvents';
// import { timeMonth } from 'd3-time';
// import * as d3 from 'd3';

// export const drawTimeline = (rootElement, windowSize, timelineEvents) => {
// 	const { width, height } = windowSize;

// 	const start = new Date('2022, 08, 06');
// 	const end = new Date('2023, 08, 06');
// 	// console.log(timelineEvents[0].ts);
// 	// console.log(timelineEvents[timelineEvents.length - 1].ts);
// 	const PADDING = width / 10;
// 	const scale = scaleLinear()
// 		.domain([
// 			timelineEvents[0].ts,
// 			timelineEvents[timelineEvents.length - 1].ts,
// 		])
// 		.range([0 + PADDING, width - PADDING])
// 		.nice();
// 	const axis = axisBottom(scale)
// 		.ticks()
// 		.tickFormat((d, i) => {
// 			console.log('d', d);
// 			console.log('i', i);

// 			const date = new Date(timelineEvents[i].ts);
// 			// const date = new Date(d);

// 			console.log('timeo', date.getTime());
// 			return `${date.toLocaleDateString()}`;
// 		});
// 	// .tickFormat(d3.timeFormat('%b'));
// 	// .tickValues([
// 	// 	'Jan',
// 	// 	'Feb',
// 	// 	'Mar',
// 	// 	'Apr',
// 	// 	'May',
// 	// 	'Jun',
// 	// 	'Jul',
// 	// 	'Aug',
// 	// 	'Sep',
// 	// 	'Oct',
// 	// 	'Nov',
// 	// 	'Dec',
// 	// ]);

// 	select(rootElement)
// 		.select('svg')
// 		.append('g')
// 		.attr('class', 'x-axis')
// 		.attr('width', width)
// 		.attr('transform', `translate(${0}, ${height * (1 / 2)})`)
// 		.call(axis)
// 		.selectAll('text')
// 		.style('text-anchor', 'end')
// 		.style('font-size', '16px')
// 		.attr('dx', '-2em')
// 		.attr('dy', '1em')
// 		.attr('transform', 'rotate(-65)');
// 	drawTimelineEvents(rootElement, windowSize, timelineEvents);
// };

import { select } from 'd3-selection';
import { axisBottom } from 'd3-axis';
import { scaleLinear } from 'd3-scale';
import { drawTimelineEvents } from './drawTimelineEvents';

export const drawTimeline = (rootElement, windowSize, timelineEvents) => {
	const { width, height } = windowSize;

	const PADDING = width / 8;
	const scale = scaleLinear()
		.domain([
			timelineEvents[0].ts,
			timelineEvents[timelineEvents.length - 1].ts,
		])
		.range([0 + PADDING, width - PADDING])
		.nice();
	const axis = axisBottom(scale)
		.ticks()
		.tickFormat((d) => {
			// console.log('d', d);
			const date = new Date(d);
			// return `${date.toLocaleDateString()}`;
		});

	// Text
	select(rootElement)
		.select('svg')
		.append('g')
		.attr('class', 'x-axis')
		.attr('width', width)
		.attr('transform', `translate(${0}, ${height * (1 / 2)})`)
		.attr('class', 'axisPink')
		.call(axis);
	// .selectAll('text')
	// .style('text-anchor', 'end')
	// .style('font-size', '16px')
	// .attr('dx', '-2em')
	// .attr('dy', '1em')
	// .attr('transform', 'rotate(-65)');
	// drawTimelineEvents(rootElement, windowSize, timelineEvents);
};
