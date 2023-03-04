// let box=document.querySelector('#box');
let earth = document.querySelector("#earth-sphere");
let mars = document.querySelector("#mars-sphere");
let mercury = document.querySelector("#mercury-sphere");
let venus = document.querySelector("#venus-sphere");
let jupiter = document.querySelector("#jupiter-sphere");
let saturn = document.querySelector("#saturn-sphere");
let uranus = document.querySelector("#uranus-sphere");
let neptune = document.querySelector("#neptune-sphere");
let sun = document.querySelector("#sun-sphere");
let moon = document.querySelector("#moon-sphere");
let jeep = document.querySelector("#jeep");
let x = 0,
	y = 0,
	z = 0;
let i = setInterval(rotate, 130);
function rotate() {
	// x+=0.05;
	y += 0.1;
	// z+=0.1;
	// x%=360;
	y %= 360;
	// z%=360;
	//box.object3D.rotation.set(45,y,35.26);
	earth.object3D.rotation.set(0, y, 0);
	mars.object3D.rotation.set(0, y, 0);
	mercury.object3D.rotation.set(0, y, 0);
	venus.object3D.rotation.set(0, y, 0);
	jupiter.object3D.rotation.set(0, y, 0);
	saturn.object3D.rotation.set(0, y, 0);
	uranus.object3D.rotation.set(0, y, 0);
	neptune.object3D.rotation.set(0, y, 0);
	sun.object3D.rotation.set(0, y, 0);
	moon.object3D.rotation.set(0, y, 0);
	jeep.object3D.rotation.set(y, y, y);
}
