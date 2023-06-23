'use client';
import React from 'react';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';
import { useTheme } from 'next-themes';

export default function Header() {
	const navMenu = ['Home','Drawings','Projects','Contact','About'];
	const { theme } = useTheme();
	
	function switchLogo() {
		return theme === 'dark' ? './images/central-flames.png' : './images/central-flames-dark.png';
	}

	return(
		<>
			<header className='block box-border my-6'>
				<figure className='w-full text-center'>
					<img
						className='w-[10rem] rounded-full mx-auto'
						src={ switchLogo() }
						alt="Brand logo"
						id="logo-img"
					></img>
					<ThemeSwitcher />
				</figure>
				<nav>
					<ul className='w-full text-center'>
						{navMenu.map((menuItem, index) => (
							<Link
								className='inline-block font-semibold p-2'
								href={ index > 0 ? `/${menuItem.toLowerCase()}` : '/' }
								key={index}
							>
								{menuItem}
							</Link>
			
						))}                 
					</ul>
				</nav>
			</header>
		</>
	);
}
