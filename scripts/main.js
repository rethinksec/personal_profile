// Animations
AOS.init({
	anchorPlacement: 'top-left',
	duration: 1000
});

// Add your javascript here

function current_age() {
	today = new Date();
	this_year = today.getFullYear();
	age = this_year - 1996 + 1;
	document.getElementById("age").innerHTML = age;
}