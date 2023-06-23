import React from 'react';

interface DrawingDetails {
    id: number;
    imageName: string;
    description: string;
  }

export default function DrawingCard(drawingDetails: DrawingDetails) {
	const { id, imageName, description } = drawingDetails;

	return(
		<figure key={id}>
			<img
				className='mr-1 ml-1'
				src={ `images/${imageName}.png` }
				id={imageName}
			/>
			<label htmlFor={imageName}>{ description }</label>
		</figure>
	);
}