function displayAlert() {
	document.getElementById("myText").style.fontSize = "24pt";
}
function changeStyle() {
	var myText = document.getElementById("myText");
	var fancyRadio = document.getElementById("fancyRadio");
	var boringRadio = document.getElementById("boringRadio");
	if (fancyRadio.checked) {
		if (document.getElementById("extraFancifyCheckbox").checked) {
			myText.style.fontFamily = "cursive";
			myText.style.fontWeight = "bold";
			myText.style.color = "blue";
			myText.style.textDecoration = "underline";
		}
		else {
			myText.style.fontFamily = "cursive";
			myText.style.fontWeight = "normal";
			myText.style.color = "black";
			myText.style.textDecoration = "none";
		}
	}
	else if (boringRadio.checked) {
		if (document.getElementById("extraFancifyCheckbox").checked) {
			myText.style.fontFamily = "normal";
			myText.style.fontWeight = "bold";
			myText.style.color = "blue";
			myText.style.textDecoration = "underline";
		}
		else {
			myText.style.fontFamily = "normal";
			myText.style.fontWeight = "normal";
			myText.style.color = "black";
			myText.style.textDecoration = "none";
		}
	}
}
function toggleExtraFancify() {
	var myText = document.getElementById("myText");
	var extraFancifyCheckbox = document.getElementById("extraFancifyCheckbox");
	if (extraFancifyCheckbox.checked) {
		if (fancyRadio.checked) {
			myText.style.fontFamily = "cursive";
			myText.style.fontWeight = "bold";
			myText.style.color = "blue";
			myText.style.textDecoration = "underline";
		}
		if (boringRadio.checked) {
			myText.style.fontFamily = "normal";
			myText.style.fontWeight = "bold";
			myText.style.color = "blue";
			myText.style.textDecoration = "underline";
		}
		else {
			myText.style.fontWeight = "bold";
			myText.style.color = "blue";
			myText.style.textDecoration = "underline";
		}
	}
	else {
		myText.style.fontWeight = "normal";
		myText.style.color = "black";
		myText.style.textDecoration = "none";
	}
}
function toUpperCase() {
	var myText = document.getElementById("myText");
	var parts = myText.value.split(".");
	for (var i = 0; i < parts.length; i++) {
		var words = parts[i].split(" ");
		var lastWord = words[words.length - 1];
		words[words.length - 1] = lastWord.toUpperCase() + "-Moo";
		parts[i] = words.join(" ");
	}
	myText.value = parts.join(".");
}