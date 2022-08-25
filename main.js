// bai 1 chia mang chan le

function splitEvenOdd() {
	let text = document.getElementById('array').value;
	const myArray = text.split(',');

	let myEven = [];
	let myOdd = [];

	for (let j = 0; j < myArray.length; j++) {
		if (myArray[j] % 2 == 0) {
			myEven.push(myArray[j]);
		} else myOdd.push(myArray[j]);
	}

	document.getElementById('myEven').innerHTML = myEven;
	document.getElementById('myOdd').innerHTML = myOdd;
}

// bai 2: tinh tong hieu cua 2 so

var num1 = Number(document.getElementById('firstnumber').value);
var num2 = Number(document.getElementById('secondnumber').value);
console.log({ ngoaiham1: num1 });
console.log({ ngoaiham2: num2 });
function getPlus() {
	let plusResult = num1 + num2;
	console.log({ trongham1: num1 });
	console.log({ trongham2: num2 });
	document.getElementById('result').value = plusResult;
}
function getMinute() {
	let num1 = Number(document.getElementById('firstnumber').value);
	let num2 = Number(document.getElementById('secondnumber').value);
	let minuteResult = num1 - num2;
	document.getElementById('result').value = minuteResult;
}
function getMultiple() {
	let num1 = Number(document.getElementById('firstnumber').value);
	let num2 = Number(document.getElementById('secondnumber').value);
	let multipleResult = num1 * num2;
	document.getElementById('result').value = multipleResult;
}
function getDivide() {
	let num1 = Number(document.getElementById('firstnumber').value);
	let num2 = Number(document.getElementById('secondnumber').value);
	let divideResult = Math.round((num1 / num2) * 100) / 100;
	document.getElementById('result').value = divideResult;
}
