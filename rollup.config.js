import svelte from 'rollup-plugin-svelte';

export default {
	input: 'src/index.js',
	output: {
		file: 'dist/bundle.js',
		format: 'umd'
	},
	plugins: [
		svelte()
	]
};
