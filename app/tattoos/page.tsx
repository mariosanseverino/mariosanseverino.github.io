'use client';
import React from 'react';
import TattooLibrary from '../components/TattooLibrary';

export default function Tattoos() {
	return (
		<section className='h-full w-full p flex justify-center items-center'>
			<TattooLibrary />
		</section>
	);
}