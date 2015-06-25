To disable specific functionality open ```about:config``` and change the value to ```false```.

Google Safe Browsing

Leaks your browsing history to Google. [Description](https://support.mozilla.org/en-US/kb/how-does-phishing-and-malware-protection-work)
```
browser.safebrowsing.enabled
browser.safebrowsing.malware.enabled
```

Firefox stats collecting

Stability and performance reports to Mozilla. Telemetry sends usage statistics. [Description](https://www.mozilla.org/en-US/privacy/firefox/#health-report)
```
datareporting.healthreport.service.enabled
datareporting.healthreport.uploadEnabled
toolkit.telemetry.enabled
```

WebRTC

Leaks real IP when using VPN/TOR. [Description and demo](https://github.com/diafygi/webrtc-ips)
```
media.peerconnection.enabled
```

DRM media playback (Encrypted Media Extensions - EME)

A binary plugin (closed-source) is shipped with Firefox since v38. It enables playback of encrypted media and lets you use e.g. Netflix without Microsoft Silverlight. To completely remove the plugin you would have to install an '[EME-free](http://download.cdn.mozilla.net/pub/firefox/releases/latest/win32-EME-free/)' build of Firefox. [Description](https://wiki.mozilla.org/Media/EME)
```
media.eme.enabled
media.gmp-eme-adobe.enabled
```

Firefox Hello

Firefox connects to third-party (Telefonica) servers without asking for permission [Description](https://support.mozilla.org/en-US/kb/firefox-hello-video-and-voice-conversations-online)
```
loop.enabled
```

Pocket integration

[Description](https://support.mozilla.org/en-US/kb/save-web-pages-later-pocket-firefox)
```
browser.pocket.enabled
```

Reader mode

Each page you visit is parsed, leaking your browsing history. [Discussion](https://bugzilla.mozilla.org/show_bug.cgi?id=558882)
```
reader.parse-on-load.enabled
```

Geolocation
```
geo.enabled
```

Search suggestions

Everything you type in the search box is sent to the search engine.
```
browser.search.suggest.enabled
```

Pull requests are welcome.
