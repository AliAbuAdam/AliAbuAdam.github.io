'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b8ce26eeb52be45c4a37e0ca13dfeadf",
"version.json": "e63d18fa1315d412d72ca944bd3e475f",
"index.html": "375ea7d4aed3ea375ff28b80cf8696bd",
"/": "375ea7d4aed3ea375ff28b80cf8696bd",
"main.dart.js": "2a1833be86bac3af1e2f3a6888e06f33",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "ed35dd348a70fb67c799c8e4c9f744ec",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f94068aff7e5025fbf4485c89c974294",
"assets/AssetManifest.json": "362e323005e4fa455a8965ca29dd3866",
"assets/NOTICES": "f2907857d01ef377a513513915002a9f",
"assets/FontManifest.json": "18aec6984f9b5ca4da90fa354e5600c6",
"assets/AssetManifest.bin.json": "9cce55123700ae532adc8763553ce92b",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a589b96a43bc8e0e19dc75315e77166d",
"assets/fonts/MaterialIcons-Regular.otf": "a2d617ca1ec69e5d425e075d501964c4",
"assets/assets/images/svg/tile_icon.svg": "b189ccf18955dd02f7c96255fc4229ea",
"assets/assets/images/svg/logo.svg": "5fdac17db28d015699f8ce4124f075a4",
"assets/assets/images/main/watch_2.png": "aa45c75daecb1eae0f4ce6d0b20db3a1",
"assets/assets/images/main/watch_1.png": "c82f2fd57f603c971912d92e08bb3b75",
"assets/assets/images/main/owner.jpg": "6244363d04d9c61b71f556d38a89e2d3",
"assets/assets/images/main/git.png": "69e2a539cd5176c61080945be18a71b3",
"assets/assets/images/main/docker.png": "b331ad0f493ff6e44d29cf505d1a4bc4",
"assets/assets/images/main/batys_1.png": "3762d35f3da624a70dcc056aa1e3c2a5",
"assets/assets/images/main/acra_1.png": "8de9cc541c515d301e79aedd6a69a6a6",
"assets/assets/images/main/kubernetes.png": "52accbf9f51073cce980d1252f1aa96b",
"assets/assets/images/main/python.png": "e447f328cf9093c88859fac2036e0f7d",
"assets/assets/images/main/batys_2.png": "fd31f3d52fb2082d0133e95a93713bb7",
"assets/assets/images/main/acra_2.png": "ffa0caa036a1b3d27ba7511dc2a28500",
"assets/assets/images/main/flutter.png": "081fc54c6c09a6d1ec0ffdd9840a4d25",
"assets/assets/images/main/github.png": "5a83df514582df14ee939ec2133013db",
"assets/assets/images/main/desert_bg.png": "797bf65574fad07ca5d47adb21b258ca",
"assets/assets/images/main/figma.png": "213512826b276de08c0cf45bdafb7fe2",
"assets/assets/images/main/main_bloc_bg.jpg": "8a5537d6e432da8e57caaae54541a437",
"assets/assets/images/main/autosecurity_1.png": "0f7acfdaff1cbb469dbe77e8edaecde6",
"assets/assets/images/main/deloframe_2.png": "f1ae701929cda9e35a09379127097c27",
"assets/assets/images/main/ai_integration.jpg": "4efde03b129ba944525e5a217f38e0a9",
"assets/assets/images/main/deloframe_1.png": "5c8fd89df9f1a2e329b7171e21fbfd7e",
"assets/assets/images/main/autosecurity_2.png": "0a4b8ce1dd214e4139a246f843201c63",
"assets/assets/images/main/business_process.png": "2858c90e8d154a4d2d8d12f6dc43b176",
"assets/assets/images/main/owner_retro.jpg": "8d32a0665ec8d95de60dd44ae3bb76ef",
"assets/assets/images/main/mobile_development.png": "06084a879d6e50dbe628617d8ee7aa4d",
"assets/assets/images/main/case_fake.jpg": "c07d9622e94274fed0d9be91179f6430",
"assets/assets/images/main/thermoair_1.png": "15d4472e10f43faba980bfc6e1d01d6c",
"assets/assets/images/main/lootbay_2.png": "e3eca4677456cbfc089247cab1d3b637",
"assets/assets/images/main/thermoair_2.png": "1765913efb74061bd11ef8b84d329ddb",
"assets/assets/images/main/service_cover_3.png": "3a447d09017f68f09759a3c081345571",
"assets/assets/images/main/lootbay_1.png": "2325ed272a6ec186ef5a0f4ac2fd88c7",
"assets/assets/images/main/service_cover_2.png": "95e81c0c9b6e7888f6f6ea9c06aef148",
"assets/assets/images/main/stripe.png": "81e4ec45ccdd2f078a029f52ad7fa48e",
"assets/assets/images/main/dart.png": "ae9404d114d4c2293de80426e9d7f4f2",
"assets/assets/images/main/wash_detail_2.png": "9c11993c46d9f5456a717ecae694f374",
"assets/assets/images/main/wash_detail_1.png": "cd909f85c1e27b8037e9895c00419318",
"assets/assets/images/main/service_cover_4.png": "d87033140925bb566f16b7c0b8008eeb",
"assets/assets/images/splash_logo.png": "4989b59a1b810fd595ad1203ee00f126",
"assets/assets/fonts/RFDewi-Black.ttf": "afdb68b48c76811ebae99b2274129155",
"assets/assets/fonts/RFDewi-Semibold.ttf": "dc14c330e4912dd595f88ff902978c45",
"assets/assets/fonts/Helvetica-Neue-Regular.ttf": "53154fc364e3b971a9172cfb9955572c",
"assets/assets/fonts/RFDewi-Ultrabold.ttf": "7b074817d769a445b216f78cbaabc456",
"assets/assets/fonts/RFDewi-Regular.ttf": "bfb30c2677ae3236b6f893704c76f019",
"assets/assets/fonts/RFDewi-Thin.ttf": "798b664893954f51075a65edba994968",
"assets/assets/fonts/RFDewi-Bold.ttf": "b68b4f571874a966f4e4c3a01dd90d9e",
"assets/assets/fonts/Helvetica-Neue-Medium.ttf": "7041884185e13c6187390afe25b1e9e7",
"assets/assets/fonts/RFDewi-Ultralight.ttf": "3771adf0ffd66a930da44b0f43d66d5f",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
