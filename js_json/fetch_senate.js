fetch("https://api.propublica.org/congress/v1/113/senate/members.json", {
		method: 'GET',
		headers: {
			"X-API-Key": "mezilZ1NXSlZroQvIjL1Zr9ukE9YVIabN2llfr5d"
		}
	})
	.then(function (response) {
		return response.json()
	})
	.then(function (res) {
		myMembers = res.results[0].members;
		if (document.title == "Senate") {
			showThisTable(myMembers);
			changeOption(myMembers);
		} else if (document.title == "Senate Attendance") {
			numOfReps(myMembers);
			missVote(myMembers);
			showTable();
		} else if(document.title == "Senate Party Loyalty"){
			numOfReps(myMembers);
			loyalVote(myMembers);
			showTable();
		}
	})