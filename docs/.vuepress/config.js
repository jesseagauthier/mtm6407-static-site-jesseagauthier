module.exports = {
	bundler: '@vuepress/bundler-vite',
	bundlerConfig: {
		// Vite specific configurations
	},
	title: 'Jesse Gauthier - Web Developer',
	description: "Jesse Gauthier's Portfolio",
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Projects', link: '/projects/' },
			{ text: 'Contact', link: '/contact' },
		],
	},
}
