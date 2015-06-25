Open ```about:config``` to change settings.

#### [Google Safe Browsing](https://support.mozilla.org/en-US/kb/how-does-phishing-and-malware-protection-work)

Leaks the browsing history to Google. To disable remote lookups while [keeping](http://kb.mozillazine.org/Browser.safebrowsing.remoteLookups) the protection against malicious and phishing sites create the following boolean and set it to ```true```.
```
browser.safebrowsing.remoteLookups
```

To disable the functionality completely ([not recommended](https://github.com/amq/firefox-debloat/issues/3)).
```
browser.safebrowsing.enabled
```

#### Firefox stats collecting

[Stability and performance reports.](https://www.mozilla.org/en-US/privacy/firefox/#health-report)
```
datareporting.healthreport.service.enabled
datareporting.healthreport.uploadEnabled
```

[Usage statistics.](https://www.mozilla.org/en-US/privacy/firefox/#telemetry)
```
toolkit.telemetry.enabled
```

#### [WebRTC](https://wiki.mozilla.org/Media/WebRTC)

Leaks the real IP when using VPN/TOR. [Description and demo](https://github.com/diafygi/webrtc-ips)
```
media.peerconnection.enabled
```

#### [Encrypted Media Extensions - EME](https://wiki.mozilla.org/Media/EME) (DRM)

A binary plugin (closed-source) is shipped with Firefox since v38. It enables playback of encrypted media and lets you use e.g. Netflix without Microsoft Silverlight. To completely remove the plugin you would have to install an [EME-free](http://download.cdn.mozilla.net/pub/firefox/releases/latest/win32-EME-free/) build of Firefox.
```
media.eme.enabled
media.gmp-eme-adobe.enabled
```

#### [Firefox Hello](https://support.mozilla.org/en-US/kb/firefox-hello-video-and-voice-conversations-online)

Firefox connects to third-party (Telefonica) servers without asking for permission.
```
loop.enabled
```

#### [Pocket integration](https://support.mozilla.org/en-US/kb/save-web-pages-later-pocket-firefox)

A third-party service for managing a reading list of articles.
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

---

[Discussion of HN](https://news.ycombinator.com/item?id=9779440)
