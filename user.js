// For general information on firefox preferences see: https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/A_brief_guide_to_Mozilla_preferences
// For the source of this settings see https://github.com/amq/firefox-debloat

// #  Google Safe Browsing
// Warning: see https://github.com/amq/firefox-debloat/issues/3 !
// Leaks your browsing history to Google. [Description](https://support.mozilla.org/en-US/kb/how-does-phishing-and-malware-protection-work)
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);

// #  Firefox stats collecting
// Stability and performance reports to Mozilla. Telemetry sends usage statistics. [Description](https://www.mozilla.org/en-US/privacy/firefox/#health-report)
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.enabled", false);

// #  WebRTC
// Leaks real IP when using VPN/TOR. [Description and demo](https://github.com/diafygi/webrtc-ips)
user_pref("media.peerconnection.enabled", false);

// #  DRM media playback (Encrypted Media Extensions - EME)
// A binary plugin (closed-source) is shipped with Firefox since v38. It enables playback of encrypted media and lets you use e.g. Netflix without Microsoft Silverlight. To completely remove the plugin you would have to install an '[EME-free](http://download.cdn.mozilla.net/pub/firefox/releases/latest/win32-EME-free/)' build of Firefox. [Description](https://wiki.mozilla.org/Media/EME)
user_pref("media.eme.enabled", false);
user_pref("media.gmp-eme-adobe.enabled", false);

// #  Firefox Hello
// Firefox connects to third-party (Telefonica) servers without asking for permission [Description](https://support.mozilla.org/en-US/kb/firefox-hello-video-and-voice-conversations-online)
user_pref("loop.enabled", false);

// #  Pocket integration
// [Description](https://support.mozilla.org/en-US/kb/save-web-pages-later-pocket-firefox)
user_pref("browser.pocket.enabled", false);

// #  Reader mode
// Each page you visit is parsed, leaking your browsing history. [Discussion](https://bugzilla.mozilla.org/show_bug.cgi?id=558882)
user_pref("reader.parse-on-load.enabled", false);

// #  Geolocation
user_pref("geo.enabled", false);

// #  Search suggestions
// Everything you type in the search box is sent to the search engine.
user_pref("browser.search.suggest.enabled", false);
