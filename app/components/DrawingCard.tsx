import React from 'react';

type DrawingDetails = {
    id: number;
    imageName: string;
    description: string;
  }

export default function DrawingCard(drawingDetails: DrawingDetails) {
	const { id, imageName } = drawingDetails;

	return(
		<figure key={id} className='text-center mb-4 w-60 mx-2'>
			<img
				className='object-contain'
				src={ `images/${imageName}.png` }
				id={imageName}
			/>
		</figure>
	);
}