function myVue(data) {

	var senateData = new Vue({
		el: '#filterTheTable',

		data: {
			members: data,
			checkedNames: [],
			states: 'all',
			"total": {
				"number_of_Reps": 0,
				"votes_with_party_pct": 0
			},
			"republican": {
				"number_of_Reps": 0,
				"votes_with_party_pct": 0
			},
			"democrat": {
				"number_of_Reps": 0,
				"votes_with_party_pct": 0
			},
			"independent": {
				"number_of_Reps": 0,
				"votes_with_party_pct": 0
			},

			"most_10_pct_missed_votes": {},
			"less_10_pct_missed_votes": {},

			"most_10_pct_party_votes": {},
			"less_10_pct_party_votes": {},
		},

		computed: {
			filterMembers: function () {

				var filtredArray = []
				this.members.forEach(oneMember => { //only select options
					if (this.checkedNames.length == 0 && this.states == "all") { //nothing is chosen
						filtredArray = this.members;
					} else if (this.checkedNames.length > 0 && this.states == "all") {
						if (this.checkedNames.includes(oneMember.party)) {
							filtredArray.push(oneMember)
						}
					} else if (this.checkedNames.length == 0 && this.states != "all") {
						if (this.states == oneMember.state) {
							filtredArray.push(oneMember)
						}
					} else if (this.checkedNames.length > 0 && this.states != "all") {
						if (this.checkedNames.includes(oneMember.party) && this.states == oneMember.state) {
							filtredArray.push(oneMember)
						}
					}
				})
				return filtredArray;
			},
			getState() { //to list state in  and sort the states 
				let optionStates = [];
				this.members.forEach(mem => (!optionStates.includes(mem.state)) ? optionStates.push(mem.state) : null);
				return optionStates.sort();
			}
		},
		created() {
			this.num();
			this.attendance();
		},
		methods: {
			num: function () {
				var republicansArray = this.members.filter(function (oneMember) {
					return oneMember.party === "R";
				});
				this.republican.number_of_Reps = republicansArray.length;

				var democratArray = this.members.filter(function (oneMember) {
					return oneMember.party === "D";
				});

				this.democrat.number_of_Reps =
					democratArray.length;

				var independentArray = this.members.filter(function (oneMember) {
					return oneMember.party === "I";
				});
				this.independent.number_of_Reps =
					independentArray.length;

				this.total.number_of_Reps = this.republican.number_of_Reps + this.democrat.number_of_Reps + this.independent.number_of_Reps

				//average percentage of each party
				//average percentage of republican
				var republiacanPct = []
				republicansArray.forEach(mem => republiacanPct.push(mem.votes_with_party_pct));
				var republicansSum = republiacanPct.reduce((sum, rep) => sum + rep);
				var republicansAvg = Math.round(republicansSum / republiacanPct.length * 100) / 100;
				console.log(republicansAvg)
				this.republican.votes_with_party_pct = republicansAvg
				//average percentage of democrat
				var democratPct = []
				democratArray.forEach(mem => democratPct.push(mem.votes_with_party_pct));
				var democratSum = democratPct.reduce((sum, rep) => sum + rep);
				var democratAvg = Math.round(democratSum / democratPct.length * 100) / 100;
				this.democrat.votes_with_party_pct = democratAvg

				var independentPct = []
				democratArray.forEach(mem => independentPct.push(mem.votes_with_party_pct));
				var independentSum = independentPct.reduce((sum, rep) => sum + rep);
				var independentAvg = Math.round(independentSum / independentPct.length * 100) / 100;
				this.independent.votes_with_party_pct = independentAvg


				//average percentage of total
				this.total.votes_with_party_pct =
					Math.round((this.republican.votes_with_party_pct + this.democrat.votes_with_party_pct + this.independent.votes_with_party_pct) / 3 * 100) / 100;
			},
			attendance: function () {
				//least 10 % engage members
				var mostMissVote = this.members.sort((a, b) => b.missed_votes_pct - a.missed_votes_pct);
				this.most_10_pct_missed_votes = mostMissVote.slice(0, Math.round(mostMissVote.length * 0.1));
				
				//most 10 % engage members
				var leastMissVote = this.members.sort((a, b) => a.missed_votes_pct - b.missed_votes_pct);
				this.less_10_pct_missed_votes = leastMissVote.slice(0, Math.round(leastMissVote.length * 0.1));
			}
		}
	})
}


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
		myVue(res.results[0].members)
	})
