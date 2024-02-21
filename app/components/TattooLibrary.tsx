import React from 'react';
import { tattooList } from '../libs/tattooList';
import TattooCard from './TattooCard';

export default function TattooLibrary() {
	return (
		<section className='flex flex-col gap-8 justify-center lg:flex-row lg:px-16 lg:flex-wrap'>
			{ tattooList.map(({ name, date }, index) => (
				<TattooCard
					key={ index }
					name={ name }
					date={ date }
				/>
			))}
		</section>
	);
}

/*
			{zoomHidden === true ? <DrawingZoom /> : ''}
			<div className='flex flex-row flex-wrap mx-auto justify-center'>
				{drawingsArray.map((drawing) => (
					<button
						key={drawing.id}
						onClick={() => selectDrawing(drawing.imageName)}
					>
						<DrawingCard
							id={drawing.id}
							imageName={drawing.imageName}
							description={drawing.description}
						/>
					</button>
				))}
			</div>

*/