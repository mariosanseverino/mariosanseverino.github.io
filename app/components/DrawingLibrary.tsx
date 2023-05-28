import React from 'react';
import { drawingsArray } from '../../public/images/drawingsList';
import DrawingCard from './DrawingCard';

export default function DrawingLibrary() {
	return(
		<>
			{drawingsArray.map((drawing) => (
				<DrawingCard
					key={drawing.id}
					id={drawing.id}
					imageName={drawing.imageName}
					description={drawing.description}
				/>
			))}
		</>
	);
}

