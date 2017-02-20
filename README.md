# ivobos-gameplate
A starter kit for building threejs mobile first games.

## Developing on your personal computer
Install dependencies
```
cd ivobos-gameplate
npm i
```
Run the development server
```
npm start
```
Open [http://localhost:8080/](http://localhost:8080/)
## Building and deploying to Android
Install Cordova on your system if you haven't done so already
```
npm install -g cordova
```
Install Android Studio if you haven't got it
```
https://developer.android.com/studio/install.html
```
Install Android platform
```
cd ivobos-gameplate
cordova platform add android --save
```
Build for Android
```
npm run build
cordova build
```
Connect your android device using a USB cable and run
```
cordova run
```
