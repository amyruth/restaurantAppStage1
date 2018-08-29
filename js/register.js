// Checks for service worker support

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js')
		.then(function (response) {
			console.log(`Registration successful ${response}`);
		})
		.catch(function (error) {
			console.log(`Registration failed ${error}`);
		});
}