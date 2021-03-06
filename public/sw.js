const staticCacheName = 'site-static';
const assets =[
    '/',
    '/index.html',
    '/js/app.js',
    '/js/ui.js',
    '/js/materialize.min.js',
    '/css/styles.css',
    '/css/materialize.min.css',
    '/img/dish.png',
    '/img/dish2.png',
    '/img/dish3.png',
    '/img/dish4.png',
    '/img/dish5.png',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v50/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
];

//install service worker
self.addEventListener('install',evt=>{
    //console.log('service worker has been installed');
    evt.waitUntil(
        caches.open(staticCacheName).then(cache =>{
          console.log('caching shell assets');
          cache.addAll(assets);
    
        })
    );
});

//activate service worker
self.addEventListener('activate', evt=>{
    //console.log('service worker has been activated');
});

//fetch event
self.addEventListener('fetch',evt=>{
    //console.log('fetch event',evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes =>{
            return cacheRes || fetch(evt.request);

        })
    );
});