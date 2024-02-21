import React from 'react';
import { drawingsList } from '../libs/drawingsList';

export default function DrawingCardSmall(sheetNumber: number) {
	return (
		<>
			{ drawingsList.filter((drawing) => drawing.sheet === sheetNumber).map((drawing) => (
				<img
					src={ `/images/drawings/${drawing.imageName}.png` }
					className='opacity-30 transition-opacity duration-500 cursor-zoom-in hover:opacity-100'
					key={ drawing.id }
				/>
			)) }
		</>
	);
}