const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const webpackConfig = require('cover-webpack-package/lib/webpack.config');

const options = {
  hot: true,
  historyApiFallback: true,
  stats: 'errors-only',
  disableHostCheck: true,
  contentBase: './dist',
  // inline: true,
  // injectHot: true,
  // hotOnly: true,
  // host: '172.17.229.216:3000',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
  },
  proxy: {}
};

const config = webpackConfig('', {
  packageName: 'power-workflow',
  mode: 'development',
  historyApiFallback: true,
  fix: 'x'
})

webpackDevServer.addDevServerEntrypoints(config, options);

const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(8080, '0.0.0.0', () => {
  console.log('dev server listening on port 8080');
});