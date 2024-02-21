import React from 'react';
import Link from 'next/link';
import { UnifrakturMaguntia, Raleway } from 'next/font/google';

const unifraktur = UnifrakturMaguntia({
	weight: ['400'],
	display: 'swap',
	subsets: ['latin'],
	variable: '--unifraktur'
});

export default function Menu() {
	const navMenu = ['Drawings','Tattoos','About'];

	return (
		<menu className='flex flex-col gap-4'>
			{navMenu.map((menuItem, index) => (
				<Link
					className='inline-block uppercase'
					href={ index > 0 ? `/${menuItem.toLowerCase()}` : '/' }
					key={index}
				>
					{
						<span className={ `${ unifraktur.className } text-xl` }>{ menuItem[0] }</span>
					}
					{
						<span className='font-semibold'>{ menuItem.substring(1, menuItem.length) }</span>
					}
				</Link>
			
			))}    
		</menu>
	);
}