import React from 'react';
import { drawingsArray } from '../../public/images/drawings/drawingsList';
import DrawingCard from './DrawingCard';
import { useDrawingsContext } from '../Providers';
import { DrawingZoom } from './DrawingZoom';

export default function DrawingLibrary() {
	const { setDrawingName, zoomHidden, setZoomHidden } = useDrawingsContext();

	function selectDrawing(drawingName : string) : void {
		setDrawingName(drawingName);
		setZoomHidden(true);
	}

	return(
		<>
			{ zoomHidden === true ? <DrawingZoom /> : '' }
			<div className='flex flex-row flex-wrap mx-auto justify-center'>
				{drawingsArray.map((drawing) => (
					<button
						key={drawing.id}
						onClick={ () => selectDrawing(drawing.imageName) }
					>
						<DrawingCard
							id={drawing.id}
							imageName={drawing.imageName}
							description={drawing.description}
						/>
					</button>
				))}
			</div>
		</>
	);
}
