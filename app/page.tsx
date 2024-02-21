'use client';
import React from 'react';
import { unifraktur, mohave } from './components/Menu';
import SheetSelector from './components/SheetSelector';
import DrawingCard from './components/DrawingCard';

export default function Home() {
	return(
		<main className='flex flex-col items-center gap-8'>
			<div className='flex flex-col text-center'>
				<h1 className={ `uppercase text-6xl md:text-9xl ${ mohave.className }` }><span className={ unifraktur.className }>F</span>lashes</h1>
				<p className='uppercase text-lg'>select flash sheet</p>
			</div>
			<SheetSelector />
			<DrawingCard />
		</main>
	);
}
