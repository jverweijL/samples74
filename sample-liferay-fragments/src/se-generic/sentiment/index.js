var svgs = fragmentElement.getElementsByTagName('svg');

for (const svg of svgs) {
	//const sentiment = svg.getAttribute("data-sentiment");
	svg.addEventListener("click", handleClick);
}

function handleClick() {
  console.log(this.getAttribute("data-sentiment"));
	var today = new Date();
	var now = today.getFullYear() + ("0" + (today.getMonth() + 1)).slice(-2) + ("0" + (today.getUTCDate())).slice(-2)
	console.log(now);
	
	Analytics.track("Sentiment",{
		'date': now.toString(),
    'sentiment': this.getAttribute("data-sentiment")
	});
	console.log('sentiment tracked');
}