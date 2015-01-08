module.exports = {
  debugInfo: true,
  files: [
    'app/css/*.css',
    'app/**/*.html'
  ],
  ghostMode: {
    forms: true,
    links: true,
    scroll: true
  },
  server: {
    baseDir: 'app'
  }
};
