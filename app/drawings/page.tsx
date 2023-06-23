'use client';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DrawingLibrary from '../components/DrawingLibrary';

export default function Drawings() {
	return(
		<>
			<Header />
			<DrawingLibrary />
			<Footer />
		</>
	);
}
