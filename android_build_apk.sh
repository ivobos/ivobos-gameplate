#!/bin/bash

# exit on any errors
set -e

# print commands
set -x

# build
cordova build android --release

# sign
cp platforms/android/build/outputs/apk/android-release-unsigned.apk android-release-unaligned.apk
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ../ivobos-keystore/ivobos.keystore android-release-unaligned.apk alias_ivobos

# zipalign
${ANDROID_HOME}/build-tools/23.0.2/zipalign -f -v 4 android-release-unaligned.apk android-release.apk
rm android-release-unaligned.apk

# verify signed
jarsigner -verify -verbose -certs android-release.apk

# success
set +x
echo SUCCESS ----------------
echo android-release.apk is ready to be uploaded in Google Play Developer Console
