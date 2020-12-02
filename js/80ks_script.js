  var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
        
    }
    
    
}, 5000);






function openMenu() {
    document.getElementById("myMenu").style.height = "100%";
    
}

function closeMenu() {
    document.getElementById("myMenu").style.height = "0%";
    
}

$(window).scroll(function() {
  if ($(this).scrollTop() > 300) {
    $('.logo-bar').show();
  } else {
    $('.logo-bar').hide();
  }
});