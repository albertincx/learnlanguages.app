/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-e264f298'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/index-B4nAFpZy.js",
    "revision": null
  }, {
    "url": "assets/index-BOORdGfV.css",
    "revision": null
  }, {
    "url": "assets/index-C5KpxO26.js",
    "revision": null
  }, {
    "url": "assets/index-Ck-x9-AQ.css",
    "revision": null
  }, {
    "url": "assets/index-legacy-C4zQpCNW.js",
    "revision": null
  }, {
    "url": "assets/index-legacy-DTUwWYfi.js",
    "revision": null
  }, {
    "url": "assets/polyfills-DNt7E_7d.js",
    "revision": null
  }, {
    "url": "assets/polyfills-legacy-B3slO07P.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-D_kkWWxm.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-legacy-BOodOgXd.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "4ff814ea663664c9fb3c8cc428fc37ef"
  }, {
    "url": "favicon.png",
    "revision": "4a7a8ff306f47dc57c4a2e5b106dc2bd"
  }, {
    "url": "icon-192.png",
    "revision": "f2c43308084508689c9ed3193ad962cb"
  }, {
    "url": "icon-512.png",
    "revision": "635e8b5a9e7f84e8d9fd832ef9a2ea50"
  }, {
    "url": "manifest.webmanifest",
    "revision": "743b5d664c31e39a2766704f80e3d9f2"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
//# sourceMappingURL=sw.js.map
