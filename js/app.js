if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then((reg) => console.log('Service worker registrato', reg))
    .catch((err) => console.log('Service worker non registrato', err));
}

function finestraConfermaNotify(){
    if ('serviceWorker' in navigator){
        var options = {
            body: 'Subscribed succesfully',
            icon: '/icon/icon-96x96.png',
            image: '/images/dancing.png',
            dir: 'ltr',
            lang: 'en-US',
            vibrate: [100, 50, 200],
            badge: '/icon/icon-96x96.png'
        };

    navigator.serviceWorker.ready
    .then(function(swreg){
        swreg.showNotification('Subscribed succesfully', options);
    });
    }
}

function richiediNotifica(){
    Notification.requestPermission(function(result){
        console.log('Scelta utente', result);
        if (result !== 'permesso'){
            console.log('Notifiche non permesse');
        } else {
            finestraConfermaNotify();
        }
    });
}

var notificationButton = document.querySelectorAll(".enable-notification");
if ('Notification' in window){
    for (var i = 0; i < notificationButton.length; i++){
        notificationButton[i].style.display = 'inline-block';
        notificationButton[i].addEventListener('click', richiediNotifica);
    }
}