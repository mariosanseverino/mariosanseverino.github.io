import React from 'react';
import { drawingsArray } from '../../public/images/drawingsList';
import DrawingCard from './DrawingCard';

export default function DrawingLibrary() {
	return(
		<div className='grid-rows-3 w-full'>
			{drawingsArray.map((drawing) => (
				<DrawingCard
					key={drawing.id}
					id={drawing.id}
					imageName={drawing.imageName}
					description={drawing.description}
				/>
			))}
		</div>
	);
}

