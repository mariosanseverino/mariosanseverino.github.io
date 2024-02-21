import React from 'react';
import Link from 'next/link';
import { UnifrakturMaguntia } from 'next/font/google';
import { useTheme } from 'next-themes';

const unifraktur = UnifrakturMaguntia({
	weight: ['400'],
	display: 'swap',
	subsets: ['latin'],
	variable: '--unifraktur'
});

export default function Menu() {
	const { theme } = useTheme();
	const navMenu = ['Drawings','Tattoos','About'];

	return (
		<menu className='flex gap-4 text-md uppercase'>
			{navMenu.map((menuItem, index) => (
				<Link
					className={ `px-2 transition-colors duration-300 ${ theme === 'dark' ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white' }` }
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