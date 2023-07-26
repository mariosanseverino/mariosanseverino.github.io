export interface IProject {
    title: string,
    thumbnail: string,
    link: string,
    stack: Stacks[],
}

enum Stacks {
	HTML5 = 'HTML5',
	CSS3 = 'CSS3',
	JavaScript = 'JavaScript',
	TypeScript = 'TypeScript',
	NextJS = 'NextJS',
	Tailwind = 'Tailwind'
}

export function projectsList(): IProject[] {
	const { HTML5, CSS3 } = Stacks;
	return (
		[
			{
				title: 'Tribute Page',
				thumbnail: './thumbnails/tribute-page.jpg',
				link: 'https://codepen.io/mariosanseverino/pen/poVmrZv',
				stack: [HTML5, CSS3]
			},
			{
				title: 'Skating Survey Form',
				thumbnail: './thumbnails/skating-survey.jpg',
				link: 'https://codepen.io/mariosanseverino/details/eYraEKZ',
				stack: [HTML5, CSS3]
			}
		]
	);
}

