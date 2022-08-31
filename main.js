var courses = [
	{
		id: 1,
		name: 'HTML',
		price: 500,
	},
	{
		id: 2,
		name: 'CSS',
		price: 500,
	},
	{
		id: 1,
		name: 'Javascript',
		price: 1500,
	},
	{
		id: 4,
		name: 'Vuejs3',
		price: 2000,
	},
];
let i = 0;
function priceCalculate(accumulator, currentValue, currentIndex) {
	i++;
	var total = accumulator + currentValue.price;
	console.table({
		id: i,
		'lưu trũ': accumulator,
		'Courses price: ': currentValue.price,
		'tích trữ: ': total,
	});

	return total;
}
var totalPrice = courses.reduce(priceCalculate, 0);
console.log(totalPrice);

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

function getPlus() {
	var num1 = Number(document.getElementById('firstnumber').value);
	var num2 = Number(document.getElementById('secondnumber').value);
	let plusResult = num1 + num2;

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

// leeson 3: tinh dien tich tam giac biet 3 canh

// bai4
function strLength() {
	let myString = document.getElementById('string').value;
	let length = 0;
	while (myString[length] !== undefined) {
		length++;
	}
	document.getElementById('result_4').value = length;
}
function strUpper() {
	let myString = document.getElementById('string').value.toUpperCase();
	document.getElementById('result_4').value = myString;
}
function strLower() {
	let myString = document.getElementById('string').value.toLowerCase();
	document.getElementById('result_4').value = myString;
}
function capitalizeFirstLetter() {
	let myString = document.getElementById('string').value;
	// convert myString thành Array chứa các word
	let newArray = myString.split(' ');
	// change các chữ csai đầu của array mới tạo thành in hoa
	for (let i = 0; i < newArray.length; i++) {
		newArray[i] = newArray[i][0].toUpperCase() + newArray[i].slice(1);
	}
	console.log('array sau khi split: ', newArray);
	// sau khi in hoa các chữ cái đầu thì ghép lại thành newString
	let newString = newArray.join(' ');
	console.log('new string là: ', newString);
	// console.log('fdasfsda', newArray);
	document.getElementById('result_4').value = newString;
}
function camelCase() {
	let myString = document.getElementById('string').value;
	let newArray = myString.split(' ');
	for (let i = 1; i < newArray.length; i++) {
		newArray[i] = newArray[i][0].toUpperCase() + newArray[i].slice(1);
	}
	console.log('array sau khi split: ', newArray);
	let newString = newArray.join('');
	console.log('new string là: ', newString);
	document.getElementById('result_4').value = newString;
}
function snakeCase() {
	let myString = document.getElementById('string').value;
	let newArray = myString.split(' ');
	let newString = newArray.join('_');
	console.log('new string là: ', newString);
	document.getElementById('result_4').value = newString;
}

// bai 5 sap xep mang tang dan & giam dan (ko dùng built-in function)
function lowToHigh() {
	let text = document.getElementById('lesson_5').value;
	const myArray = text.split(',');
	// console.log({ lesson5: myArray });
	let n = myArray.length;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n - 1; j++) {
			if (Number(myArray[j]) > Number(myArray[j + 1])) {
				let temp = myArray[j];
				myArray[j] = myArray[j + 1];
				myArray[j + 1] = temp;
			}
		}
	}
	console.log(myArray);
	document.getElementById('lowtohigh').value = myArray;
}
function highToLow() {
	let text = document.getElementById('lesson_5').value;
	const myArray = text.split(',');
	let n = myArray.length;
	for (let i = n - 1; i >= 0; i--) {
		for (let j = n - 1; j > 0; j--) {
			if (Number(myArray[j]) > Number(myArray[j - 1])) {
				let temp = myArray[j];
				myArray[j] = myArray[j - 1];
				myArray[j - 1] = temp;
			}
		}
	}
	console.log(myArray);
	document.getElementById('hightolow').value = myArray;
}
