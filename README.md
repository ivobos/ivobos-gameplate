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
Add required plugins
```
cordova plugin add https://github.com/xmartlabs/cordova-plugin-market
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
### Bumping version before release
```
npm version patch
git push

```
### Building apk for release
```
npm run build
./android_build_apk.sh
```
will create android-release.apk

