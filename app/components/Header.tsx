import React from 'react';
import Link from 'next/link';
import '../styles/reset.css';
import '../styles/styles.css';

export default function Header() {
	const navMenu = ['Home','Drawings','Projects','Contact','About'];
	return(
		<>
			<header>
				<figure className="logo-area">
					<img src="images/logo.png" alt="Brand logo" id="logo-img"></img>
				</figure>
				<nav>
					<ul className="nav-bar">
						{navMenu.map((menuItem, index) => (
							<Link
								className='nav-item'
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
