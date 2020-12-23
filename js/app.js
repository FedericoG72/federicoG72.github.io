if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then((reg) => console.log('Service worker registrato', reg))
    .catch((err) => console.log('Service worker non registrato', err));
}

function finestraConfermaNotify(){
    new Notification('Hai abilitato le notifiche di 80KS');
}


function richiediNotifica(){
    Notification.requestPermission(function(result){
        console.log('Scelta utente', result);
        if (result !== 'permesso'){
            console.log('Notifiche non permesse');
        } else {finestraConfermaNotify();
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