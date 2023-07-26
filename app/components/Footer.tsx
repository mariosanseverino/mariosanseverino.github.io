'use client';
import { useTheme } from 'next-themes';
import React from 'react';

export default function Footer() {
	const { theme } = useTheme();
	const socialMediaIcons = ['GitHub', 'Linkedin'];
	const darkTheme = theme === 'dark' ? '-dark' : '';

	return(
		<footer className='my-6 h-6 w-full text-center'>
			<p className='mx-auto'>&copy; All content and website development made by Mário Sanseverino.</p>
			<section className='flex row mx-auto justify-center'>
				{ socialMediaIcons.map((icon, index) => (
					<a
						key={ index }
						href={ index === 0
							? 'https://github.com/mariosanseverino'
							: 'https://www.linkedin.com/in/marioams/' }
						target='_blank'
						rel="noreferrer"
					>
						<img
							src={ `./icons/${icon.toLocaleLowerCase()}${ darkTheme }.png` }
							className='w-6 mx-3 mb-6 mt-3'
							alt="Social media icon"
						/>
					</a>
				)) }
			</section>
		</footer>
	);
}
