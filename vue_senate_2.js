function myVue(data) {

	var senateData = new Vue({
			el: '#filterTheTable',

			data: {
				members: data,
				checkedNames: [],
				states: this.members,
				selected: '',
			},
			computed: {
				filterMembers: function () {
					if (this.checkedNames.length == 0) {
						return this.members;
					} else {
						var filtredArray = []
						this.members.forEach(oneMember => {
							if (this.checkedNames.includes(oneMember.party) || (this.states.includes(oneMember.state)) {
									filtredArray.push(oneMember)
								})
						})
					} else {
						filtredArray.push(oneMember)
					}
					return filtredArray;
				}
			}

			//				for (i = 0; i < checkedNames.length; i++)
			//					if (checkedNames = "true") {
			//						return myVue.filter(oneMember => myVue.includes(oneMember[i].party).length)
			//					} else if (checkedNames = "false") {
			//					return senateData.myVue[i].length
			//				}
			//				if (checkedNames)
			//					return myVue.push(checkedNames[i].party).length;
		},
		getStates() {
			let a = [];
			this.members.forEach(mem => (!a.includes(mem.state)) ? a.push(mem.state) : a);
			return a;
		}
	}
})
}

//var boo = "false";
//			if (myVue.length == 0)
//myVue.filter(oneMember => oneMember.party == 'R'),
//	})
//	}



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
		//		filterTheTable.members = res.results[0].members;
		//		filterTable(filterTheTable);
	})




//	computed: {
//		filterMembers: function(oneMember) {
//		 

//myVue.filter(oneMember => oneMember.party == 'R'),
//	myVue.filter(oneMember => oneMember.party == 'D'),
//	myVue.filter(oneMember=> oneMember.party == 'I')}
//							 

//							 Vue.filter('concat', function (value, key) {
//    // `this` points to the VM invoking the filter
//    return value + this[key]
//})
//			//to filter the data by choosing checkboxes and the options
//
//			if (box.length == 0) {
//				console.log('scenario1')
//				return this.filterTheTable.members;
//			} else if (box.length > 0) {
//				console.log('scenario2')
//				var newTable = senateData.filter(oneMember => box.includes(oneMember.party = "R"))
//			} else {
//				console.log('scenario3')
//				var newTable = senateData.filter(oneMember => box.includes(oneMember.party = "D"))
//			} else {
//				console.log('scenario3')
//				var newTable = senateData.filter(oneMember => box.includes(oneMember.party = "I"))
//			}
//		}


//computed: {
//				filterMembers: function () {
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
//					//					if (this.checkedNames.length == 0 && this.states == "all") { //if nothing is chosen
//					//						console.log(1)
//					//						var newTable = this.members;
//					//					} else if (box.length > 0 && opt == "all") { //only checkboxes are chosen
//					//						console.log(2)
//					//						var newTable = this.members.filter(oneMember => this.checkedNames.includes(oneMember.party))
//					//					} else if (this.states!= "all" && this.checkedNames.length == 0) { //only options are chosen
//					//						console.log(3)
//					//						var newTable = this.members.filter(oneMember => opt == oneMember.state)
//					//					} else if (this.checkedNames.length > 0 && opt !== "all") { //checkboxes and selects both are chosen
//					//						console.log(4)
//					//						var newTable = myMembers.filter(oneMember =>  this.checkedNames.includes(oneMember.party) && this.states.includes(oneMember.state))
//					//					}
//					//
//					//					return newtable;
//					//				}
//					//			},
//					
//					
////									if(this.checkedNames.length==0){
////										return this.members;
////									} else{
////										let filtredArray = []
////										this.members.forEach(oneMember => {
////											if(this.checkedNames.includes(oneMember.party)){
////												filtredArray.push(oneMember)
////											}
////										})
////														return filtredArray;
////									}
//
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
//								},
