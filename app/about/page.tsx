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
					I was born on May 25th, 1993, in Porto Alegre, Brazil. From a young age, I&apos;ve been immersed in the world of arts, drawing inspiration from sources like &quot;Magic: The Gathering&quot;, &quot;The Lord of the Rings&quot;, and various RPG games, which I&apos;ve been passionate about since my youth. The intricate designs, fantastical creatures, and imaginative worlds found in these games have greatly influenced my artistic journey.
					Despite also being a logical problem solver and a technology enthusiast, my heart truly belongs to the world of creativity. I find immense joy in expressing myself through my art. When I&apos;m not immersed in creating tattoos, I can be found playing with my dog, coding stuff like this page, skateboarding, indulging in video games, or enjoying a drink with friends.
					In 2018, I earned my bachelor&apo;s degree in Business Management, but my true calling lies in the realm of artistry. Over the years, I&apos;ve had the opportunity to wear different hats – as a Graphic Designer and a Paid Marketing Campaign Analyst. However, my most profound connection is with the art of tattooing.
					My artistic style is deeply influenced by the aesthetics of Gothic art, which resonates with my love for the mystical and mysterious. This influence, manifests in my tattoo designs, creating unique and captivating characters, objects, scenes and more.
					From 2018 to 2020, I took a bold step and lived in Sydney, Australia, to explore life in a new cultural context. It was during this time that I got my first real tattoo, a testament to my passion for this art form. Since then, my journey as a tattoo artist has been a continuous and inspiring adventure, fueled by my love for art and the worlds that have shaped me.
				</p>    
			</section>
		</>
	);
}
