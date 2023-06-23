'use client';
import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
	const navMenu = ['Home','Drawings','Projects','Contact','About'];
	return(
		<>
			<header className='block box-border my-6 text-center'>
				<Logo />
				<nav>
					<ul>
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
