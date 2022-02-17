var svg = fragmentElement.querySelector("#toggle-form-button");
svg.addEventListener("click", handleClick);

var b = fragmentElement.querySelector("#save-query-button");
b.addEventListener("click", saveQuery);

function saveQuery() {
	var name = fragmentElement.querySelector("#query-name");
	console.log("saving query " + name.value);
    payload = '{"name": "' + name.value + '" ,"query": "' + location.href + '"}';
	console.log(payload);
	
    submitTaskUpdate(payload);
}

function handleClick() {
  //console.log("star clicked");
	
	var x = fragmentElement.querySelector("#save-query-form");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function submitTaskUpdate(payload){
    Liferay.Util.fetch(
        "/o/c/savedqueries/scopes/" + Liferay.ThemeDisplay.getScopeGroupId(), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf8'
            },
            method: 'POST',
            body: payload
        }
    )
    .then((response) => response.json()) 
    .then((data) => {
        console.log("Return");
        //console.log(data);
        //location.reload();
			Liferay.Util.openToast({
            message: 'Query Saved!',
            type: 'info',
        });
    })
    .catch((error) => {
        console.log(error);
        Liferay.Util.openToast({
            message: 'An error occured.',
            type: 'danger',
        });
    });
}