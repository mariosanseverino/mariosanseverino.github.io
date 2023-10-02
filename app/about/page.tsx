'use client';
import React from 'react';

export default function About() {
	return(
		<>
			<section className='text-center w-80 mx-auto lg:flex lg:row lg:w-full lg:justify-center lg:mx-auto'>
				<figure className='mt-4 lg:mt-0 lg:mr-8'>
					<img
						src='images/author.jpg'
						alt='Mario wearing a Whitney Houston T-shirt in a lavender light background'
						className='w-80 mx-auto rounded-t-lg lg:w-96'
					/>
					<figcaption className='mb-4 bg-black text-white py-2'>
                        Mário Augusto Martins Sanseverino
					</figcaption>
				</figure>
				<p className='w-80 text-justify mx-auto lg:w-96 lg:text-left lg:mx-0 lg:text-base lg:my-3'>
                    Mário was born on May 25th of 1993, in Porto Alegre/BRA. Has a warmth connection to arts, despite beign a logical problem solver and a technology lover.
                    Feels happy when healthy and enjoys his free time having fun skateboarding, playing videogames and meeting his friends for a drink.
                    Graduated with a bachelor&apos;s degree in Business Management in 2018.
                    During his life, worked not only as a Graphic Designer and as Paid Marketing Campaing Analyst, but also as a Tattoo Artist.
                    Lived in Sydney/AUS from 2018 to 2020 to experience life far from his home country.
                    There he studied English for IELTS at the MIT Institute, before joining the Warwick Institute of Australia, in the Website Development course.
                    Moved by his italian background, based on past generations of his family, in 2021, Mário did the Italian Essentials online course, by Italica.
                    Subject in which he is still learning through reading, movies and Duolingo.
                    Graduated in Web Development at Trybe to start his career as a front-end developer, focused on technologies such as HTML, CSS, NextJS and TypeScript.
				</p>    
			</section>
		</>
	);
}
