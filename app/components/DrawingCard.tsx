import React, { useState } from 'react';

type DrawingDetails = {
    id: number;
    imageName: string;
    description: string;
  }

export default function DrawingCard(drawingDetails: DrawingDetails) {
	const { id, imageName } = drawingDetails;
	const [popUp, setPopUp] = useState(true);

	function switchPopUp() {
		popUp === true ? setPopUp(false) : setPopUp(true);
	}

	return(
		<>
			<figure key={id} className='text-center mb-4 w-60 mx-2'>
				<img
					className='object-contain opacity-10 hover:transition hover:opacity-100 ease-in-out'
					src={ `images/${imageName}.png` }
					id={imageName}
					onClick={ switchPopUp }
				/>
			</figure>
			<figure
				className='absolute opacity-100 bg-black'
				hidden={ popUp }
			>
				<img src={ `images/${imageName}.png` } className='w-90' onClick={ switchPopUp } />
			</figure>
		</>
	);
}