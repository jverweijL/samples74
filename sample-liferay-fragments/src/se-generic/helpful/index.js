var myFunction = function(){
    //alert("registered");
	  this.classList.remove("btn-secondary");
	  this.classList.add("btn-primary");
};

var elements = fragmentElement.getElementsByClassName("btn-secondary");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}