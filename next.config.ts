import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/fr',
				permanent: true // Use true for 308 permanent redirect, or false for 307 temporary redirect
			}
		];
	}
};

export default nextConfig;
