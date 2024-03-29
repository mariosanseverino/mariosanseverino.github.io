'use client';
import React from 'react';
import { unifraktur, mohave } from '../components/Menu';

export default function About() {
	return (
		<>
			<h1 className={ `uppercase text-center text-6xl md:text-9xl ${ mohave.className }` }><span className={ unifraktur.className }>A</span>bout</h1>
			<section className='w-80 mx-auto grid grid-cols-1 gap-y-4 md:w-[738px] md:grid-cols-2 md:gap-6 2xl:w-full 2xl:grid-cols-4 2xl:gap-6'>
				<figure className='order-1 items-center flex flex-col md:justify-self-end 2xl:justify-self-end'>
					<img
						src='images/tattooing.jpg'
						alt='Mário tattoing in his house, wearing a white cap backwards'
						className='w-80 rounded-t-lg md:w-72 2xl:w-72'
					/>
					<figcaption className='w-80 bg-black text-white py-2 text-center md:w-72 2xl:w-72'>
						Mario tattoing
					</figcaption>
				</figure>
				<p className='text-justify order-2 w-80 md:w-72 2xl:w-72 2xl:justify-self-end'>
                    I was born on May 25th, 1993, in Porto Alegre, Brazil. From a young age, I&apos;ve been immersed in the world of arts, drawing inspiration from sources like &quot;Magic: The Gathering&quot;, &quot;The Lord of the Rings&quot;, and various RPG games. The intricate designs, fantastical creatures, and imaginative worlds found in these games have greatly influenced my artistic journey. Despite also being a logical problem solver and a technology enthusiast, my heart truly belongs to the world of creativity. I find immense joy in expressing myself through my art. When I&apos;m not immersed in creating tattoos, I can be found playing with my dog, coding stuff like this page, skateboarding, indulging in video games, or enjoying a drink with friends. In 2018, I earned my bachelor&apos;s degree in Business Management, but my true calling lies in the realm of artistry.
				</p>
				<p className='text-justify order-4 w-80 md:w-72 md:order-3 md:justify-self-end 2xl:w-72 2xl:justify-self-start'>
                    Over the years, I&apos;ve had the opportunity to wear different hats – as a Graphic Designer, Paid Marketing Campaign Analyst and now, as a Web Developer. However, my most profound connection is with arts, drawing and tattoing. My artistic style is deeply influenced by the aesthetics of Gothic art, which resonates with my love for the mystical and mysterious. This influence, manifests in my tattoo designs, creating unique and captivating characters, objects, scenes and more. From 2018 to 2020, I took a bold step and lived in Sydney, Australia, to explore life in a new cultural context. It was during this time that I got my first real tattoo, a testament to my passion for this art form. Since then, my journey as a tattoo artist has been a continuous and inspiring adventure, fueled by my love for art and the worlds that have shaped me.
				</p>
				<figure className='order-3 flex flex-col items-center md:justify-self-start md:order-4 2xl:justify-self-start'>
					<img
						src='images/tools.jpg'
						alt='Mario&apos;s pen and tablet ready to draw'
						className='w-80 rounded-t-lg md:w-72 2xl:w-72'
					/>
					<figcaption className='w-80 bg-black text-white py-2 text-center md:w-72 2xl:w-72'>
						Mario&apos;s drawing tools
					</figcaption>
				</figure>
			</section>
		</>
	);
}
