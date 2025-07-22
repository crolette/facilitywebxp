/* eslint-disable @next/next/next-script-for-ga */
import { Bruno_Ace, MuseoModerno } from 'next/font/google';
import './globals.css';
import AnalyticsScript from './components/AnalyticsScript';
import { Metadata } from 'next';

const bruno = Bruno_Ace({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-bruno'
});

const museo = MuseoModerno({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-museo'
});

export const metadata: Metadata = {
	title: 'Facility Web Experience',
	description: 'Facility Management and Web Development under one roof'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={` ${bruno.className} ${museo.className}`}>
			<head>
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-DBX3VB3DGJ'></script>
				<AnalyticsScript />
			</head>
			<body className={`antialiased relative`}>{children}</body>
		</html>
	);
}
