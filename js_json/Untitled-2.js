var senateData = new Vue({
	el: '#app',

	data: {
		members: [],
		checkedNames: [],
		//		  selected:[],
	},
	computed: {
		filterMembers: function(oneMember) {
		 myVue.filter(oneMember => oneMember.party == 'R')||
		myVue.filter(oneMember => oneMember.party == 'D')||
		myVue.filter(oneMember=> oneMember.party == 'I')}
	},
	methods:{
		getApiDate: function(){
			fetch("https://api.propublica.org/congress/v1/113/senate/members.json", {
		method: 'GET',
		headers: {
			"X-API-Key": "mezilZ1NXSlZroQvIjL1Zr9ukE9YVIabN2llfr5d"
		}
	})
	.then( (response) => {
		return response.json()
	})
	.then( (res) =>{
//	myVue(res.results[0].members)
				this.members = res.results[0].members;
//		filterTheTable.members = res.results[0].members;
//		filterTable(filterTheTable);
	})
		}
	},
	created: fun	
});							 
	



var newOption = [];
for(i=0;i<myMembers.length;i++){
    var flag = true;
    var item = myMembers[i].state;
	for(j=0;j<newOption.length;j++){
        
		if (myMembers[i].state==newOption[j]){
            flag = false;
            break;
        }
        
	}
    if(flag) newOption.push(myMembers[i].state);
}

newOption.sort();
console.log(newOption);

//Create options 
//function changeOption(state){
//     var option = document.getElementById("filterTheState");
////    option.innerHTML="";
//  var newOption= [];
//    for (var i=0 ;i < state.length; i++){
//     var select = document.createElement("option");
//   
////console.log(select)
//      var selectState = state[i].state;
//        select.innerHTML = selectState;
//        option.append(select);
////  selectState.sort();
////console.log(selectState);



myMembers.filter(person => person.party == 'R')

myMembers.filter(person => person.party == 'R').length

overview = {
	rep:myMembers.filter(person => person.party == 'R').length,
	demo:myMembers.filter(person => person.party == 'D').length,
	ind:myMembers.filter(person => person.party == 'I').length,
	total:0
}
{rep: 46, demo: 57, ind: 2, total: 0}
overview.total = overview.demo + overview.ind + overview.rep
105
overview
{rep: 46, demo: 57, ind: 2, total: 105}
overview.rep = {num:overview.rep, perc:overview.rep / overview.total}
{num: 46, perc: 0.4380952380952381}

function filterTable(box) {
    console.log(box)
    var newTable = [];
    var newSelect = [];
    if (box.length < 1) {
        newTable = myMembers;
    } else {
        newTable = myMembers.filter(oneMember => box.includes(oneMember.party))
    }
//    if (box.length < 1) {
//        newSelect= myMembers;
//    } else {
//        newTable = myMembers.filter(oneMember => box.includes(oneMember.state))
//    }
    showThisTable(newTable);
}
//    }
//}
//changeOption(myMembers);




//        var select = document.createElement("option");
//        select.innerHTML = newOption;


 //    var filterMatching = myMembers.filter(d =>
    //        return newTable.every(function (c) {
    //            return c(d);
    //        });



//var url = 'js_json/pro-congress-113-senate.js';
//
//var request = new XMLHttpRequest();
//request.open('GET', url, true);

//function changeHandler() {
//    var option= 
//Array.from(document.querySelectorAll('#destinations option:checked').map(opt => opt.value)
//console.log(option);
//}


 var arrPercentageDemocrat = [];
    givenArray.forEach(mem => arrPercentageDemocrat.push(mem.votes_with_party_pct));
    console.log(arrPercentageDemocrat);  
    var arrPercentageIndependent = [];
    givenArray.forEach(mem => arrPercentageIndependent.push(mem.votes_with_party_pct));
    console.log(arrPercentageDemocrat);

 var democratSum = arrPercentageDemocrat.reduce((sum, rep) => sum + rep);
    console.log(democratSum);
    
    var independentSum = arrPercentageIndependent.reduce((sum, rep) => sum + rep);
    console.log(independentSum);


    var avg = democratSum / statistic.democrat.number_of_Reps; 
    
    var avg = independentSum / statistic.independent.number_of_Reps;


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


