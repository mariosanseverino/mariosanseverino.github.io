'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { IProject } from '../projects/projects-list';

export default function ProjectCard(project: IProject) {
	const { theme } = useTheme();
	const projectClassName = (stackName: string): string => `text-black border bg-${stackName} p-1 mx-1 text-sm font-medium`;

	return (
		<div className={ `w-80 mb-6 mx-auto pb-4 text-center  text-white rounded-lg ${ theme === 'dark' ? 'bg-gray' : 'bg-black' }
		md:w-96 md:mx-6` }>
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
					className={ projectClassName(stack) }
				>
					{ stack }
				</span>
			))}
		</div>
	);
}
