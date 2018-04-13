gif = [ 
  	["https://media.giphy.com/media/VwoJkTfZAUBSU/giphy.gif",],
  	["https://media.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy.gif",],
  	["https://media.giphy.com/media/l1J9EdzfOSgfyueLm/giphy.gif",],
  	["https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif",],
  	["https://media.giphy.com/media/Lny6Rw04nsOOc/giphy.gif",],
  	["https://media.giphy.com/media/NTXqH1bUCfHBS/giphy.gif",],
  	["https://media.giphy.com/media/mq5y2jHRCAqMo/giphy.gif",],
  	["https://media.giphy.com/media/5f2mqsGTHpe5a/giphy.gif",]];
	
	
window.onload = function(){
x = Math.floor(Math.random()*gif.length); 
	document.getElementById("invalidpagegif").src = gif[x][0]};