async function getStatus() {
  let response = await fetch('http://www.randomnumberapi.com/api/v1.0/random?min=0&max=5&count=1');
  let data = await response.json(); //extract JSON from the http response
  // do something with myJson
	if (data[0] > 0) {
		console.log('blah');
		var circles = fragmentElement.getElementsByTagName("svg")[0].getElementsByTagName("circle");
		for (var i = 0; i < circles.length; i++) {
			circles[i].style.fill = "green"
		}
	}
	return(data);
}

getStatus().then(data => console.log(data));