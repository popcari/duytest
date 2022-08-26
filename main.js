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
	if (a + b < c || b + c < a || c + a < b) {
		alert('ABC không phải là hình tam giác');
	} else {
		if ((a === b) & (b === c)) {
			alert('ABC là tam giác đều');
		} else if (a == b || b == c || c == a) {
			if (
				a * a == b * b + c * c ||
				b * b == a * a + c * c ||
				c * c == a * a + b * b
			) {
				alert('ABC là tam giác vuông cân');
			}
			alert('ABC là tam giác cân');
		} else if (
			a * a == b * b + c * c ||
			b * b == a * a + c * c ||
			c * c == a * a + b * b
		) {
			alert('ABC là tam giác vuông ');
		} else if (
			a * a > b * b + c * c ||
			b * b > a * a + c * c ||
			c * c > a * a + b * b
		) {
			alert('ABC là tam giác tù');
		}
	}
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

// bai4
function strLength() {
	let myString = document.getElementById('string').value;
	// console.log(myString);
	let length = 0;
	// console.log(length);
	while (myString[length] !== undefined) {
		length++;
		return length;
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
  
}
