'use client';
import React from 'react';
import DrawingLibrary from './components/DrawingLibrary';

export default function Home() {
	return(
		<div className='flex-col min-h-full'>
			<DrawingLibrary />
		</div>
	);
}
