import { select } from 'd3-selection';
import { drawTimeline } from './drawTimeline';

function timelineDrawing(rootElement, windowSize, timelineEvents) {
	// To know how big it should be
	const { width, height } = windowSize;

	// Drawing in box
	// select(rootElement)
	// 	.select('svg')
	// 	.append('rect')
	// 	.attr('width', width)
	// 	.attr('height', height)
	// 	.attr('fill', '#61DAFB');

	drawTimeline(rootElement, windowSize, timelineEvents);
}

export default timelineDrawing;
