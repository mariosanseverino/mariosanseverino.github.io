'use client';
import { useTheme } from 'next-themes';
import React from 'react';

export default function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();

	function switchTheme(): void {
		theme === 'dark' ? setTheme('light') : setTheme('dark');
	}

	return (
		<div className='my-4'>
			<p>The current theme is {theme}</p>
			<button onClick={switchTheme} className='my-2'>
				Switch
			</button>
		</div>
	);
}
