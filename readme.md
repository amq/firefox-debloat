#### Google Safe Browsing

Leaks the browsing history to Google. To disable remote lookups while keeping the protection against malicious and phishing sites create the following boolean and set it to ```true```. [Description](http://kb.mozillazine.org/Browser.safebrowsing.remoteLookups)
```
browser.safebrowsing.remoteLookups
```

To disable the functionality completely ([not recommended](https://github.com/amq/firefox-debloat/issues/3))
```
browser.safebrowsing.enabled
```

#### Firefox stats collecting

Stability and performance reports. [Description](https://www.mozilla.org/en-US/privacy/firefox/#health-report)
```
datareporting.healthreport.service.enabled
datareporting.healthreport.uploadEnabled
```

Usage statistics. [Description](https://www.mozilla.org/en-US/privacy/firefox/#telemetry)
```
toolkit.telemetry.enabled
```

#### WebRTC

Leaks the real IP when using VPN/TOR. [Description and demo](https://github.com/diafygi/webrtc-ips)
```
media.peerconnection.enabled
```

#### DRM media playback (Encrypted Media Extensions - EME)

A binary plugin (closed-source) is shipped with Firefox since v38. It enables playback of encrypted media and lets you use e.g. Netflix without Microsoft Silverlight. To completely remove the plugin you would have to install an '[EME-free](http://download.cdn.mozilla.net/pub/firefox/releases/latest/win32-EME-free/)' build of Firefox. [Description](https://wiki.mozilla.org/Media/EME)
```
media.eme.enabled
media.gmp-eme-adobe.enabled
```

#### Firefox Hello

Firefox connects to third-party (Telefonica) servers without asking for permission. [Description](https://support.mozilla.org/en-US/kb/firefox-hello-video-and-voice-conversations-online)
```
loop.enabled
```

#### Pocket integration

An online service for managing a reading list of articles. [Description](https://support.mozilla.org/en-US/kb/save-web-pages-later-pocket-firefox)
```
browser.pocket.enabled
```

#### Geolocation
```
geo.enabled
```

#### Search suggestions

Everything you type in the search box is sent to the search engine. Suggestions based on local history will still work.
```
browser.search.suggest.enabled
```

---

#### Important changes
0.1 - initial commit

0.2 - removed mention of ```Reader mode``` (it doesn't leak data\*) and added ```browser.safebrowsing.remoteLookups``` (it is confrmed to stop leaking data to Google while keeping Safe Browsing on\*)

\* tested using Fiddler

---

Pull requests are welcome.
