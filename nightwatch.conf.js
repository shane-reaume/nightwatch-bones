module.exports = (function(settings) {
    var platform = require('platform');
    var chromePath = (platform.os.family == "Win32") ? "./bin/chromedriver.exe" : "./node_modules/.bin/chromedriver";

  settings = {
    "src_folders" : ["./tests"],
      "output_folder" : "./reports",
      "custom_commands_path" : "./custom_commands",
      "page_objects_path" : "./pages",
      "custom_assertions_path" : "",
      "globals_path" : "./globals.js",
      "live_output" : false,
      "parallel_process_delay" : 10,
      "disable_colors": false,
      "test_workers" : false,

      "selenium" : {
      "start_process" : true,
        "server_path" : "./bin/selenium-server-standalone-2.53.0.jar",
        "log_path" : "./reports",
        "host" : "127.0.0.1",
        "port" : 4444
    },

    "test_settings" : {
      "default" : {
          "selenium_host" : "127.0.0.1",
          "selenium_port" : 4444,
          "silent" : true,
          "disable_colors": false,
          "screenshots" : {
          "enabled" : false,
            "path" : ""
        },
        "desiredCapabilities" : {
          "browserName" : "chrome",
            "javascriptEnabled" : true,
            "acceptSslCerts" : true,
            "chromeOptions": {
            "args": ["--no-sandbox"]
          }
        }
      },

      chrome : {
          "launch_url" : "https://google.com",
        "desiredCapabilities": {
          "browserName": "chrome"
        },
        "selenium" : {
            "cli_args": {
                "webdriver.chrome.driver": chromePath
            }
        }
      }

    }
  };

  return settings;
})();