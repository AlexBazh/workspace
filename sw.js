const staticCacheName = 'static-cache-v0';

const staticAssets = [
    './',
    './index.html',
    './styles/main.css',
    './img/preloaderLogo.svg',
    './img/Main/Fab/icon/20/send.svg',
    'https://unpkg.com/feather-icons',
    './js/main.js',
    './js/changeText.js',
    './js/likes.js',
    './js/createTask.js',
    './js/preloader.js',
    './styles/grid.css',
    './styles/typography.css',
    './styles/colors.css',
    './styles/shadows.css',
    './styles/buttons.css',
    './styles/inputs.css',
    './styles/fonts.css',
    './styles/darkTheame.css',
    './img/Main/Task/icon/20/chevron-right.svg',
    './fonts/Circe-Bold.woff',
    './fonts/Circe-Regular.woff'
];

self.addEventListener('install', async event => {
    const cache = await caches.open(staticCacheName);
    await cache.addAll(staticAssets);
    console.log('Service worker has been installed');
});

self.addEventListener('activate', async event => {
    console.log('Service worker has been activated');
});

self.addEventListener('fetch', async event => {
    console.log(`Trying to fetch ${event.request.url}`);
    event.respondWith(caches.match(event.request).then(cachedResponse => {
        return cachedResponse || fetch(event.request)
    }));
});