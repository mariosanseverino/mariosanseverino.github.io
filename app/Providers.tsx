'use client';
import React, {
	createContext,
	useContext,
	useState,
	Dispatch,
	SetStateAction
} from 'react';
import { ThemeProvider } from 'next-themes';

export type DrawingsPropsTypes = {
	drawingName: string,
	zoomHidden: boolean,
	currentSheet: number,
	setDrawingName: Dispatch<SetStateAction<string>>,
	setZoomHidden: Dispatch<SetStateAction<boolean>>,
	setCurrentSheet: Dispatch<SetStateAction<number>>,
}

export const DrawingsContext = createContext({
	drawingName: '', zoomHidden: false
} as DrawingsPropsTypes);

export default function DrawingsProvider({ children }: { children: React.ReactNode }) {
	const [drawingName, setDrawingName] = useState('');
	const [zoomHidden, setZoomHidden] = useState(false);
	const [currentSheet, setCurrentSheet] = useState(1);
	
	const drawingZoomSettings = {
		drawingName,
		zoomHidden,
		currentSheet,
		setDrawingName,
		setZoomHidden,
		setCurrentSheet,
	};
	
	return (
		<DrawingsContext.Provider value={ drawingZoomSettings }>
			<ThemeProvider themes={['light', 'dark']} attribute='class'>
				{ children }
			</ThemeProvider>
		</DrawingsContext.Provider>
	);
}

export function useDrawingsContext() {
	return useContext(DrawingsContext);
}
