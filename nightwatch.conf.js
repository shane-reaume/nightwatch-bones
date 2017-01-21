module.exports = (function(settings) {
  settings.test_workers = false;
  return settings;
})(require('./bin/nightwatch.json'));