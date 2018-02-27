let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer.value == '' || attempt.value == ''){
    	setHiddenFields();
    	
    }
    if(!validateInput(input.value)){
    	return;
    }
 		attempt.value++;
    if(getResults(input.value)){
    	setMessage("You Win! :)");
    	showAnswer(true);
    	showReplay();
    }

    else if(attempt <= 10){
		setMessage("You Lose!:(") ;
		showAnswer(false);
    	showReplay();   
	}
    else{setMessage("Incorrect, try again.")

	}
}

//implement new functions here
function setHiddenFields(){
	attempt.value = 0;
	answer.value= Math.floor(Math.random() *10000).toString();
	while(answer.value.length<4){
		answer.value = "0" + answer.value;
	}
	attempt.value = "0";	
	attempt++;
}

function setMessage(message){
	document.getElementById('message').innerHTML = message;
}

function validateInput(input){
	if(input.length === 4){
		return true;
	}
	else{
		message = "Guesses must be exactly 4 characters Long" ;
		return false;
	}
}

function getResults(input){
	let correct = 0;
	let html = "<div class='row'><span class='col-md-6'>" + input + "</span><div class='col-md-6'>";
	for(let i = 0; i < input.length;i++){
		if(input.charAt(i)===answer.value.charAt(i)){
			html += "<span class='glyphicon glyphicon-ok'></span>";
		}
		else if(answer.value.indexOf(input.charAt(i))>-1){
			html+="<span class='glyphicon glyphicon-transfer'></span>"
		}
		else{html+="<span class='glyphicon glyphicon-remove'></span>"}
	};
	html += "</div></div>";
	document.getElementById('results').innerHTML+=html;

	if(input==answer.value){
		return true;
	}
		return false;

}

function showAnswer(success){
	let elm = document.getElementById('code');
	if(success){
		elm.className=' success'
	}
	
	else{
		elm.className=' failure'
	}
	code.innerHTML = answer.value;
}

function showReplay(){
	let gdiv =	document.getElementById('guessing-div');
	gdiv.style.display = none;
	let rdiv = document.getElementById('replay-div');
	rdiv.style.display = block;
}
setHiddenFields();