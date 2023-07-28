'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import { IProject, projectsList } from './projects-list';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
	const allProjects = projectsList();
	return (
		<>
			<Header />
			<section className='md:w-full md:flex md:justify-center md:mx-auto'>
				{ allProjects.map((project: IProject, index: number) => (
					<ProjectCard
						key={ index }
						title={ project.title }
						link={ project.link }
						thumbnail={ project.thumbnail }
						stack={ project.stack }
					/>
				))}
			</section>
			<Footer />
		</>
	);
}