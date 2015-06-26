To disable specific functionality open ```about:config``` and change the value to ```false```.

#### [Google Safe Browsing](https://support.mozilla.org/en-US/kb/how-does-phishing-and-malware-protection-work)

Leaks the browsing history to Google. Note that disabling Safe Browsing exposes you to a risk of not being stopped from visiting malicious or phishing sites.
```
browser.safebrowsing.enabled
browser.safebrowsing.downloads.enabled
browser.safebrowsing.malware.enabled
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

#### [Encrypted Media Extensions (DRM)](https://wiki.mozilla.org/Media/EME)

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

#### [Tracking Protection](https://support.mozilla.org/en-US/kb/tracking-protection-firefox)

Enable to actively block sites that are known to track users. Do not confuse with [DNT](https://www.mozilla.org/en-US/firefox/dnt/) which only asks sites not to track you.
```
privacy.trackingprotection.enabled
```

---

#### Important changes
0.1 - initial commit

0.2 - removed mention of ```Reader mode``` (it doesn't leak data\*) and added ```browser.safebrowsing.remoteLookups``` (it is confrmed to stop leaking data to Google while keeping Safe Browsing on\*)

0.3 ```browser.safebrowsing.remoteLookups``` turned out to do nothing after all. Actually, it was [removed](https://bugzilla.mozilla.org/show_bug.cgi?id=388652). Requests to the Google Safe Search API are not made often, so at first I thought they were gone.

\* tested using Fiddler


---

Pull requests are welcome.

---

[Discussion of HN](https://news.ycombinator.com/item?id=9779440)
