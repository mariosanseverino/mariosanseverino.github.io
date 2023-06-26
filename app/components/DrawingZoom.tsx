'use client';
import React from 'react';
import { useDrawingsContext } from '../Providers';

export function DrawingZoom() {
	const { drawingName, setZoomHidden } = useDrawingsContext();

	return (
		<figure
			className='w-full h-full opacity-100 bg-black mx-auto fixed top-0 left-0 z-50'
		>
			<img
				className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto my-auto w-96'
				src={ `images/${drawingName}.png` }
				onClick={ () => setZoomHidden(false) }
			/>
		</figure>
	);
}
