import React from 'react';
import { useDrawingsContext } from '../Providers';

export default function SheetSelector() {
	const flashSheets = ['sheet1', 'sheet2', 'sheet3', 'sheet4'];
	const { currentSheet, setCurrentSheet } = useDrawingsContext();

	return (
		<ul className='w-full h-16 flex gap-4 items-center justify-between'>
			{ flashSheets.map((sheet, index) => (
				<img src={ `/images/drawings/${sheet}.png` }
					className={ `w-16 transition-opacity duration-300 ${currentSheet === index + 1 ? 'opacity-100' : 'opacity-20' }` }
					alt='Flash sheet'
					key={ index }
					onClick={ () => setCurrentSheet(index + 1) } />
			)) }
		</ul>
	);
}