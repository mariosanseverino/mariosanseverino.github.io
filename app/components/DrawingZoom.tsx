'use client';
import React from 'react';
import { useDrawingsContext } from '../Providers';
import { useTheme } from 'next-themes';

export function DrawingZoom() {
	const { drawingName, setZoomHidden } = useDrawingsContext();
	const { theme } = useTheme();

	return (
		<figure
			className={ theme === 'dark'
				? 'w-full h-full opacity-100 bg-black mx-auto fixed top-0 left-0 z-50'
				: 'w-full h-full opacity-100 bg-white mx-auto fixed top-0 left-0 z-50'
			}
		>
			<img
				className='w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto my-auto'
				src={ `images/${drawingName}.png` }
				onClick={ () => setZoomHidden(false) }
			/>
		</figure>
	);
}
