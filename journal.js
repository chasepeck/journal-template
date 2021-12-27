var file = new XMLHttpRequest();
var text;
file.open("GET", "journal.txt", false);
file.onreadystatechange = function (){
    if(file.readyState === 4){
        if(file.status === 200 || file.status == 0){
            text = file.responseText;
        }
    }
}
file.send(null);

var matches = text.match(/\[([^]*?)\]/g);
console.log(matches);
for(var i = 0; i < matches.length; i++){
	var split = matches[i].replace("[","").replace("]","").split("|");
	var entry = document.createElement("div");

	if(i % 2 == 0){
		entry.setAttribute("style","background-color: rgb(20,20,20);")
	}

	entry.innerHTML = "<b>"+split[0]+"</b> "+split[1];
	document.body.appendChild(entry);
}
