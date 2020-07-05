self.addEventListener('install', async event => {
    console.log('Service worker has been installed');
});

self.addEventListener('activate', async event => {
    console.log('Service worker has been activated');
});