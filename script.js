/* This is not valid json, because the key needs
to have quotes around it*/ 
/* functions cannot be parsed to json*/
var person = {
	name: "Ilia",
	age: 23,
	adress: {
		street: "5 main street",
		city: "Boston"
	},
	children: ["Brianna", "Nicholas"]
}

/*
person = JSON.stringify(person); create json string
person = JSON.parse(person); parse json string back to an object
console.log(person); */

/*var people = [
	{
		name:"Ilia",
		age:23,

	},
	{
		name:"John",
		age:34,

	},
	{
		name:"Luke",
		age:26,

	}
]

var output = "";
for(var i = 0; i < people.length; i++){
	//console.log(people[i].name);
	output+= '<li>'+people[i].name+'</li>';
}
document.getElementById("people").innerHTML = output;*/

// Create a simple AJAX request to the people.json file. Note in order for this to work, the sources need to be hosted with e.g. using live-server from npm
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      	var response =JSON.parse(xhttp.responseText);
		//console.log(response.people);	
    	var people = response.people;

    	var output = "";
		for(var i = 0; i < people.length; i++){
			//console.log(people[i].name);
			output+= '<li>'+people[i].name+'</li>';
		}
		document.getElementById("people").innerHTML = output;

	}
};
xhttp.open("GET", "people.json", true);
xhttp.send();