This list aims to help you disable core Firefox features which actively leak data to third-party services (as opposed to attempts of sites to track you or otherwise passively collect information). As it isn't always easy to draw a strict line, the most critical passive data faucets like WebRTC are also mentioned.

To disable specific functionality open ```about:config``` and change the value to ```false```.

#### [Google Safe Browsing Malware Protection](https://support.mozilla.org/en-US/kb/how-does-phishing-and-malware-protection-work)

Leaks metadata about uncommon downloads to Google. Note that disabling Safe Browsing exposes you to a risk of not being stopped from downloading malicious software. There is a UI pref for this in Security tab.
```
browser.safebrowsing.malware.enabled
```

#### Firefox stats collecting

[Stability and performance reports.](https://www.mozilla.org/en-US/privacy/firefox/#health-report) These are sent only to Mozilla. There are UI prefs for these in the Advanced | Data Choices tab.
```
datareporting.healthreport.service.enabled
datareporting.healthreport.uploadEnabled
```

[Usage statistics.](https://www.mozilla.org/en-US/privacy/firefox/#telemetry) These are sent only to Mozilla. There is a UI pref for this in the Advanced | Data Choices tab. It is disabled by default in release builds.
```
toolkit.telemetry.enabled
```

#### [Encrypted Media Extensions (DRM)](https://wiki.mozilla.org/Media/EME)

On Windows, a closed-source binary plugin is automatically downloaded from Adobe by Firefox since v38. It runs in a sandbox and enables playback of encrypted media, so you can use e.g. Netflix without Microsoft Silverlight. The best way to disable this is to uncheck the checkbox in the DRM pane of the Content preferences - this will remove the plugin from disk. The only difference between a normal build and an  [EME-free](http://download.cdn.mozilla.net/pub/firefox/releases/latest/win32-EME-free/) build of Firefox is that this checkbox is unchecked by default.
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

A third-party service for managing a reading list of articles. No connection is made to this service unless you specifically sign up for it.
```
browser.pocket.enabled
```

#### Search suggestions

Everything you type in the search box is sent to the search engine as you are typing (rather than just when you press Enter). If you disable this, suggestions based on local history will still work.
```
browser.search.suggest.enabled
```

#### [WebRTC](https://wiki.mozilla.org/Media/WebRTC)

Leaks the real IP when using VPN/TOR. [Description and demo](https://github.com/diafygi/webrtc-ips)
```
media.peerconnection.enabled
```

#### Geolocation

Provides your location to websites, but only with your active consent in each case.
```
geo.enabled
```

---

#### Important changes
0.1 - initial commit

0.2 - removed mention of ```Reader mode``` (it doesn't leak data\*) and added ```browser.safebrowsing.remoteLookups``` (it is confrmed to stop leaking data to Google while keeping Safe Browsing on\*).

0.3 - ```browser.safebrowsing.remoteLookups``` turned out to do nothing after all. Actually, it was [removed](https://bugzilla.mozilla.org/show_bug.cgi?id=388652). Requests to the Google Safe Search API are not made often, so at first I thought they were gone.

0.4 - removed mention of ```Tracking Protection```, because while blocking trackers, it ["uses the same API as Google Safe Browsing"](https://github.com/amq/firefox-debloat/pull/2#issuecomment-115728580). I would recommend using [uBlock](https://github.com/chrisaljoudi/uBlock) for this purpose instead.

0.5 - corrected many inaccuracies. Removed reference to standard Safe Browsing because it downloads lists of malware sites and commonly-downloaded files, rather than sending them to Google, and so leaks no history.

\* tested using Fiddler


---

Pull requests are welcome.

---

[Discussion of HN](https://news.ycombinator.com/item?id=9779440)
