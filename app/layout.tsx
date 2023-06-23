import React from 'react';
import Providers from './Providers';
import './styles/global.css';

export const metadata = {
	title: 'Mario\'s Portfolio',
	description: 'Generated by Next.js',
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<Providers>
				<body>{children}</body>
			</Providers>
		</html>
	);
}
