import React, {
	RefObject,
	useRef,
	useEffect,
	useLayoutEffect,
	useState,
	Ref,
} from 'react';
import debounce from 'lodash/debounce';

export function useResize(ref) {
	const [state, setState] = useState({ width: 0, height: 0 });
	useEffect(() => {
		const getSize = debounce(() => {
			if (!ref || !ref.current) {
				return;
			}

			const width = ref.current.offsetWidth;
			const height = ref.current.offsetHeight;
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
