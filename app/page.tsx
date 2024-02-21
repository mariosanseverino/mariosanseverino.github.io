'use client';
import React from 'react';

import SheetSelector from './components/SheetSelector';
import DrawingCard from './components/DrawingCard';

export default function Home() {
	return(
		<main className='flex flex-col gap-8'>
			<SheetSelector />
			<DrawingCard />
		</main>
	);
}
