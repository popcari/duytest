function onCalculateTriangleArea() {
	let a = Number(document.getElementById('aTriangle').value);
	let b = Number(document.getElementById('bTriangle').value);
	let c = Number(document.getElementById('cTriangle').value);
	let halfPerimeter = (a + b + c) / 2;
	// console.log(halfArea);
	let triangleArea =
		Math.round(
			Math.sqrt(
				halfPerimeter *
					(halfPerimeter - a) *
					(halfPerimeter - b) *
					(halfPerimeter - c)
			) * 10
		) / 10;
	console.log(triangleArea);
	document.getElementById('result_3').value = triangleArea;
}
function onCheckTriangle() {
	let a = Number(document.getElementById('aTriangle').value);
	let b = Number(document.getElementById('bTriangle').value);
	let c = Number(document.getElementById('cTriangle').value);

	let isTriangle = checkValidTriangle(a, b, c);

	let btn = document.getElementById('calculate');

	if (!isTriangle) {
		alert('Không phải là tam giác');
		return false;
	}
	btn.disabled = false;

	if (checkRightAngledTriangle(a, b, c)) {
		alert('Là tam giác vuông');
	}
	else if (checkEquiangularTriangle(a, b, c)) {
		alert('Là tam giác đều');
	} else if (checkIsoscelesTriangle(a, b, c)) {
		alert('Là tam giác cân');
	} else if (checkEquilateralTriangle) {
		alert('Là tam giác tù');
	} else {
		alert('Là tam giác nhọn');
	}
}

//******************************************* */
//******************************************* */

let btn = document.getElementById('calculate');

/**
 * Check triangle or not
 * @param {Integer} sideA 1st edge's length
 * @param {Integer} sideB 2nd edge's length
 * @param {Integer} sideC 3rd edge's length
 * @returns {Boolean} is triangle or not
 */
function checkValidTriangle(sideA, sideB, sideC) {
	return (
		sideA + sideB > sideC &&
		sideB + sideC > sideA &&
		sideC + sideA > sideB
	);
}

/**
 *
 * check triangle is right-angled or not (tam giac vuong)
 * @param {Integer} sideA 1st edge's length
 * @param {Integer} sideB 2nd edge's length
 * @param {Integer} sideC 3rd edge's length
 * @returns {Boolean}
 */
function checkRightAngledTriangle(edgeA, edgeB, edgeC) {
	// console.log('đã chạy tới hàm check tam giác vuông');
	return (
		edgeA * edgeA === edgeB * edgeB + edgeC * edgeC ||
		edgeB * edgeB === edgeA * edgeA + edgeC * edgeC ||
		edgeC * edgeC === edgeA * edgeA + edgeB * edgeB
	);
}

/**
 *
 * Check triangle is Equiangular triangle or not (tam giac deu)
 * @param {Integer} sideA 1st edge's length
 * @param {Integer} sideB 2nd edge's length
 * @param {Integer} sideC 3rd edge's length
 * @returns {Boolean}
 */
function checkEquiangularTriangle(edgeA, edgeB, edgeC) {
	// console.log('đã chạy tới hàm check tam giác đều');
	return edgeA === edgeB && edgeB === edgeC;
}

/**
 *
 * Check triangle is Isossceles triangle or not (tam giac deu)
 * @param {Integer} sideA 1st edge's length
 * @param {Integer} sideB 2nd edge's length
 * @param {Integer} sideC 3rd edge's length
 * @returns {Boolean}
 */
function checkIsoscelesTriangle(edgeA, edgeB, edgeC) {
	// console.log('đã chạy tới hàm check tam giác cân');
	return edgeA == edgeB || edgeB == edgeC || edgeC == edgeA;
}

function checkEquilateralTriangle(edgeA, edgeB, edgeC) {
	// console.log();
	return (
		edgeA * edgeA > edgeB * edgeB + edgeC * edgeC ||
		edgeB * edgeB > edgeA * edgeA + edgeC * edgeC ||
		edgeC * edgeC > edgeA * edgeA + edgeB * edgeB
	);
}
