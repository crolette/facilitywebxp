/* eslint-disable @next/next/next-script-for-ga */
import { Newsreader, Lexend } from 'next/font/google';
import './globals.css';
import AnalyticsScript from './components/AnalyticsScript';
import { Metadata } from 'next';

const newsReader = Newsreader({
	subsets: ['latin'],
	weight: ['200', '300', '400'],
	variable: '--font-newsreader'
});
const lexend = Lexend({
	subsets: ['latin'],
	variable: '--font-lexend'
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
			className={` ${newsReader.className} ${lexend.className}`}>
			<head>
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-DBX3VB3DGJ'></script>
				<AnalyticsScript />
			</head>
			<body className={`antialiased`}>{children}</body>
		</html>
	);
}
