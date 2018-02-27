let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields(){
	answer = [];
	for(let i = 0; i < 4; i++){
		answer[i] = Math.random();
	}
	console.log answer;
}


setHiddenFields();