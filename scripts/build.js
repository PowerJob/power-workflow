const webpackConfig = require('cover-webpack-package/lib/webpack.config');
const webpack = require('webpack');
process.env.NODE_ENV = 'production';

const config = webpackConfig('', {
    packageName: 'power-workflow',
    mode: 'production'
})

const compiler = webpack(config);

compiler.run((err, stats) => {
    if (!err) return;
    console.log('构建成功');
});