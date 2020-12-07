




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

