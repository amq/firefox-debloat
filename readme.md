This list aims to block core Firefox features which *actively* leak data to third-party services (as opposed to attempts of sites to track you or otherwise passively collect information). As it isn't always easy to draw a strict line, the most critical passive data faucets like WebRTC are also mentioned.

We are not breaking the browsing experience, so you won't find things like spoofing referrers and canvas properties here.

To change the settings open ```about:config```.

#### [Google Safe Browsing](https://support.mozilla.org/en-US/kb/how-does-phishing-and-malware-protection-work)

Leaks the browsing history to Google. Note that disabling Safe Browsing exposes you to a risk of not being stopped from visiting malicious or phishing sites.
```
browser.safebrowsing.enabled = false
browser.safebrowsing.downloads.enabled = false
browser.safebrowsing.malware.enabled = false
```

#### Firefox stats collecting

[Stability and performance reports.](https://www.mozilla.org/en-US/privacy/firefox/#health-report)
```
datareporting.healthreport.service.enabled = false
datareporting.healthreport.uploadEnabled = false
```

[Usage statistics.](https://www.mozilla.org/en-US/privacy/firefox/#telemetry)
```
toolkit.telemetry.unified = false
toolkit.telemetry.enabled = false
```

#### [Encrypted Media Extensions (DRM)](https://wiki.mozilla.org/Media/EME)

A binary plugin (closed-source) is shipped with Firefox since v38. It enables playback of encrypted media and lets you use e.g. Netflix without Microsoft Silverlight. To completely remove the plugin you would have to install an [EME-free](http://download.cdn.mozilla.net/pub/firefox/releases/latest/win32-EME-free/) build of Firefox.
```
media.eme.enabled = false
media.gmp-eme-adobe.enabled = false
```

#### [Firefox Hello](https://support.mozilla.org/en-US/kb/firefox-hello-video-and-voice-conversations-online)

Firefox connects to third-party (Telefonica) servers without asking for permission.
```
loop.enabled = false
```

#### [Pocket integration](https://support.mozilla.org/en-US/kb/save-web-pages-later-pocket-firefox)

A third-party service for managing a reading list of articles.
```
browser.pocket.enabled = false
```

#### Search suggestions

Everything you type in the search box is sent to the search engine. Suggestions based on local history will still work.
```
browser.search.suggest.enabled = false
```

#### [WebRTC](https://wiki.mozilla.org/Media/WebRTC)

Leaks the real IP when using VPN/TOR. [Description and demo](https://github.com/diafygi/webrtc-ips).
```
media.peerconnection.enabled = false
```

Instead of completely disabling WebRTC you could also make it connect over [the default route only](https://wiki.mozilla.org/Media/WebRTC/Privacy) using:
```
media.peerconnection.ice.default_address_only = true
```

#### [Geolocation](https://www.mozilla.org/en-US/firefox/geolocation/)
```
geo.enabled = false
```

#### Adobe Flash
```
plugin.state.flash = 0
```

---

#### Important changes
0.1 - initial commit

0.2 - removed mention of ```Reader mode``` (it doesn't leak data\*) and added ```browser.safebrowsing.remoteLookups``` (it is confirmed to stop leaking data to Google while keeping Safe Browsing on\*).

0.3 - ```browser.safebrowsing.remoteLookups``` turned out to do nothing after all. Actually, it was [removed](https://bugzilla.mozilla.org/show_bug.cgi?id=388652). Requests to the Google Safe Search API are not made often, so at first I thought they were gone.

0.4 - removed mention of ```Tracking Protection```, because while blocking trackers, it ["uses the same API as Google Safe Browsing"](https://github.com/amq/firefox-debloat/pull/2#issuecomment-115728580). I would recommend using [uBlock](https://github.com/chrisaljoudi/uBlock) for this purpose instead.

0.5 - added ```toolkit.telemetry.unified```, ```Adobe Flash``` and ```media.peerconnection.ice.default_address_only```.

\* tested using Fiddler


---

Pull requests are welcome.

---

[Discussion of HN](https://news.ycombinator.com/item?id=9779440)
