const cacheName = 'v1';

const urlsToCache = [
	'js/dbhelper.js',
	'js/main.js',
	'js/register.js',
	'js/restaurant_info.js',
	'css/details_page.css',
	'css/responsive.css',
	'css/styles.css',
	'data/restaurants.json',
	'img/1.jpg',
	'img/2.jpg',
	'img/3.jpg',
	'img/4.jpg',
	'img/5.jpg',
	'img/6.jpg',
	'img/7.jpg',
	'img/8.jpg',
	'img/9.jpg',
	'img/10.jpg',
	'img/1_sm.jpg',
	'img/2_sm.jpg',
	'img/3_sm.jpg',
	'img/4_sm.jpg',
	'img/5_sm.jpg',
	'img/6_sm.jpg',
	'img/7_sm.jpg',
	'img/8_sm.jpg',
	'img/9_sm.jpg',
	'img/10_sm.jpg',
	'/index.html',
	'/restaurant.html'
];
self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open(cacheName).then(function (cache) {
			return cache.addAll(urlsToCache);
		})
		.catch(function (error) {
			console.log('Error caching files ', error);
		})
	);
});

self.addEventListener('activate', function (event) {
	event.waitUntil(
		caches.keys()
		.then(function (cacheNames) {
			return Promise.all(
				cacheNames.map(function (cache) {
					if (cache !== cacheName) {
						return caches.delete(cache);
					}
				})
			);
		})
	);
});

// Offline caching code from Jake Archibald's Offline Cookbook
// https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.open('v1')
		.then(function (cache) {
			return cache.match(event.request)
				.then(function (response) {
					return response || fetch(event.request)
						.then(function (response) {
							cache.put(event.request, response.clone());
							return response;
						});
				});
		})
	);
});