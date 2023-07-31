'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { IProject } from '../projects/projects-list';

export default function ProjectCard(project: IProject) {
	const { theme } = useTheme();
	function projectClassName (stackName: string): string {
		switch (stackName) {
		case 'HTML5':
			return 'bg-HTML5';
		case 'CSS3':
			return 'bg-CSS3';
		case 'JavaScript':
			return 'bg-JavaScript';
		default:
			return 'bg-black';
		}
	}

	return (
		<div className={ `w-80 mb-6 mx-auto pb-4 text-center  text-white rounded-lg ${ theme === 'dark' ? 'bg-gray' : 'bg-black' }
		lg:w-96 lg:mx-6` }>
			<a href={ project.link} target='_blank' rel="noreferrer">
				<img
					src={ project.thumbnail}
					alt="Project Thumbnail"
					className='w-96 rounded-t-lg grayscale transition duration-500 ease-in-out transform hover:grayscale-0' />
				<h1
					className='my-1 font-semibold text-lg'>{ project.title }</h1>
			</a>
			{ project.stack.map((stack, index) => (
				<span
					key={ index }
					className={ `${projectClassName(stack)} text-black border p-1 mx-1 text-sm font-medium` }
				>
					{ stack }
				</span>
			))}
		</div>
	);
}
