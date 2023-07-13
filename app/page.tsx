'use client';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import DrawingLibrary from './components/DrawingLibrary';

export default function Home() {
	return(
		<div className='h-screen flex-col min-h-full'>
			<Header />
			<DrawingLibrary />
			<Footer />
		</div>
	);
}
