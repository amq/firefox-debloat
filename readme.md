To disable specific functionality open ```about:config``` and change the value to ```false```.

### Google Safe Browsing

Leaks the browsing history to Google. Note that disabling Safe Browsing exposes you to a risk of not being stopped from visiting malicious or phishing sites. [Description](https://support.mozilla.org/en-US/kb/how-does-phishing-and-malware-protection-work)
```
browser.safebrowsing.enabled
browser.safebrowsing.downloads.enabled
browser.safebrowsing.malware.enabled
```

### Firefox stats collecting

Stability and performance reports. Telemetry sends usage statistics. [Description](https://www.mozilla.org/en-US/privacy/firefox/#health-report)
```
datareporting.healthreport.service.enabled
datareporting.healthreport.uploadEnabled
toolkit.telemetry.enabled
```

### [WebRTC](https://github.com/diafygi/webrtc-ips)

Leaks the real IP when using VPN/TOR.
```
media.peerconnection.enabled
```

### DRM media playback (Encrypted Media Extensions - EME)

A binary plugin (closed-source) is shipped with Firefox since v38. It enables playback of encrypted media and lets you use e.g. Netflix without Microsoft Silverlight. To completely remove the plugin you would have to install an '[EME-free](http://download.cdn.mozilla.net/pub/firefox/releases/latest/win32-EME-free/)' build of Firefox. [Description](https://wiki.mozilla.org/Media/EME)
```
media.eme.enabled
media.gmp-eme-adobe.enabled
```

### [Firefox Hello](https://support.mozilla.org/en-US/kb/firefox-hello-video-and-voice-conversations-online)

Firefox connects to third-party (Telefonica) servers without asking for permission.
```
loop.enabled
```

### [Pocket integration](https://support.mozilla.org/en-US/kb/save-web-pages-later-pocket-firefox)
```
browser.pocket.enabled
```

### [Reader mode](https://bugzilla.mozilla.org/show_bug.cgi?id=558882)

Each page you visit is parsed, potentially leaking your browsing history.
```
reader.parse-on-load.enabled
```

### Geolocation
```
geo.enabled
```

### Search suggestions

Everything you type in the search box is sent to the search engine. Suggestions based on local history will still work.
```
browser.search.suggest.enabled
```

Pull requests are welcome.
