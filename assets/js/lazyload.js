var images = document.getElementsByTagName('img'); 
for(var i = 0; i < images.length; i++) images[i].setAttribute("loading", "lazy");
var iframes = document.getElementsByTagName('iframe');
for(var i = 0; i < iframes.length; i++) iframes[i].setAttribute("loading", "lazy");