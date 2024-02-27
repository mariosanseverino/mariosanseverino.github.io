'use client';
import React from 'react';
import { useTheme } from 'next-themes';

export default function Logo() {
	const { theme } = useTheme();
	
	function switchLogo() {
		return theme === 'dark' ? './images/drawings/central-flames.png' : './images/drawings/central-flames-dark.png';
	}

	return (
		<img
			className='w-20 rounded-full transition-all duration-300 hover:scale-95'
			src={ switchLogo() }
			alt="Brand logo"
			id="logo-img"
		/>
	);
}