'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { IProject } from '../projects/projects-list';

export default function ProjectCard(project: IProject) {
	const { theme } = useTheme();

	return (
		<div className={ `w-96 mb-6 mx-auto justify-center pb-4 text-center bg-black text-white rounded-lg ${ theme === 'dark' ? 'drop-shadow-md' : '' }` }>
			<a href={ project.link} target='_blank' rel="noreferrer">
				<img src={ project.thumbnail} alt="Project Thumbnail" className='w-96 rounded-t-lg' />
				<h1 className='my-1 font-semibold text-lg'>{ project.title }</h1>
				{ project.stack.map((stack, index) => (
					<span
						key={ index }
						className={ `text-black border bg-${ stack } p-1 mx-1 text-sm font-medium` }
					>
						{ stack }
					</span>
				))}
			</a>
		</div>
	);
}
