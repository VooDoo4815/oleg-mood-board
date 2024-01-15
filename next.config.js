/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    webpack(config, options) {
        const { isServer } = options;
        config.module.rules.push({
            test: /\.(ogg|mp3|wav|webm)$/i,
            exclude: config.exclude,
            use: [
                {
                    loader: require.resolve("url-loader"),
                    options: {
                        fallback: require.resolve("file-loader"),
                        publicPath: `${config.assetPrefix}/_next/static/audio/`,
                        outputPath: `${isServer ? "../" : ""}static/audio/`,
                        name: "[name]-[hash].[ext]",
                        esModule: config.esModule || false,
                    },
                },
            ],
        });

        return config;
    },
};

module.exports = nextConfig;
