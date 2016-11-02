import webpack from 'webpack';

export function watcher(config, { name, options }) {
  const compiler = webpack(config);

  compiler.watch({}, function(err, stats) {
    if (err) {
      console.log(`\n[${name}](${options.dev ? 'DEV' : 'PROD'}) ==> BUILD FAILED\n`);
      throw new Error(err);
    }
    console.log(`\n[${name}](${options.dev ? 'DEV' : 'PROD'}) ==> BUILD SUCCESS & WATCHING`);
  });
}

export function builder(config, { name, options }) {
  const compiler = webpack(config);

  compiler.run(function(err, stats) {
    if (err) {
      console.log(`\n[${name}](${options.dev ? 'DEV' : 'PROD'}) ==> BUILD FAILED`);
      throw new Error(err);
    }
    console.log(`\n[${name}](${options.dev ? 'DEV' : 'PROD'}) ==> BUILD SUCCESS`);
  });
}
