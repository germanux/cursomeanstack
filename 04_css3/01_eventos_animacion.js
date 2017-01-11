
var contA = 1;

window.onload = function() {
	
	var enlace = document.getElementById("a" + contA);
	setup(enlace);
};

function setup(enlace) {
	
  enlace.addEventListener("animationend", listener, false);
  enlace.setAttribute("class", "reproducir");  
}

function listener(e) {
	switch (e.type) {
    case "animationend":
		contA ++;
	    var enlace = document.getElementById("a" + contA);
		setup(enlace);
      break;
  }
}
