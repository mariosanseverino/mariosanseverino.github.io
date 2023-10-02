'use client';
import React from 'react';

type DrawingDetails = {
    id: number;
    imageName: string;
    description: string;
}

export default function DrawingCard(drawingDetails: DrawingDetails): React.JSX.Element {
	const { id, imageName } = drawingDetails;

	return(
		<>
			<figure key={ id } className='text-center mb-4 mx-2'>
				<img
					className='w-80 rounded-lg opacity-10 hover:transition duration-500 ease-in-out hover:opacity-100'
					src={ `images/drawings/${imageName}.png` }
					id={ imageName }
				/>
			</figure>
		</>
	);
}
