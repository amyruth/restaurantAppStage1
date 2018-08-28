if(navigator.serviceWorker) {
	navigator.serviceWorker.register('/sw.js')
.then(function(response) {
	console.log('service worker registerd');
})
.catch(function(rtt) {
	console.log('registration failed' + err);
})
}