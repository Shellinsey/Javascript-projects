// JavaScript source code
function my_Dictionary() {
	var Animal = {
	Species:"Dog",
	Color: "Black",
	Breed: "Labador",
	Age: 5,
	Sound: "Bark!"
};
delete Animal.Sound;
document.getElementById("Dictionary").innerHTML = Animal.Sound;
}
function my_Dictionary2() {
	var Animal = {
		Species: "Dog",
		Color: "Black",
		Breed: "Laborador",
		Age: 5,
		Sound: "Bark!"
	};
	document.getElementById("Dictionary2") .innerHTML = Animal.Sound;
}