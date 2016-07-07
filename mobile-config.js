App.info({
    id: 'com.feixm.app',
    version: '1.0.0',
    name: 'meteorMagicBox',
    description: 'demo',
    author: 'feixm',
    website: 'http://cdn.52ff.cc'
});

App.icons({
    'ios_settings': 'public/icons/iphone.png',
    'ios_settings_2x': 'public/icons/iphone_2x.png',
    'ios_settings_3x': 'public/icons/iphone_3x.png',
    'ios_spotlight': 'public/icons/iphone.png',
    'ios_spotlight_2x': 'public/icons/iphone_2x.png',
    'ipad': 'public/icons/ipad.png',
    'ipad_2x': 'public/icons/ipad_2x.png',
    'ipad_pro': 'public/icons/ipad_2x.png',
    'android_mdpi': 'public/icons/android_mdpi.png',
    'android_hdpi': 'public/icons/android_hdpi.png',
    'android_xhdpi': 'public/icons/android_xhdpi.png',
    'android_xxxhdpi': 'public/icons/android_xhdpi.png',
    'android_xxhdpi': 'public/icons/android_xhdpi.png'
});

App.launchScreens({
    'iphone_2x': 'public/splash/iphone_2x.png',
    'iphone5': 'public/splash/iphone5.png',
    'iphone6': 'public/splash/iphone6.png',
    'iphone6p_portrait': 'public/splash/iphone6p_portrait.png',
    'iphone6p_landscape': 'public/splash/iphone6p_landscape.png',
    'ipad_portrait': 'public/splash/ipad_portrait.png',
    'ipad_portrait_2x': 'public/splash/ipad_portrait_2x.png',
    'ipad_landscape': 'public/splash/ipad_landscape.png',
    'ipad_landscape_2x': 'public/splash/ipad_landscape_2x.png',
    'android_xxhdpi_portrait': 'public/splash/android_xhdpi_portrait.png',
    'android_xxhdpi_landscape': 'public/splash/android_xhdpi_landscape.png',
    'android_mdpi_portrait': 'public/splash/android_mdpi_portrait.png',
    'android_mdpi_landscape': 'public/splash/android_mdpi_landscape.png',
    'android_hdpi_portrait': 'public/splash/android_hdpi_portrait.png',
    'android_hdpi_landscape': 'public/splash/android_hdpi_landscape.png',
    'android_xhdpi_portrait': 'public/splash/android_xhdpi_portrait.png',
    'android_xhdpi_landscape': 'public/splash/android_xhdpi_landscape.png'
});



App.setPreference('BackgroundColor', '0XFFFFFFFF');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('StatusBarOverlaysWebView', false);
App.setPreference('StatusBarBackgroundColor', "#3a393e");
App.setPreference('StatusBarStyle', "lightcontent");

App.setPreference('SplashScreenDelay', 3000);

App.setPreference('LoadUrlTimeoutValue', 0);






App.accessRule("*://*");
