package com.fajr;


import android.app.Application;
import com.horcrux.svg.SvgPackage;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

//wix navigation

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;

//linear gradient
import com.BV.LinearGradient.LinearGradientPackage;

import java.util.Arrays;
import java.util.List;

//video player
import com.brentvatne.react.ReactVideoPackage;

//webview

import com.reactnativecommunity.webview.RNCWebViewPackage;

import com.facebook.react.modules.i18nmanager.I18nUtil;


    public class MainApplication extends NavigationApplication {

       @Override
        protected ReactGateway createReactGateway() {
         I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
            sharedI18nUtilInstance.allowRTL(getApplicationContext(), false);
           ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
               @Override
               protected String getJSMainModuleName() {
                   return "index";
               }
           };
            return new ReactGateway(this, isDebug(), host);
        }

        @Override
        public boolean isDebug() {
            return BuildConfig.DEBUG;
        }

        protected List<ReactPackage> getPackages() {
            // Add additional packages you require here
            // No need to add RnnPackage and MainReactPackage
            return Arrays.<ReactPackage>asList(
                // eg. new VectorIconsPackage(),
                new SvgPackage(),
                new LinearGradientPackage(),
                new ReactVideoPackage(),
                new RNCWebViewPackage()

            );
        }

        @Override
        public List<ReactPackage> createAdditionalReactPackages() {
            return getPackages();
        }
}
