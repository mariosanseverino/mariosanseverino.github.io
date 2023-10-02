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
                    I was born on May 25th of 1993, in Porto Alegre/BRA. From birth, connected to arts, despite beign a logical problem solver and a technology lover.
                    Always happy when healthy and enjoying free time having fun skateboarding, playing videogames and meeting his friends for a drink.
                    Graduated with a bachelor&apos;s degree in Business Management in 2018.
                    During my life, I worked not only as a Graphic Designer and as Paid Marketing Campaing Analyst, but also as a Tattoo Artist.
                    Lived in Sydney/AUS from 2018 to 2020 to experience life far from his home country.
					In Sydney, I have got my first real one. And from there, I just did not stop.
				</p>    
			</section>
		</>
	);
}
