package com.wisetutorss

import android.os.Bundle;
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import org.devio.rn.splashscreen.SplashScreen;

class MainActivity : ReactActivity() {

 override fun onCreate(savedInstanceState: Bundle?) {
        SplashScreen.show(this) // Show the splash screen before the superclass initialization
        super.onCreate(savedInstanceState)
    }


  override fun getMainComponentName(): String = "WiseTutorss"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
