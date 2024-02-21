'use client';
import React from 'react';
import { useDrawingsContext } from '../Providers';

export default function DrawingCard() {
	const { currentSheet } = useDrawingsContext();

	return(
		<img src={ `/images/drawings/sheet${currentSheet}.png` } className='w-full' />
	);
}
