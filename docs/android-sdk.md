# Android SDK environment

The repository includes an environment-driven Android SDK setup for local Android builds.

## Install the SDK

```bash
source scripts/android-sdk-env.sh
./scripts/setup-android-sdk.sh
```

The install location is controlled by `ANDROID_SDK_ROOT` (or `ANDROID_HOME`) and defaults to `$HOME/android-sdk`. You can override the SDK platform, build-tools version, and command-line tools version with:

```bash
ANDROID_SDK_ROOT=/opt/android-sdk \
ANDROID_PLATFORM=android-35 \
ANDROID_BUILD_TOOLS=35.0.0 \
./scripts/setup-android-sdk.sh
```

## Use the SDK in a shell

```bash
source scripts/android-sdk-env.sh
adb version
```

For a persistent shell environment, add this line to your shell profile:

```bash
source /absolute/path/to/hymn-book-app/scripts/android-sdk-env.sh
```

## Build configuration

`eas.json` contains APK profiles for Expo Application Services:

```bash
npx eas build --platform android --profile preview
```

For a local native build after generating the Android project:

```bash
npx expo prebuild --platform android
cd android
./gradlew assembleDebug
```

The debug APK is written to `android/app/build/outputs/apk/debug/app-debug.apk`.
