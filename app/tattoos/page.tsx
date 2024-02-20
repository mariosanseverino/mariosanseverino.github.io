'use client';
import React from 'react';
import TattooCard from '../components/TattooCard';
import { tattooList } from '@/public/images/tattoos/tattooList';

export default function Tattoos() {
	return (
		<section className='w-10/12 px-2 py-4 mx-auto grid grid-cols-2 bg-white gap-2 lg:grid-cols-3 lg:px-4 lg:gap-4'>
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