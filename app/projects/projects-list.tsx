export interface IProject {
    title: string,
    thumbnail: string,
    link: string,
    stack: string[],
}

export const projectsList: IProject[] = [
	{
		title: 'Tribute Page',
		thumbnail: './thumbnails/tribute-page.jpg',
		link: 'https://codepen.io/mariosanseverino/pen/poVmrZv',
		stack: ['HTML', 'CSS']
	},
	{
		title: 'Skating Survey Form',
		thumbnail: './thumbnails/skating-survey.jpg',
		link: 'https://codepen.io/mariosanseverino/details/eYraEKZ',
		stack: ['HTML', 'CSS']
	}
];
