var images = document.getElementsByTagName("img");

var whatToLookOutFor = [
	'heavy-load.png',
	'trouble-afoot.png'
]

for(var i = 0; i < images.length; i+=1){
	for(var j = 0; j < whatToLookOutFor.length; j+=1){
		if(images[i].src.indexOf(whatToLookOutFor[j]) !== -1){
			location.reload();
		} 
	}
}
