'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8589cabc937eda75bf49d71b0d99410e",
"version.json": "3cd4c3e7c0a19a3d827474b4171f74b1",
"index.html": "ce49fb3de9dea2755126551820e4d7cb",
"/": "ce49fb3de9dea2755126551820e4d7cb",
"main.dart.js": "a6794caf6e97f94b24b7aa1c0836729d",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "73313799c877c9205e5265f3b65e8cd3",
"icons/Icon-192.png": "9fd781068bebd73df0a5a93ea4a1fec9",
"icons/Icon-maskable-192.png": "9fd781068bebd73df0a5a93ea4a1fec9",
"icons/Icon-maskable-512.png": "177818b621f0e5433a932a10853c451d",
"icons/Icon-512.png": "177818b621f0e5433a932a10853c451d",
"manifest.json": "e748d082650c9fe27cb184dafb1bacdf",
".git/config": "e54b25160133c72709313cdb408860ac",
".git/objects/32/ad98c32858d117adc88e8896a893d2c964b328": "6c68b9f89206b617df22ecf81cf1a8e3",
".git/objects/b3/bd96ddd261b542d5ac32f2760d3ffca22ac42c": "40670a91482922194b4be48b8547076e",
".git/objects/bd/b2b22a31874f0c8ada5e8ffe688ba9ee8cfc69": "30d4f591b6395d1e91123cbef41d4a54",
".git/objects/4b/30442b89f04a03f6677ec2a471f41d5f3f862a": "1a9d70b5864ba83bbbc8aa5ab0a8ab41",
".git/objects/7c/15595439c815c705fd68b52b6bec19c856e0c7": "7e8399a90ffe907517c684d04a769f01",
".git/objects/7b/a86fba4390195a8b49dc60cd22dcfd3de1b57e": "4b05fdbed1edfa6ba3fb017f989cc584",
".git/objects/7b/20756ea03b6de655bfdee2095b2011d099c04d": "05f209eb2466288ff20c552db77714d6",
".git/objects/8a/a6590aebe1abfeedfa55c949e6fbcef6bb827a": "841326ae0d6c096426ec9c5e8b1b2904",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8c7b225c6827f8197a38dbe065b6e424",
".git/logs/refs/heads/master": "8c7b225c6827f8197a38dbe065b6e424",
".git/logs/refs/remotes/site/master": "9b96d8f5b9b5d52921a4e3aeb17ff671",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "a3a818a7b4812e199cc793b07a0c77d3",
".git/refs/remotes/site/master": "a3a818a7b4812e199cc793b07a0c77d3",
".git/index": "86732a4d427e59d8669b35648d67a19c",
".git/COMMIT_EDITMSG": "55a98d2f133bb742c384632fefda4f24",
"assets/shorebird.yaml": "11c1c7b7e87f78e9f3cd82fc14dd0483",
"assets/AssetManifest.json": "31dfefa7c3aa3c46b096fea9f58a8147",
"assets/NOTICES": "f422903e21d0c252c22e13335a4b90b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "9a954f0084a7e08784dc3896edde75f7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "0022f4660469e422ffbe064a2c50c008",
"assets/packages/simple_barcode_scanner/assets/barcode.html": "55dd479b440ade30760a1b3a4db300f1",
"assets/packages/simple_barcode_scanner/assets/html5-qrcode.min.js": "d88d3200cb547c9e86ee972975561dcd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "705f362329c4fad001d1f0b6a9b7ba98",
"assets/fonts/MaterialIcons-Regular.otf": "1536fb3ca7c63201f5cdc6e8111d667e",
"assets/assets/ai_templates.json": "f40353ae94c034beea08890ba9081fb0",
"assets/assets/images/wine-grayscale.png": "f7f533fde879d565d77ee0b06f7f3256",
"assets/assets/images/wine-colorful.png": "1bbd46eb1674995eaece0557e47474e1",
"assets/assets/images/coffee-beans-black.png": "d055aec3f49a65a3867470c524c8de05",
"assets/assets/images/beer-colorful.png": "622902483e17a79ed78fa0eda1dd9217",
"assets/assets/images/beer-grayscale.png": "5444c1ce8224de662c8abeb3456d06ba",
"assets/assets/images/coffee-beans-white.png": "c64b1d5df1ef86ad858f1602cd0d3956",
"assets/assets/loyaltyhub/icon_square.ico": "0a16b5fc27fe928913f1a3615db73536",
"assets/assets/loyaltyhub/horizontal-purple.png": "468d06485715caf1907d62a237fde1bb",
"assets/assets/loyaltyhub/horizontal-white.png": "19aa0fe0ed5b8b0dfd8e43d1780a8369",
"assets/assets/loyaltyhub/icon_square.png": "89603a0468459f4c33153f8c2e7851d4",
"assets/assets/audio/notification.mp3": "d4f07124dacb871a86e66d836bbdd4f2",
"assets/assets/product_descriptions.json": "48ed404b9229229d819abf9ac8a0a387",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
