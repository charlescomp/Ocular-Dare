var database = firebase.database().ref();
//Button's actions
function sendMessage(){
	var message = $("#message").val();
	//send to your database
	database.push({
		'MESSAGE': message
	});
}

//assigning variables
var rand 
var newRand
var bta = []


//code that places the random challenge on the challenge page. 

database.on('child_added',function(dataRow){
		var row = dataRow.val();
		bta.push(row.MESSAGE);
		addToPage();
		// $("#messageBoard").append("<p>" + row.MESSAGE);
})
function addToPage(){
	$("#messageBoard").html('');
	rand = bta[Math.floor(Math.random() * bta.length)];
	$("#messageBoard").append("<p>" + rand);
}



