'use client';

import React from 'react';
import { IProject } from '../projects/projects-list';

export default function ProjectCard(project: IProject) {
	return (
		<div className='my-6 flex row justify-center text-center'>
			<a href={ project.link} target='_blank' rel="noreferrer">
				<img src={ project.thumbnail} alt="Project Thumbnail" className='w-96 rounded-lg' />
				<h1>{ project.title }</h1>
				{ project.stack.map((stack, index) => (
					<span
						key={ index }
						className={ `text-${stack} border border-${stack} p-3` }
					>
						{ stack }
					</span>
				))}
			</a>
		</div>
	);
}
