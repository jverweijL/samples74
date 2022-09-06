function linkwalkerUrlExists(element, callback) {
    var href=element.getAttribute("href");
    if (href != null && href != ";" && ( href.startsWith("http") || href.startsWith("/"))) { 
    	var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() { 
			if (xhr.readyState === 4) {
				callback(xhr.status < 400, 'xhr'+xhr.status); 
			}
		};
		xhr.onerror = function() { 
	          switch (xhr.status) {
              case 0:
                  callback(false, "likelyCORSproblem");
                  break;
              default:
            	  element.innerHTML += " (" + xhr.status + "!)";
                  callback(false, "unknownProblem");
                  break;
	          }
//			callback(false,'xhrerror'); 
		}
		xhr.open('HEAD', href); 
		xhr.send(); 
	} 
}


var visitAndMarkLinks = function() {
	var selector = ".portlet-body a"; // safe fallback for widget pages due to LPS-104516

	if(document.getElementsByClassName("portlet-layout row").length > 0) {
		console.log("Linkchecking a Widget Page");
	} else {
		console.log("Linkchecking a Content Page");
		selector = "div#main-content a";
	}
	
	var contentPageLinks = document.querySelectorAll(selector);

	contentPageLinks.forEach(function( element ) { 
        linkwalkerUrlExists(element, function(exists, hint) {
            console.log('%s exists?', element.getAttribute("href"), exists); 
            if (!exists) {
                element.classList.add("brokenlink"); 
                element.classList.add(hint); 
            } 
        }); 
    }); 
}

            
Liferay.on("endNavigate", visitAndMarkLinks);
Liferay.on("allPortletsReady", visitAndMarkLinks);