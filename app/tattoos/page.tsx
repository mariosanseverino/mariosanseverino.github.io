'use client';
import React from 'react';
import TattooCard from '../components/TattooCard';
import { tattooList } from '@/public/images/tattoos/tattooList';

export default function Tattoos() {
	return (
		<>
			<section className='w-full lg:flex lg:justify-center lg:mx-auto'>
				{ tattooList.map(({ name, date }, index) => (
					<TattooCard
						key={ index }
						name={ name }
						date={ date }
					/>
				))}
			</section>
		</>
	);
}