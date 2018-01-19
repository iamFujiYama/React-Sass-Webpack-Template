const path = require('path');

module.exports = {
 entry: __dirname + "/src/app.js",
 output: {
	path: __dirname + '/public',
	filename: 'bundle.js',
 },
 module: {
	rules: [
    {
		    test: /\.js[x]?$/,
		    exclude: /node_modules/,
		    loader: "babel-loader",
		    options: {
			         presets: ['react', 'es2015'],
		    },
		},
    {
        test: /\.scss/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
    },
    {
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        loader: 'url-loader',
    }
	],
 },
 devServer: {
   contentBase: path.resolve(__dirname, "public"),
   port: 3000,
 },
 resolve: {
	extensions: ['.js', '.jsx']
 },
};
