'use client';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DrawingLibrary from '../components/DrawingLibrary';
import '../styles/styles.css';
import '../styles/drawings.css';

export default function Drawings() {
	return(
		<>
			<Header />
			<DrawingLibrary />
			<Footer />
		</>
	);
}
