import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/styles.css';
import '../styles/drawings.css';

export default function Drawings() {
	const drawingsArray = [
		{
			id: 0,
			imageName: 'blood-knife',
			description: 'Blood Knife'
		},
		{
			id: 1,
			imageName: 'central-flames',
			description: 'Central Flames'
		},
		{
			id: 2,
			imageName: 'reaper',
			description: 'Reaper'
		},
		{
			id: 3,
			imageName: 'coffin',
			description: 'Coffin'
		},
		{
			id: 4,
			imageName: 'ritual-of-skulls',
			description: 'Ritual of Skulls'
		},
		{
			id: 5,
			imageName: 'horned-skull',
			description: 'Horned Skull'
		},
		{
			id: 6,
			imageName: 'skull-cowboy',
			description: 'Skull cowboy'
		},
		{
			id: 7,
			imageName: 'blood-sword',
			description: 'Blood sword'
		},
		{
			id: 8,
			imageName: 'heart-forging',
			description: 'Heart forging'
		},
		{
			id: 9,
			imageName: 'demon-hunter',
			description: 'Demon hunter'
		},
		{
			id: 10,
			imageName: 'dreaming',
			description: 'Dreaming'
		},
		{
			id: 11,
			imageName: 'deadline',
			description: 'Deadline'
		},
		{
			id: 12,
			imageName: 'nature',
			description: 'Nature'
		},
		{
			id: 13,
			imageName: 'charmer',
			description: 'Charmer'
		},
		{
			id: 14,
			imageName: 'sail',
			description: 'Sail'
		},
		{
			id: 15,
			imageName: 'lightning-panther',
			description: 'Lightning panther'
		},
		{
			id: 16,
			imageName: 'heart-forging',
			description: 'Heart forging'
		},
		{
			id: 17,
			imageName: 'ritual',
			description: 'Ritual'
		}
	];

	return(
		<>
			<Header />
			<main className="drawing-library">
				{ drawingsArray.map(({ imageName, description }) => (
					<>
						<img
							className='drawing-small'
							src={ `images/${imageName}.png` }
							id={imageName}
						/>
						<label htmlFor={imageName}>{ description }</label>
					</>
				)) }
			</main>
			<Footer />
		</>
	);
}
