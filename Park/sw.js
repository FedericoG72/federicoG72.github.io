// install event
self.addEventListener('install', evt => {
  console.log('Service worker installato');
});

// activate event
self.addEventListener('activate', evt => {
  console.log('Service worker attivato');
    return self.clients.claim();
});

// fetch event
self.addEventListener('fetch', evt => {
  console.log('fetch event', evt);
});



self.addEventListener('notificationclick', function(event){
 var notification = event.notification;
 var action = event.action;

 console.log(notification);
 if (action === 'confirm') {
   console.logo('Confirm was chosen');
   notification.close();
 } else {
   console.log(action);
   notification.close();
 }
});

self.addEventListener('notificationclose', function (event){
  console.log('Notification was closed', event);
})