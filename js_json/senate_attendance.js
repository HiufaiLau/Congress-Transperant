

var myMembers = data.results[0].members;
var myStatistic = statistic;

numOfReps(myMembers);
missVote(myMembers);
showTable();

//creating table
function showTable() { //this is creating the whole table
	//table for Senate at a glance
	var myTable = document.getElementById("partyTable"); //this new table will connect to html table id 

	var row = document.createElement("tr");
	row.insertCell().innerHTML = "Republicans";
	row.insertCell().innerHTML = statistic.republican.number_of_Reps;
	row.insertCell().innerHTML = statistic.republican.votes_with_party_pct+ " "+"%";
	myTable.append(row);

	var row2 = document.createElement("tr");
	row2.insertCell().innerHTML = "Democrats";
	row2.insertCell().innerHTML = statistic.democrat.number_of_Reps;
	row2.insertCell().innerHTML = statistic.democrat.votes_with_party_pct+ " "+"%";
	myTable.append(row2);

	var row3 = document.createElement("tr");
	row3.insertCell().innerHTML = "Idependents";
	row3.insertCell().innerHTML = statistic.independent.number_of_Reps;
	row3.insertCell().innerHTML = statistic.independent.votes_with_party_pct+ " "+"%";
	myTable.append(row3);

	var row4 = document.createElement("tr");
	row4.insertCell().innerHTML = "Total";
	row4.insertCell().innerHTML = statistic.total.number_of_Reps;
	row4.insertCell().innerHTML = statistic.total.votes_with_party_pct+ " "+"%";
	myTable.append(row4);


	//table for Least Engaged (Bottom 10% Attendance)
	var myTable = document.getElementById("mostMissVoteTable");
	for (i = 0; i < statistic.most_10_pct_missed_votes.length; i++) {
		var row = document.createElement("tr");
		var middleName = statistic.most_10_pct_missed_votes[i].middle_name;
		if (statistic.most_10_pct_missed_votes[i].middle_name == null) { //if the middlename is null , show an empty space 
			middleName = " ";
		} else {
			statistic.most_10_pct_missed_votes[i].middle_name; // if there is middlename , then show it on table row
		}
		var link = statistic.most_10_pct_missed_votes[i].url;
	var fullName = (statistic.most_10_pct_missed_votes[i].first_name + middleName + statistic.most_10_pct_missed_votes[i].last_name);
	row.insertCell().innerHTML = "<a href=" + link + " target='_blank'>" + fullName + "</a>";
		row.insertCell().innerHTML = statistic.most_10_pct_missed_votes[i].missed_votes;
		row.insertCell().innerHTML = statistic.most_10_pct_missed_votes[i].missed_votes_pct+ " "+"%";
		myTable.append(row);
	}

	//table for Most Engaged (Top 10% Attendance)
	var myTable = document.getElementById("leastMissVoteTable")
	for (i = 0; i < statistic.less_10_pct_missed_votes.length; i++) {
		var row = document.createElement("tr");
		var middleName = statistic.less_10_pct_missed_votes[i].middle_name;
		if (statistic.less_10_pct_missed_votes[i].middle_name == null) {
			middleName = " ";
		} else {
			statistic.less_10_pct_missed_votes[i].middle_name;
		}
		var link = statistic.less_10_pct_missed_votes[i].url;
	var fullName = (statistic.less_10_pct_missed_votes[i].first_name + middleName + statistic.less_10_pct_missed_votes[i].last_name);
	row.insertCell().innerHTML = "<a href=" + link + " target='_blank'>" + fullName + "</a>";
	row.insertCell().innerHTML = statistic.less_10_pct_missed_votes[i].missed_votes;
		row.insertCell().innerHTML = statistic.less_10_pct_missed_votes[i].missed_votes;
		row.insertCell().innerHTML = statistic.less_10_pct_missed_votes[i].missed_votes_pct+ " "+"%";
		myTable.append(row);

	}
}

//calculating the number of members and total number , average and total percentage
function numOfReps(myMem) {
	console.log(myMem);
	//Number of Republican
	var republicansArray = myMem.filter(function (oneMember) {
		return oneMember.party === "R";
	});
	console.log(republicansArray)

	statistic.republican.number_of_Reps = republicansArray.length;
	console.log(statistic.republican.number_of_Reps);

	//Number of Democrat 
	var democratArray = myMem.filter(function (oneMember) {
		return oneMember.party === "D";
	});

	statistic.democrat.number_of_Reps =
		democratArray.length;
	console.log(statistic.democrat.number_of_Reps)

	//Number of Independent 
	var independentArray = myMem.filter(function (oneMember) {
		return oneMember.party === "I";
	});
	statistic.independent.number_of_Reps =
		independentArray.length;
	console.log(statistic.independent.number_of_Reps)

	//Number of total
	statistic.total.number_of_Reps = statistic.republican.number_of_Reps + statistic.democrat.number_of_Reps + statistic.independent.number_of_Reps
	console.log(statistic.total_num_reps)
	//average percentage of each party
	//average percentage of republican
	statistic.republican.votes_with_party_pct = countAverage(republicansArray, statistic.republican.number_of_Reps)

	//average percentage of democrat
	statistic.democrat.votes_with_party_pct =
		countAverage(democratArray, statistic.democrat.number_of_Reps)
	//average percentage of indepanet
	statistic.independent.votes_with_party_pct =
		countAverage(independentArray, statistic.independent.number_of_Reps)
	//average percentage of total
	statistic.total.votes_with_party_pct =
		Math.round((countAverage(republicansArray, statistic.republican.number_of_Reps) +
			countAverage(democratArray, statistic.democrat.number_of_Reps) +
			countAverage(independentArray, statistic.independent.number_of_Reps)) / 3 * 100) / 100;


	console.log(statistic);
}

//percentage of each party 
//apply for each party
function countAverage(givenArray, partyLenght) {
	//find the vote percentage of the member from each party
	var arrPercentageOfPartys = [];
	givenArray.forEach(mem => arrPercentageOfPartys.push(mem.votes_with_party_pct));
	console.log(arrPercentageOfPartys);
	//add all vote percentage
	var Sum = arrPercentageOfPartys.reduce((sum, rep) => sum + rep);
	console.log(Sum)
	//find the avg by dividing the number of member (arr.length)
	var avg = Math.round(Sum / partyLenght * 100) / 100;

	return avg //??
}

function missVote(myMemMissVote) {
	//least 10 % engage members
	listOfMissVote = myMemMissVote.sort((a, b) => b.missed_votes_pct - a.missed_votes_pct);
	console.log(listOfMissVote)

	statistic.most_10_pct_missed_votes = myMemMissVote.slice(0, Math.round(myMemMissVote.length * 0.1));
	console.log(statistic.most_10_pct_missed_votes)
	//most 10 % engage members
	var listOfMissVote = myMemMissVote.sort((a, b) => a.missed_votes_pct - b.missed_votes_pct);
	console.log(listOfMissVote)

	statistic.less_10_pct_missed_votes = myMemMissVote.slice(0, Math.round(myMemMissVote.length * 0.1));
	console.log(statistic.most_10_pct_missed_votes)
}
