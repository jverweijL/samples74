const endpoint = "/o/c/conversations/?pageSize=1&page=";

async function fetchConversationJSON(page) {
    const response = await Liferay.Util.fetch(
        endpoint + page, {
            method: 'GET'
        });
    const conversation = await response.json();
    return conversation;
  }

  fetchConversationJSON(2).then(conversation => {
		var page = Math.floor(Math.random() * conversation.totalCount) + 1;
		fetchConversationJSON(page).then(conversation => {
			fragmentElement.textContent = conversation.items[0].question;
			console.log(conversation.items[0].question);
    	console.log(conversation); // fetched movies
		});
  });