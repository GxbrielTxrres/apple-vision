/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	transpilePackages: [
		"@react-three/postprocessing",
		"@react-three/drei",
		"@react-three/fiber",
	],
};

module.exports = nextConfig;
