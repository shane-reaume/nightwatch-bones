var HtmlReporter = require('nightwatch-html-reporter');

// allow args like --baseUrl
var arg = process.argv;
function indOfArg(key, arg) {
  if (arg.indexOf(key) !== -1) {
    var indexOfKey = arg.indexOf(key);
    return arg[indexOfKey + 1];
  } else {
    return false;
  }
}

var defaultUrl = './';

// reports saved and shown in web page after ran, set to false for production
var reporter = new HtmlReporter({
  openBrowser: true,
  reportsDirectory: __dirname + '/reports/',
  themeName: 'default',
  reportFilename: 'report.html'
});

module.exports = {
  reporter: reporter.fn,
  baseUrl: indOfArg('--baseUrl', arg) || defaultUrl,
  defaultWait: 5000,
  defaultLoginWait: 120000
};