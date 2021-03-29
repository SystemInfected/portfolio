const isProd = process.env.NODE_ENV === 'production'

module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})

		return config
	},
	assetPrefix: isProd ? 'https://systeminfected.github.io/portfolio/' : '',
}
