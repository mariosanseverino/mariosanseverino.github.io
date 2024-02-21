'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
	weight: ['400'],
	display: 'swap',
	subsets: ['latin'],
	variable: '--raleway'
});

export default function Footer() {
	const { theme } = useTheme();
	const socialMediaIcons = ['GitHub', 'Linkedin'];
	const darkTheme = theme === 'dark' ? '-dark' : '';

	return(
		<footer className={ `w-full flex flex-col justify-center gap-4 text-center text-sm ${ raleway.className }` }>
			<hr className={ `my-4 border-t-2 ${ theme === 'dark' ? 'border-white' : 'border-black' }` } />
			<p className='mx-auto w-80'>&copy; All content and website development made by Mário Sanseverino.</p>
			<section className='flex row mx-auto justify-center gap-4'>
				{ socialMediaIcons.map((icon, index) => (
					<a
						key={ index }
						href={ index === 0
							? 'https://github.com/mariosanseverino'
							: 'https://www.linkedin.com/in/marioams/' }
						target='_blank'
						rel='noreferrer'
					>
						<img
							src={ `./icons/${icon.toLocaleLowerCase()}${ darkTheme }.png` }
							className='w-6'
							alt="Social media icon"
						/>
					</a>
				)) }
			</section>
		</footer>
	);
}
