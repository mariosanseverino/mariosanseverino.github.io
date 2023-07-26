'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import { IProject, projectsList } from './projects-list';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
	return (
		<>
			<Header />
			<section>
				{ projectsList().map((project: IProject, index: number) => (
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