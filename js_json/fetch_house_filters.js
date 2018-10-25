
//console.log(data.results[0].members)
var myMembers = []; //this is my full array
//showThisTable(myMembers); //show the table of myMembers array

function showThisTable(membersInPrint) { //this is creating the whole table
    console.log(membersInPrint)
    var myTable = document.getElementById("houseTable"); //this new table will connect to html table id
    //    console.log('cleaning')
    myTable.innerHTML = ""; //remove all the previous rows
    
    for (i = 0; i < membersInPrint.length; i++) { //run the array of mymember
        var row = document.createElement("tr"); //create the first row  and put the cells in this row
        var firstName = membersInPrint[i].first_name;
        var middleName = membersInPrint[i].middle_name;
        if (membersInPrint[i].middle_name == null) { //if the middlename is null , show an empty space 
            middleName = " ";
        } else {
            membersInPrint[i].middle_name; // if there is middlename , then show it on table row
        }
        var lastName = membersInPrint[i].last_name;
        var fullName = (firstName + middleName + lastName);
        var link = membersInPrint[i].url;
        var party = membersInPrint[i].party;
        var state = membersInPrint[i].state;
        var seniority = membersInPrint[i].seniority;
        var percentage = membersInPrint[i].votes_with_party_pct + "%";

        //insert the cells to html
        var cell_1 = row.insertCell().innerHTML = "<a href=" + link + " target='_blank'>" + fullName + "</a>";
        var cell_2 = row.insertCell().innerHTML = party;
        var cell_4 = row.insertCell().innerHTML = state;
        var cell_5 = row.insertCell().innerHTML = seniority;
        var cell_6 = row.insertCell().innerHTML = percentage;


        myTable.append(row); //a new row will be added in the mytable(tbody)
        console.log('added')
    }
}


//Creating new options 
function changeOption(state) {
// compparing the data of the state with the new array

    var newOption = [];
    for (i = 0; i < myMembers.length; i++) {// loop of var myMember =data.results[0].members

        var boo = true;                
        var item = myMembers[i].state; //find the state
        for (j = 0; j < newOption.length; j++) { //the loop of the newOption 

            if (myMembers[i].state == newOption[j]) {
                boo = false; 
//if the state is already added, it  wont add in the option, then back to the beginning
                break;   //stop moving forward
            }
        }
        if (boo) newOption.push(myMembers[i].state); //if the boolean above is true,add the state inside the options
    }

    newOption.sort(); // sort  by character a-z
    var selectFilter = document.getElementById("filterState"); // refer to select tag in html
    console.log(newOption);

    //put the new options in html select tag
    for (k = 0; k < newOption.length; k++) {  //
        var op = document.createElement("option"); //create the options 
        op.setAttribute("value", newOption[k]); //use the attribute of the option and put the states inside  
        op.innerHTML = newOption[k]; //is a DOM property to insert content to a specified id (#filterTheState)of an element.
        selectFilter.append(op);
//The .append() method inserts the specified content as the last child (add under the op , under the next one and so on)of each element in the jQuery collection 
//(To insert it as the first child, use .prepend()).
    }
    console.log(newOption);
}

//changeOption(myMembers);//refer my whole data



function filterTable(box, opt) {
    console.log(box)
    console.log(opt)
//to filter the data by choosing checkboxes and the options

    if (box.length == 0 && opt == "all") {//if nothing is chosen
        console.log('scenario1')
        newTable = myMembers;
    } else if (box.length > 0 && opt == "all") {//only checkboxes are chosen
        console.log('scenario2')
        newTable = myMembers.filter(oneMember => box.includes(oneMember.party))
    } else if (opt != "all" && box.length == 0) {//only options are chosen
        console.log('scenario3')
        newTable = myMembers.filter(oneMember => opt == oneMember.state)
    } else if (box.length > 0 && opt !== "all") {//checkboxes and selects both are chosen
        console.log('scenario4')
        newTable = myMembers.filter(oneMember => box.includes(oneMember.party) && opt == oneMember.state)
    }

    showThisTable(newTable);
}

function changeEventHandler() {
    var check = Array.from(document.querySelectorAll('input[name=checked]:checked')).map(element => element.value); // the ckeckboxes array , refer to onchange function in html 
    console.log(check);

    var myOption = document.getElementById("filterState"); // the option "string" id refer to html
    console.log(myOption.value);
    filterTable(check, myOption.value)
}