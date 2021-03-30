const webpack = require('webpack')
const path = require('path')
const WebpackModules = require('webpack-modules');
const config = require('sapper/config/webpack.js')
const sveltePreprocess = require('svelte-preprocess')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const pkg = require('./package.json')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

const alias = { svelte: path.resolve('node_modules', 'svelte') }
const extensions = ['.mjs', '.js', '.json', '.svelte', '.html']
const mainFields = ['svelte', 'module', 'browser', 'main']

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.svelte', './src/**/*.html'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

const preprocess = sveltePreprocess({
  scss: {
    includePaths: ['src']
  },
  postcss: {
    plugins: [
      require('autoprefixer')(),
      require('postcss-nested')(),
      dev ? null : purgecss
    ].filter(Boolean)
  }
})

const fileLoader = {
  test: /\.(webp|png|jpe?g|gif)$/i,
  loader: 'file-loader',
  options: {
    name: dev ? '[name].[ext]' : '[name].[contenthash].[ext]',
    publicPath: '/client'
  }
}

const cssLoader = {
  test: /\.css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      // options: {
      //   publicPath: 'phpid-learning'
      // }
    },
    'css-loader'
  ]
}

module.exports = {
  client: {
    entry: config.client.entry(),
    output: config.client.output(),
    resolve: { alias, extensions, mainFields },
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              dev,
              emitCss: true,
              hydratable: true,
              hotReload: false, // pending https://github.com/sveltejs/svelte/issues/2377
              preprocess
            }
          }
        },
        fileLoader,
        cssLoader
      ]
    },
    mode,
    plugins: [
      // pending https://github.com/sveltejs/svelte/issues/2377
      // dev && new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      new MiniCssExtractPlugin({
        filename: dev ? '[name].css' : '[name].[contenthash].css',
        chunkFilename: dev ? '[name].css' : '[name].[contenthash].css'
      })
    ].filter(Boolean),
    devtool: dev && 'inline-source-map'
  },

  server: {
    entry: config.server.entry(),
    output: config.server.output(),
    target: 'node',
    resolve: { alias, extensions, mainFields },
    externals: Object.keys(pkg.dependencies).concat('encoding'),
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              generate: 'ssr',
              dev,
              preprocess
            }
          }
        },
        fileLoader,
        cssLoader
      ]
    },
		plugins: [
			new WebpackModules()
		],
    mode: process.env.NODE_ENV,
    performance: {
      hints: false // it doesn't matter if server.js is large
    }
  },

  serviceworker: {
    entry: config.serviceworker.entry(),
    output: config.serviceworker.output(),
    mode: process.env.NODE_ENV
  }
}
