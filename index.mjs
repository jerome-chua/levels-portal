// Import dependencies.
import express from 'express';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack_conf/webpack.dev.js';
import bindRoutes from './routes.mjs';

const app = express(); // Initialise Express instance.

app.set('view engine', 'ejs'); // Set the Express view engine to expect EJS templates.
app.use(cookieParser()); // Bind cookie parser middleware to parse cookies in requests.
app.use(express.urlencoded({ extended: false })); // Bind Express middleware to parse request bodies for POST requests.
app.use(express.json()); // Bind Express middleware to parse JSON request bodies.
app.use(methodOverride('_method')); // Bind method override middleware to parse PUT/DELETE requests sent as POST requests.
app.use(express.static('public')); // Expose files stored in the public folder.
app.use(express.static('dist')); // Expose files stored in the distribution folder.

// Set up Webpack in dev env.
const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    writeToDisk: (filePath) => /\.html$/.test(filePath), // HTML only.
  }));
  app.use(webpackHotMiddleware(compiler, {
    log: false,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));
}

// Bind route definitions to the Express application.
bindRoutes(app);

// Set Express to listen on given port.
const PORT = process.env.PORT || 3004;
app.listen(PORT);
