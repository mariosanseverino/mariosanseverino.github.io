import React from 'react';
import Link from 'next/link';
import { UnifrakturCook, Mohave } from 'next/font/google';
import { useTheme } from 'next-themes';

export const unifraktur = UnifrakturCook({
	weight: ['700'],
	display: 'swap',
	subsets: ['latin'],
	variable: '--unifraktur'
});

export const mohave = Mohave({
	weight: ['600'],
	display: 'swap',
	subsets: ['latin'],
	variable: '--mohave'
});

export default function Menu() {
	const { theme } = useTheme();
	const navMenu = ['Flashes','Tattoos','About'];

	return (
		<menu className={ `flex gap-4 text-xl uppercase ${ mohave.className } tracking-widest` }>
			{navMenu.map((menuItem, index) => (
				<Link
					className={ `flex items-center px-2 transition-all duration-300 opacity-30 hover:opacity-100 ${ theme === 'dark' ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white' }` }
					href={ index > 0 ? `/${menuItem.toLowerCase()}` : '/' }
					key={index}
				>
					<h1 className={ `uppercase ${ mohave.className }` }><span className={ unifraktur.className }>{ menuItem[0] }</span>{ menuItem.substring(1, menuItem.length ) }</h1>
				</Link>
			
			))}    
		</menu>
	);
}