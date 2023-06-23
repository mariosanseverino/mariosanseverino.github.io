'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import ThemeSwitcher from './ThemeSwitcher';

export default function Logo() {
	const { theme } = useTheme();
	
	function switchLogo() {
		return theme === 'dark' ? './images/central-flames.png' : './images/central-flames-dark.png';
	}

	return (
		<ThemeSwitcher>
			<figure className='w-full text-center'>
				<img
					className='w-[10rem] rounded-full mx-auto transition-transform hover:scale-95'
					src={ switchLogo() }
					alt="Brand logo"
					id="logo-img"
				></img>
			</figure>
		</ThemeSwitcher>

	);
}