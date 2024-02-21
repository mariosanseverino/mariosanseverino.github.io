'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import Logo from './Logo';
import Menu from './Menu';
import { Raleway } from 'next/font/google';
import ThemeSwitcher from './ThemeSwitcher';

const raleway = Raleway({
	weight: ['400'],
	display: 'swap',
	subsets: ['latin'],
	variable: '--raleway'
});

export default function Header() {
	const { theme } = useTheme();
	
	return (
		<>
			<header className={ `flex items-center justify-center ${ raleway.className }` }>
				<div className='flex items-center gap-4'>
					<Logo />
					{/* <ThemeSwitcher>
						<p className='font-semibold'>s</p>
					</ThemeSwitcher> */}
				</div>
				{/* <Menu /> */}
			</header>
			<hr className={ `my-4 border-t-2 ${ theme === 'dark' ? 'border-white' : 'border-black' }` } />
		</>
	);
}
