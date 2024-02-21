'use client';
import React from 'react';
import { unifraktur, mohave } from '../components/Menu';
import TattooLibrary from '../components/TattooLibrary';

export default function Tattoos() {
	return (
		<section className='h-full w-full p flex flex-col justify-center items-center gap-8'>
			<h1 className={ `uppercase text-6xl md:text-9xl ${ mohave.className }` }><span className={ unifraktur.className }>T</span>attoos</h1>
			<TattooLibrary />
		</section>
	);
}