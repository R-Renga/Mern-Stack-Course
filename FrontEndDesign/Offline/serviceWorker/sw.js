self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("demo/v1").then((cache) => {
            return cache.addAll([
                "./index.html",
                "./index.js",
                "./index.css"
            ]);
        })
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keylist) => {
            return Promise.all(
                keylist.map((key) => {
                    if (key !== "demo/v1") {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

self.addEventListener("fetch", (event) => {
    if (event.request.method !== "GET") {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then((response) => {
                const cloneData = response.clone();
                caches.open("demo/v1").then((cache) => {
                    cache.put(event.request, cloneData);
                });
                return response;
            })
            .catch(() => {
                return caches.match(event.request).then((file) => file || Response.error());
            })
    );
});
