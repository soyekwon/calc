function addOutput(num){
	var save = document.getElementById("save");
	save.value = save.value + num;
}

function calculate() {
	var save = document.getElementById("save");
	var result = eval(save.value);
	var displayResult = document.getElementById("result");
	displayResult.value = result;
}

function reset() {
	var save = document.getElementById("save");
	var result = document.getElementById("result");
	save.value = "";
	result.value = "";
}

function del() {
	var save = document.getElementById("save");
	var substring = save.value.substring(0, save.value.length -1);
	save.value = substring;
}