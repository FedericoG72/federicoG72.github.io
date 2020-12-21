// install event
self.addEventListener('install', evt => {
  console.log('Service worker installato');
});

// activate event
self.addEventListener('activate', evt => {
  console.log('Service worker attivato');
//    return self.clients.claim();
});

// fetch event
self.addEventListener('fetch', evt => {
  console.log('fetch event', evt);
});