const path = require('path');
module.exports = {
    entry: './main.ts',
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, '.'),
        compress: true,
        port: 9000,
    },

    output: {
        library: 'main',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, "dist"), 
    },

    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { 
                test: /\.tsx?$/,
                loader: "ts-loader" 
            },
            {
                test: /\.wasm$/,
                loader: "wasm-loader"
            }
        ]
    }
}