'use strict';

const cacheName = 'v1';

const urlsToCache = [
	'/js/dbhelper.js',
	'/js/main.js',
	'/js/register.js',
	'/js/restaurant_info.js',
	'/css/details_page.css',
	'/css/responsive.css',
	'/css/styles.css',
	'/data/restaurants.json',
	'/img/1_200.jpg',
	'/img/2_200.jpg',
	'/img/3_200.jpg',
	'/img/4_200.jpg',
	'/img/5_200.jpg',
	'/img/6_200.jpg',
	'/img/7_200.jpg',
	'/img/8_200.jpg',
	'/img/9_200.jpg',
	'/img/10_200.jpg',
	'/img/1_400.jpg',
	'/img/2_400.jpg',
	'/img/3_400.jpg',
	'/img/4_400.jpg',
	'/img/5_400.jpg',
	'/img/6_400.jpg',
	'/img/7_400.jpg',
	'/img/8_400.jpg',
	'/img/9_400.jpg',
	'/img/10_400.jpg'
];

// Cache files in install event
self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open(cacheName)
		.then(function (cache) {
			return cache.addAll(urlsToCache);
		}).then(self.skipWaiting())
	);
});

// Clean up old cache in activate event
self.addEventListener('activate', function (event) {
	console.log('Service worker activated');
	event.waitUntil(
		caches.keys().then(function (cacheNames) {
			cacheNames.map(function (cache) {
				if (cache !== cacheName) {
					return caches.delete(cache);
				}
			});
		})
	)
});

self.addEventListener('fetch', function(event){
	event.respondWith(
		caches.match(event.request)
		.then(function(response) {
			return response || fetch(event.request);
		})
	);
});

