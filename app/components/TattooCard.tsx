import React from 'react';
import { TattooProps } from '../tattoos/types';

export default function TattooCard({ name, date }: TattooProps) {
	const nameSpace = name.replaceAll(' ', '-').toLowerCase();	

	return (
		<picture>
			<img
				src={ `/images/tattoos/${nameSpace}.jpg` }
				alt={ `${nameSpace} tattoo photography, done in ${date}` }
				className='grayscale transition duration-500 ease-in-out transform hover:grayscale-0'
			/>
		</picture>
	);
}