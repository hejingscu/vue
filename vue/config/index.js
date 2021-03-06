// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: './static',
    assetsPublicPath: 'http://10.200.4.140/vue/',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8071,
    autoOpenBrowser: true,
    assetsSubDirectory: './static',
    assetsPublicPath: '/',
    proxyTable: {
        '/account':{
            target: 'http://172.30.248.170/',
            changeOrigin: true,
            pathRewrite: {
                '^/account':'/account'
            }
        },
        '/api/v2/fundsloan':{
            target: 'http://172.30.251.46:8080/',
            changeOrigin: true,
            pathRewrite: {
                '^/api/v2/fundsloan':'/fundsloan'
            }
        },
        '/api/v1/open-admin':{
            target: 'http://172.30.248.170/',
            changeOrigin: true,
            pathRewrite: {
                '^/api/v1/open-admin':'/open-admin'
            }
        }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
