'use strict';

import gulp                 from 'gulp';
import gutil                from 'gulp-util';
import rename               from 'gulp-rename';
import webpack              from 'webpack';
import path                 from 'path';
import del                  from 'del';
import serve                from 'browser-sync';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import colorsSupported      from 'supports-color';
import historyApiFallback   from 'connect-history-api-fallback';

let root = 'client';

let resolveToApp        = (glob = '') => {
  return path.join(root, 'app', glob);
};
let resolveToComponents = (glob = '') => {
  return path.join(root, 'app/components', glob);
};
let paths               = {
  js: resolveToComponents('**/*!(.spec.js).js'), // exclude spec files
  entry: [
   // 'babel-polyfill',
    path.join(__dirname, root, 'main.js')
  ],
  output: root,
  dest: path.join(__dirname, 'dist')
};

gulp.task('webpack', ['clean'], (cb) => {
  const config     = require('./webpack.dist.config');
  config.entry.app = paths.entry;

  webpack(config, (err, stats) => {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({ chunks: false, errorDetails: true }));
    cb();
  });
});

gulp.task('serve', () => {
  const config     = require('./webpack.dev.config');
  config.entry.app = ['webpack-hot-middleware/client?reload=true'].concat(paths.entry);
  var compiler     = webpack(config);

  serve({
    port: process.env.PORT || 3000,
    open: false,
    server: { baseDir: root },
    middleware: [
      historyApiFallback(),
      webpackDevMiddleware(compiler, {
        stats: {
          colors: colorsSupported,
          chunks: false,
          modules: false
        },
        publicPath: config.output.publicPath
      }),
      webpackHotMiddleware(compiler)
    ]
  });
});

gulp.task('watch', ['serve']);

gulp.task('component', () => {
  const cap        = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };
  const name       = yargs.argv.name;
  const parentPath = yargs.argv.parent || '';
  const destPath   = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(paths.blankTemplates)
    .pipe(template({ name: name, upCaseName: cap(name) }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});

gulp.task('clean', (cb) => {
  del([paths.dest]).then(function (paths) {
    gutil.log("[clean]", paths);
    cb();
  })
});

gulp.task('default', ['watch']);
