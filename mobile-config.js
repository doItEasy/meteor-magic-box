App.info({
    //id如果修改
    //1).需将cordova-build-override/platforms/android/src/下级目录修改为和id名称层级相符合目录
    //如：目前id为com.yuanbaopu.com,cordova-build-override/platforms/android/src/com/yuanbaopu/app

    //2).需将cordova-build-override/platforms/android/src/{包名目录}/wxapi/WXEntryActivity.java文件中第9行。
    //package com.yuanbaopu.app.wxapi;修改为对应package (id).wxapi;
    //如：目前id为com.yuanbaopu.com,cordova-build-override/platforms/android/src/com/yuanbaopu/app
    id: 'com.mmb.demo',
    version: '1.0.0',
    name: 'meteor-magic-box',
    description: 'meteor-magic-box',
    author: 'feixm',
    email: 'feixm@asto-inc.com',
    website: 'http://cdn.52ff.cc'
});

App.icons({
    'iphone': 'resources/icons/iphone.png',
    'iphone_2x': 'resources/icons/iphone_2x.png',
    'iphone_3x': 'resources/icons/iphone_3x.png',
    'ipad': 'resources/icons/ipad.png',
    'ipad_2x': 'resources/icons/ipad_2x.png',
    'android_ldpi': 'resources/icons/android_ldpi.png',
    'android_mdpi': 'resources/icons/android_mdpi.png',
    'android_hdpi': 'resources/icons/android_hdpi.png',
    'android_xhdpi': 'resources/icons/android_xhdpi.png'
});

App.launchScreens({
    'iphone': 'resources/splash/iphone.png',
    'iphone_2x': 'resources/splash/iphone_2x.png',
    'iphone5': 'resources/splash/iphone5.png',
    'iphone6': 'resources/splash/iphone6.png',
    'iphone6p_portrait': 'resources/splash/iphone6p_portrait.png',
    'iphone6p_landscape': 'resources/splash/iphone6p_landscape.png',
    'ipad_portrait': 'resources/splash/ipad_portrait.png',
    'ipad_portrait_2x': 'resources/splash/ipad_portrait_2x.png',
    'ipad_landscape': 'resources/splash/ipad_landscape.png',
    'ipad_landscape_2x': 'resources/splash/ipad_landscape_2x.png',
    'android_ldpi_portrait': 'resources/splash/android_ldpi_portrait.png',
    'android_ldpi_landscape': 'resources/splash/android_ldpi_landscape.png',
    'android_mdpi_portrait': 'resources/splash/android_mdpi_portrait.png',
    'android_mdpi_landscape': 'resources/splash/android_mdpi_landscape.png',
    'android_hdpi_portrait': 'resources/splash/android_hdpi_portrait.png',
    'android_hdpi_landscape': 'resources/splash/android_hdpi_landscape.png',
    'android_xhdpi_portrait': 'resources/splash/android_xhdpi_portrait.png',
    'android_xhdpi_landscape': 'resources/splash/android_xhdpi_landscape.png'
});

App.setPreference('BackgroundColor', '0XFFFFFFFF');
App.setPreference('HideKeyboardFormAccessoryBar', true);




App.accessRule("*://*");
