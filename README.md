# nightwatch-bones
Nightwatch test framework with my favorite features.

# NightWatchjs testing POM against multiple Operating Systems and Browsers

This is an example to show the use of NightWatchjs to test verified on Mac.

## Dive in (Start project and test it)

- `npm install`

### iOS Safari
- Start appium server with iOS iPhone 6 Safari then run NightWatch
    - I phone requires a lot of steps so we broke it out into npm scripts
    - `npm run ios`
    
### Android
- Start appium server with Android and Selendroid then run NightWatch
    - Android requires a lot of steps so we broke it out into npm scripts
    - `npm run android`

### Native Desktop (Electron)
- Start Electron native app and test with NightWatch UI suite
    - native electron:
         - `grunt nightwatch:electron --group electron`
    - web electron:
         - `grunt nightwatch:electron --group googleExampleTest`
    
### Native Web (Chrome)
- Start Google sample web app and test with NightWatch UI POM suite
    - `grunt nightwatch:desktop-chrome --group googleExampleTest`
    
### Native Web (Safari)
- Start Google sample web app and test with NightWatch UI POM suite
    - `grunt nightwatch:desktop-safari --group googleExampleTest`

## Buggy stuff in Mac

Unfortunately Mac updates and selenium/chromedriver updates get out of sync and we get these stupid errors. You can check you status at this url path.
- `http://localhost:4444/wd/hub/status`

- Sometimes Selenium or webdriver is not killed so kill em!
    - If not using Java for anything else...
        - `killall -9 chromedriver` 
        - `killall -9 java`
    - You can check... 
        - `lsof -i -n -P | grep 4444` // get your id on left
        - `kill -9 <id>`
    
## Start Electron app without testing

Basically `<path to Electron> <path to this project>`.
In my example...

- `./node_modules/electron-prebuilt/dist/Electron.app/Contents/MacOS/Electron ./Web-CDP-Electron-Nightwatch`

# App stuff outside of Electron (not important, but in case you think the app looks fun)

## Update set (change to new set)

- add class list to your image folder root as `imageClases.txt`
- add image list to your image folder root as `train.txt`

## If your path is not imagenet
- change the global `var SYMPATH = "imagenet";` in the `public/js/tg.js` file
- - * easy to find, it is on the first line

## Current Storage

- html5 localStorage as:
- - `<imagePath>-<classId> = false`
- - `tags = good` or `tags = bad`

## Download/Upload from UI

- select upload or download from dropdown to transfer from localStorage
- download goes to "download" folder, lets save in the image directory of matching set