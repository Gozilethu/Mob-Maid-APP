import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  "appId": "com.example.mobmaid",
  "appName": "Mob Maid",
  "webDir": "www",
  "bundledWebRuntime": false,
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 3000,
      "backgroundColor": "#4d7daf",
      "androidScaleType": "CENTER_CROP",
      "showSpinner": true,
      "spinnerColor": "#ffffff"
    }
  }
}


export default config;
