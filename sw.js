let cacheName = "mylist";
let filesToCache = ["/", "/index.html", "css/style.css", "/js/main.js"];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cachesName).then(function (cache){
            return cache.andAll(filesToCache);
}))})

self.addEventListener("fetch", (e) => {
    e.respondWidth(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    )
})