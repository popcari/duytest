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
function onCalculate() {
	let a = Number(document.getElementById('aTriangle').value);
	let b = Number(document.getElementById('bTriangle').value);
	let c = Number(document.getElementById('cTriangle').value);

	let halfArea = (a + b + c) / 2;
	// console.log(halfArea);
	let triangleArea =
		Math.round(
			Math.sqrt(
				halfArea * (halfArea - a) * (halfArea - b) * (halfArea - c)
			) * 10
		) / 10;
	console.log(triangleArea);
	document.getElementById('result_3').value = triangleArea;
}

function onCheck() {
	let a = Number(document.getElementById('aTriangle').value);
	let b = Number(document.getElementById('bTriangle').value);
	let c = Number(document.getElementById('cTriangle').value);
	if (a + b > c && b + c > a && c + a > b) {
		if (
			a * a == b * b + c * c ||
			b * b == a * a + c * c ||
			c * c == a * a + b * b
		) {
			alert('ABC là tam giác vuông');
		} else if (a === b && b === c) {
			alert('ABC là tam giác đều');
		} else if (a == b || b == c || c == a) {
			alert('ABC là tam giác cân');
		} else if (
			a * a > b * b + c * c ||
			b * b > a * a + c * c ||
			c * c > a * a + b * b
		) {
			alert('ABC là tam giác tù');
		} else alert('ABC là tam giác nhọn');
	} else alert('ABC không phải là hình tam giác');
}

// bai4
function strLength() {
	let myString = document.getElementById('string').value;
	// console.log(myString);
	let length = 0;
	// console.log(length);
	while (myString[length] !== undefined) {
		length++;
		// return length;
	}
	console.log('do dai string: ', length);
	document.getElementById('result_4').value = length;
}
function strUpper() {
	let myString = document.getElementById('string').value.toUpperCase();
	console.log(myString);
	document.getElementById('result_4').value = myString;
}
function strLower() {
	let myString = document.getElementById('string').value.toLowerCase();
	console.log(myString);
	document.getElementById('result_4').value = myString;
}
function capitalizeFirstLetter() {
	let myString = document.getElementById('string').value;
	// change myString thành 1 Array chứa các word
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
