function myVue(data) {

	var senateData = new Vue({
			el: '#filterTheTable',

			data: {
				members: data,
				checkedNames: [],
				states: [],

			},
			computed: {
				filterMembers: function () {
//					if (this.checkedNames.length == 0 && this.states == "all") {
//						return this.members;
//					} else {
//						let filtredArray = []
//						this.members.forEach(oneMember => {
//							if (this.checkedNames.includes(oneMember.party) && ! this.states.includes(oneMember.party)) {
//								filtredArray.push(oneMember.party)
//							}
//						})
//					} else {
//						let filtredArray = []
//						this.members.forEach(oneMember => {
//							if (this.checkedNames.includes(oneMember.state) && ! this.states.includes(oneMember.party)) {
//								filtredArray.push(oneMember.state)
//							}
//						})
//					} else {
//						let filtredArray = [] this.members.forEach(oneMember => {
//							if (this.checkedNames.includes(oneMember.state) && this.states.includes(oneMember.party)) {
//								filtredArray.push(oneMember.state && onMember.party)
//							}
//						})
//						return filtredArray;
//					}
					
					
					//					if (this.checkedNames.length == 0 && this.states == "all") { //if nothing is chosen
					//						console.log(1)
					//						var newTable = this.members;
					//					} else if (box.length > 0 && opt == "all") { //only checkboxes are chosen
					//						console.log(2)
					//						var newTable = this.members.filter(oneMember => this.checkedNames.includes(oneMember.party))
					//					} else if (this.states!= "all" && this.checkedNames.length == 0) { //only options are chosen
					//						console.log(3)
					//						var newTable = this.members.filter(oneMember => opt == oneMember.state)
					//					} else if (this.checkedNames.length > 0 && opt !== "all") { //checkboxes and selects both are chosen
					//						console.log(4)
					//						var newTable = myMembers.filter(oneMember =>  this.checkedNames.includes(oneMember.party) && this.states.includes(oneMember.state))
					//					}
					//
					//					return newtable;
					//				}
					//			},
					
					
									if(this.checkedNames.length==0){
										return this.members;
									} else{
										let filtredArray = []
										this.members.forEach(oneMember => {
											if(this.checkedNames.includes(oneMember.party)){
												filtredArray.push(oneMember)
											}
										})
														return filtredArray;
									}

//									if (this.checkedNames.length == 0 && this.states == "all") {
//										return this.members;
//									} else {
//										let filtredArray = []
//										this.members.forEach(oneMember => {
//											if (this.checkedNames.includes(oneMember.party)) {
//												filtredArray.push(oneMember.party)
//											}
//										})
//									} else {
//										let filtredArray = []
//										this.members.forEach(oneMember => {
//											if (this.checkedNames.includes(oneMember.state)) {
//												filtredArray.push(oneMember.state)
//											}
//										})
//									} else {
//										let filtredArray = []
//										this.members.forEach(oneMember => {
//											if (this.checkedNames.includes(oneMember.state) && this.states.includes(oneMember.party)) {
//												filtredArray.push(oneMember.state && onMember.party)
//											}
//										})
//										return filtredArray;
//									}
								},
					getState() {
						let optionStates = [];
						this.members.forEach(mem => (!optionStates.includes(mem.state)) ? optionStates.push(mem.state) : optionStates);
						return optionStates.sort();
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






//					//					Filter the checkboxes
					//									if(this.checkedNames.length==0){//only checkboxes 
					//										return this.members;
					//									} else{
					//										let filtredArray = []
					//										this.members.forEach(oneMember => {
					//											if(this.checkedNames.includes(oneMember.party)){
					//												filtredArray.push(oneMember)
					//											}
					//										})
					//														return filtredArray;
					//									}
					//
					//								},

					//					Method--B
					//					if (this.checkedNames.length == 0 && this.states == "all") { //if nothing is chosen
					//						console.log(1)
					//						var newTable = this.members;
					//					} else if (box.length > 0 && opt == "all") { //only checkboxes are chosen
					//						console.log(2)
					//						var newTable = this.members.filter(oneMember => this.checkedNames.includes(oneMember.party))
					//					} else if (this.states!= "all" && this.checkedNames.length == 0) { //only options are chosen
					//						console.log(3)
					//						var newTable = this.members.filter(oneMember => opt == oneMember.state)
					//					} else if (this.checkedNames.length > 0 && opt !== "all") { //checkboxes and selects both are chosen
					//						console.log(4)
					//						var newTable = myMembers.filter(oneMember =>  this.checkedNames.includes(oneMember.party) && this.states.includes(oneMember.state))
					//					}
					//
					//					return newtable;
					//				}
					//			},


