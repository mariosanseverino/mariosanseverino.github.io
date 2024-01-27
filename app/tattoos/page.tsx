'use client';
import React from 'react';
import TattooCard from '../components/TattooCard';
import { tattooList } from '@/public/images/tattoos/tattooList';

export default function Tattoos() {
	return (
		<section className='px-2 py-4 mx-auto w-10/12 grid grid-cols-2 bg-white'>
			{ tattooList.map(({ name, date }, index) => (
				<TattooCard
					key={ index }
					name={ name }
					date={ date }
				/>
			))}
		</section>
	);
}