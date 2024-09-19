'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c4494e9189e12d8ce819e652144eec1c",
"assets/AssetManifest.bin.json": "7d68353eabe1b03b7c6ac05602e3693b",
"assets/AssetManifest.json": "dd02b2836c45e5cc1b1ebe6bab61d814",
"assets/assets/images/accounts/GitHub.png": "d3ab59c6856f66ece57996ade6a641ad",
"assets/assets/images/accounts/Gmail.png": "ff6542e1c703e172b8cfcd431b1602fe",
"assets/assets/images/accounts/Google.png": "4f54f28c961446939d16894283275e89",
"assets/assets/images/accounts/LinkedIn.png": "12ca1b7914c0a659ed7f0d44b7174818",
"assets/assets/images/accounts/WhatsApp.png": "975ff775876a0668f068c1afe09d0e8f",
"assets/assets/images/courses/1.jpeg": "d41a0e71ed45b6837a3a1410e3d1988a",
"assets/assets/images/courses/2.jpeg": "a3085417f4e965c8f510077aa0459343",
"assets/assets/images/courses/3.png": "52d380d7715710345dadf407b98e5bd0",
"assets/assets/images/CV.png": "5b4a2c58e7455389183d297e557af500",
"assets/assets/images/loading.gif": "1c72ffdce994616caf1c416dc997e955",
"assets/assets/images/mobile_development.png": "4a55c0e2e3c64bb3f09c7e68929abf3a",
"assets/assets/images/profile_picture.jpeg": "e6e05f817874046b78dd0295e16302e1",
"assets/assets/images/projects/edu_buddy/1.png": "17ee34fc81c447049893f6d88bb2555f",
"assets/assets/images/projects/edu_buddy/2.png": "ee10751544d1bf3528fe0f105ad0d5c2",
"assets/assets/images/projects/edu_buddy/3.png": "858e456f023d331b000575d3cde274d2",
"assets/assets/images/projects/phone_finder/1.png": "517214ed17a6e6e9b419e58675ac83c5",
"assets/assets/images/projects/phone_finder/2.png": "948c7b09d2663013c1a93070e2d245a7",
"assets/assets/images/projects/phone_finder/3.png": "67e70d74d819f2b420576080fed7aac7",
"assets/assets/images/projects/vehicle_parking_manager/1.png": "764c44f7c0a003ae7b452075dc07b0d3",
"assets/assets/images/projects/vehicle_parking_manager/2.png": "f9860fc2960477ff2414081c7f4eb3d1",
"assets/assets/images/projects/vehicle_parking_manager/3.png": "b8efdd740e0f32a7970c2d90f6c04154",
"assets/assets/images/robot.png": "19a2c97d29f1bec9532d29fe72bc6386",
"assets/assets/images/skills/ai.png": "a97b38580f13db9b0b14b8438662ef06",
"assets/assets/images/skills/as.png": "5f5434f8361f5c61c35dfb9f68e7f446",
"assets/assets/images/skills/c%2523.png": "f649400cbea8580251068448fa512c24",
"assets/assets/images/skills/compose.png": "722d7d795d8f36d5311571784251adf1",
"assets/assets/images/skills/CSS3.png": "41687795c6157f40bcb46e427a821d54",
"assets/assets/images/skills/dart.png": "0b45d1519f97b49fe38b562b05d1164c",
"assets/assets/images/skills/Figma.png": "bcbf6971c69875ef0ebb40bf35bb7ab6",
"assets/assets/images/skills/Flutter.png": "cb728d229bee1c52d6c32c459fcd855c",
"assets/assets/images/skills/Git.png": "f4618b17e8f6df5d0f618fee7e8e9a41",
"assets/assets/images/skills/Html.png": "315b2d7323d77a1a223e745320498f1d",
"assets/assets/images/skills/Java.png": "abf337c58d59b29555ced5d856b7d59f",
"assets/assets/images/skills/JavaScript.png": "6a03d138a3e3124c68bcaa1171738bfb",
"assets/assets/images/skills/Kotlin.png": "70c1f86aa259d5c971ace6f1d89e50a6",
"assets/assets/images/skills/my_sql.png": "b05bc3d8baa1cf73c3e17d62dfb14533",
"assets/assets/images/skills/net.png": "e728c51d801c8b8b492b5a9b2d89b1ad",
"assets/assets/images/skills/PHP.png": "77098ca7ffbe8f10a49f8a19cb33c274",
"assets/assets/images/skills/pr.png": "d0a41e55df9f664a1f9bdb299dc09d1a",
"assets/assets/images/skills/ps.png": "250ac13f2863c52cf1d1ec283657a86f",
"assets/assets/images/skills/Python.png": "1725b4068bf1d0179d3324afad963cee",
"assets/assets/images/skills/SQLite.png": "a59c389025633ddb7f92812ac37295ad",
"assets/assets/images/skills/vs.png": "b304a426e05052def8f0ceb31cc1f474",
"assets/assets/images/skills/vs_code.png": "f9a1f431045f100afb6f9220503061d7",
"assets/assets/images/skills/xd.png": "c5d6920c48bdd7d4e6a152e431df137a",
"assets/assets/images/ui_design.png": "037170dc26159f3b2ffe6db4625a8575",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "aa1d8be8763922e0b7dd90c9c52b886c",
"assets/NOTICES": "626bd22aed337994f952189f0d782a6c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "32cc31c7f950543ad75e035fcaeb2892",
"canvaskit/canvaskit.js.symbols": "bb7854ddbcaa2e58e5bdef66b58d4b47",
"canvaskit/canvaskit.wasm": "6134e7617dab3bf54500b0a2d94fe17a",
"canvaskit/chromium/canvaskit.js": "6a5bd08897043608cb8858ce71bcdd8a",
"canvaskit/chromium/canvaskit.js.symbols": "f23279209989f44e047062055effde63",
"canvaskit/chromium/canvaskit.wasm": "ad6f889daae572b3fd08afc483572ecd",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "dc16cade950cfed532b8c29e0044fe42",
"canvaskit/skwasm.wasm": "aff2178f40209a9841d8d1b47a6e6ec7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "5de281a37b2308e43846d3a0b545c921",
"flutter_bootstrap.js": "c0b1c7dc17376b8b5863203f2c84e6f0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a44d689e9517ddcf73622e6229ce5320",
"/": "a44d689e9517ddcf73622e6229ce5320",
"main.dart.js": "c45a7fa6f5d2b84d21dc4a11f49edf98",
"manifest.json": "a25697d20e2fae72eb063bc4d26b1e9d",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
