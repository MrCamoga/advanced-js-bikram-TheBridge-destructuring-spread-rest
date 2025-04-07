//RESUELVE LOS EJERCICIOS AQUÍ

const empleados = [
	{ name: "Luis", email: "Luis@gmail.com" },
	{ name: "Ana", email: "Ana@gmail.com" },
	{ name: "Andrea", email: "Andrea@gmail.com" },
];

const [luis, ana, andrea] = empleados;

const { email: emailLuis } = luis;

let a = 5;
let b = 3;

[a, b] = [b, a];

const HIGH_TEMPERATURES = {
	yesterday: 30,
	today: 35,
	tomorrow: 32,
};

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;

// Spread / Rest

function sumEveryOther(...numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum;
}

function sumEveryOther2(...numbers) {
	if(numbers.length == 0) return 0;
	let [num0,...nums] = numbers;
	return num0 + sumEveryOther2(nums);
}

function addOnlyNums(...array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] == "number") {
			sum += array[i];
		}
	}
	return sum;
}

function countTheArgs(...args) {
	return args.length;
}

function combineTwoArrays(array1, array2) {
	return [...array1, ...array2];
}

/// 9
function onlyUniques(...args) {
	const res = [];
	for (let i = 0; i < args.length; i++) {
		if (!res.includes(args[i])) {
			res.push(args[i]);
		}
	}
	return res;
}

function onlyUniques2(...args) {
	return [...new Set(args)];
}

function combineAllArrays(...arrays) {
	if (arrays.length == 0) return [];
	let res = [...arrays[0]];
	for (let i = 1; i < arrays.length; i++) {
		res = [...res, ...arrays[i]];
	}
	return res;
}

function combineAllArrays2(...arrays) {
	if (arrays.length == 0) return [];
	let [arr0, ...arrs] = arrays;
	return [...arr0, ...combineAllArrays2(...arrs)];
}

function sumAndSquare(...numbers) {
	// [3,4,2,1]
	let sqnorm = 0;
	for (let i = 0; i < numbers.length; i++) {
		sqnorm += numbers[i] ** 2;
	}
	return sqnorm;
}