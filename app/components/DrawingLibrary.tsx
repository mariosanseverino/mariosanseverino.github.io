import React from 'react';
import { drawingsArray } from '../../public/images/drawingsList';
import DrawingCard from './DrawingCard';

export default function DrawingLibrary() {
	return(
		<>
			<div className='flex flex-row flex-wrap max-w-3xl mx-auto'>
				{drawingsArray.map((drawing) => (
					<DrawingCard
						key={drawing.id}
						id={drawing.id}
						imageName={drawing.imageName}
						description={drawing.description}
					/>
				))}
			</div>
		</>
	);
}

