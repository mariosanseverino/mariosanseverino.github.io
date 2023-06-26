'use client';
import React, {
	createContext,
	useState,
	useContext,
	Dispatch,
	SetStateAction
} from 'react';
import { ThemeProvider } from 'next-themes';
import { Props } from './components/ThemeSwitcher';

export type DrawingsPropsTypes = {
	drawingName: string,
	zoomHidden: boolean,
	setDrawingName: Dispatch<SetStateAction<string>>,
	setZoomHidden: Dispatch<SetStateAction<boolean>>,
}

export const DrawingsContext = createContext({
	drawingName: '', zoomHidden: false
} as DrawingsPropsTypes);

export default function DrawingsProvider({ children } : Props) {
	const [drawingName, setDrawingName] = useState('');
	const [zoomHidden, setZoomHidden] = useState(false);

	const drawingZoomSettings = {
		drawingName,
		zoomHidden,
		setDrawingName,
		setZoomHidden,
	};

	return (
		<DrawingsContext.Provider value={ drawingZoomSettings }>
			<ThemeProvider themes={['dark', 'light']} attribute='class'>
				{ children }
			</ThemeProvider>
		</DrawingsContext.Provider>
	);
}

export function useDrawingsContext() {
	return useContext(DrawingsContext);
}
