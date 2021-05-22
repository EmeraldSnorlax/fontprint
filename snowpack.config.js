// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	extends: "@snowpack/app-scripts-svelte",
	mount: {
		public: { url: "/", static: true },
		src: "/_dist_",
	},
	plugins: [
		[
			"@snowpack/plugin-build-script",
			{ cmd: "postcss", input: [".css"], output: [".css"] },
		],
		[
      'snowpack-plugin-minify-html',
      {
        htmlMinifierOptions: {
          sortAttributes: true,
          removeComments: true,
          html5: true,
          collapseWhitespace: true,
        },
      },
    ],
		"@snowpack/plugin-typescript",
	],
	packageOptions: {
		installTypes: true,
		polyfillNode: true,
	},
	devOptions: {
		port: 5000,
	},
	buildOptions: {
		clean: true,
	},
	optimize: {
		bundle: true,
		minify: true,
		treeshake: true,
		target: "es2020",
	},
};
