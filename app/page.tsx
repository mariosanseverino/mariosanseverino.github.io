import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import './styles/reset.css';

export default function Home() {
	return(
		<div className='h-screen flex-col min-h-full'>
			<Header />
			<main className='w-full text-center'>
				<p className='mx-auto'>Home Page</p>
			</main>
			<Footer />
		</div>
	);
}
