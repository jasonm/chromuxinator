chromuxinator
=============

Manage and launch Chrome layouts, similar to [tmuxinator](https://github.com/tmuxinator/tmuxinator).

![](extension/icon-128.png)

![](http://i.stack.imgur.com/K9YmM.jpg)

Installation
------------

* Visit `chrome://extensions/`
* Ensure `Developer mode` is checked
* Click `Load unpacked extension...`
* Locate and select the directory with the `manifest.json` file in it

Currently requires Chrome 33+ (Beta) for OSX.  Linux/Windows are untested.  Related OSX patches that are not in 32 (Stable):

* (https://codereview.chromium.org/40163002)
* (https://codereview.chromium.org/40183002)

Hacking
-------

Main structure is a Chrome extension under `extension/` and a native app under `native/`.

* The extension has two parts; host and worker.
* The extension and native app will communicate via "native messaging."  Alternatively they could communicate via websockets.
* The extension host will provide a UI for designing layouts (options page) and a UI for launching layouts (popup).
* The extension host will push layout jobs to the native app.
* The extension worker (running under a desired profile) will pull layout jobs from the native app (relevant to its profile).
* The native app will maintain this queue of layout jobs.
* The native app will launch new Chromes with specified profiles, as needed.

Interestingly, moving from native messaging to websockets opens the door for remote workers.

TODO
----

* Minimal designer who reads display geom
  options page?
    http://developer.chrome.com/extensions/options.html
    https://github.com/roykolak/chrome-bootstrap
  get display geometry
  build layout as text repr

* Minimal launcher who opens urls in same profile but at geoms
  popup?

* Build pipeline for browserify, Q, etc.
  https://github.com/kriskowal/q

* Launch layouts in preferred chrome profiles (possibly via native-messaging + chromedriver)

Example native-messaging node host:
  http://blog.dfilimonov.com/2013/09/12/devtools-terminal.html

Implementation notes
--------------------

Launching chromes in different profiles:
  My StackOverflow question
  `http://stackoverflow.com/questions/21819553/can-a-chrome-extension-launch-new-chrome-windows-under-different-user-profiles`

  Profile Extension API proposal:
  `http://dev.chromium.org/developers/design-documents/extensions/proposed-changes/apis-under-development/profile-extension-api`

  My inquiry on the Profile Extension API
  `https://groups.google.com/a/chromium.org/forum/#!topic/apps-dev/_M0UZv3oG-4`

  Related crbug "Extensions don't know profile"
  `https://code.google.com/p/chromium/issues/detail?id=173828`

  Native-messaging + chromedriver workaround?
    How to launch windows in other profiles?
    `https://developer.chrome.com/extensions/messaging.html#native-messaging`

    Extensions running in multiple profiles, get refs to bkg-page in multiple profiles:
    `https://groups.google.com/a/chromium.org/forum/#!searchin/chromium-extensions/user$20profile/chromium-extensions/xt_x2B-gYhc/SDZkKyd-lbIJ`

Related works
-------------

Basis of `native/` (NativeMessagingAPI and related code) is from https://github.com/petethepig/devtools-terminal

License
-------

See [MIT-LICENSE](./MIT-LICENSE)

[http://www.iconarchive.com/show/vintage-kitchen-icons-by-greg-barnes/StandMixer-icon.html]( Stand mixer icon by Greg Barnes. )
