import React, {
	RefObject,
	useRef,
	useEffect,
	useLayoutEffect,
	useState,
	Ref,
} from 'react';
import debounce from 'lodash/debounce';

export function useResizeReact(ref) {
	const [state, setState] = useState({ width: 0, height: 0 });
	useEffect(() => {
		const getSize = debounce(() => {
			// console.log(ref);
			if (!ref || !ref.current) {
				return;
			}

			const width = ref.current.offsetWidth;
			const height = ref.current.offsetHeight;
			// console.log(width);
			// console.log(height);
			setState({
				width: width,
				height: height,
			});
		}, 250);

		window.addEventListener('resize', getSize);
		getSize();
		return () => window.removeEventListener('resize', getSize);
	}, [ref]);

	return state;
}
