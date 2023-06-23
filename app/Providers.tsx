'use client';
import React from 'react';
import { ThemeProvider } from 'next-themes';
import { Props } from './components/ThemeSwitcher';

export default function Providers({ children } : Props) {
	return <ThemeProvider themes={['dark', 'light']} attribute='class'>{ children }</ThemeProvider>;
}
