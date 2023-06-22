import React from 'react';

type DrawingDetails = {
    id: number;
    imageName: string;
    description: string;
  }

export default function DrawingCard(drawingDetails: DrawingDetails) {
	const { id, imageName, description } = drawingDetails;

	return(
		<figure key={id}>
			<img
				className='drawing-small'
				src={ `images/${imageName}.png` }
				id={imageName}
			/>
			<label htmlFor={imageName}>{ description }</label>
		</figure>
	);
}