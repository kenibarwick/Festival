cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/phonegap-plugin-push/www/push.js",
        "id": "phonegap-plugin-push.PushNotification",
        "pluginId": "phonegap-plugin-push",
        "clobbers": [
            "PushNotification"
        ]
    },
    {
        "file": "plugins/phonegap-plugin-push/src/windows/PushPluginProxy.js",
        "id": "phonegap-plugin-push.PushPlugin",
        "pluginId": "phonegap-plugin-push",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
        "id": "onesignal-cordova-plugin.OneSignal",
        "pluginId": "onesignal-cordova-plugin",
        "clobbers": [
            "OneSignal"
        ]
    },
    {
        "file": "plugins/onesignal-cordova-plugin/src/windows/OneSignalPushProxy.js",
        "id": "onesignal-cordova-plugin.OneSignalPushProxy",
        "pluginId": "onesignal-cordova-plugin",
        "merges": [
            ""
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "phonegap-plugin-push": "1.4.5",
    "onesignal-cordova-plugin": "1.9.4",
    "cordova-plugin-whitelist": "1.2.0"
}
// BOTTOM OF METADATA
});