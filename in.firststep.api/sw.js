
let staticAsserts = [
    '/index.html',
    '/static/css/app.a6df83d74339dc054a7c9b3d5ab3352b.css',
    '/static/js/app.13cee85268fc15101517.js',
    // '/static/js/app.13cee85268fc15101517.js/app.13cee85268fc15101517.js.map',
    '/static/js/manifest.2ae2e69a05c33dfc65f8.js',
    // '/static/js/manifest.2ae2e69a05c33dfc65f8.js/manifest.2ae2e69a05c33dfc65f8.js.map',
    '/static/js/vendor.cb29043f681d8df309ac.js',
    // '/static/js/vendor.cb29043f681d8df309ac.js/vendor.cb29043f681d8df309ac.js.map',

];

self.addEventListener('install', async event=>{
    event.waitUntil(
        caches.open('firststep-static').then(function(cache) {
            return cache.addAll(staticAsserts);
        })
    );
});

self.addEventListener('fetch', event=>{
    const req = event.request;
    const url = new URL(req.url);
    console.log(url.origin);
    if(url.origin === location.origin) {
        event.respondWith(cacheFirst(req));
    } else {
        event.respondWith(networkFirst(req))
    }
});

async function cacheFirst(req) {
    const cacheResponse = await caches.match(req);
    return cacheResponse || fetch(req);
}

async function networkFirst(req) {
    try {
        const cache = await caches.open('firststep-dynamic');
        const response = fetch(req);
        cache.push(response.clone())
        return response
    }catch (e) {
        await caches.match(req);
    }

}