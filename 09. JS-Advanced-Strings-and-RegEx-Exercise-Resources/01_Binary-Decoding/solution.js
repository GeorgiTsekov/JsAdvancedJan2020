// function solve() {
// 	let input = document.getElementById('input');
// 	let result = document.getElementById('resultOutput')

// 	let reducer = (a, b) => parseInt(a) + parseInt(b);

// 	let sum = Array.from(input.value).reduce(reducer);

// 	while (sum.toString().length > 1) {
// 		let newSum = Array.from(sum.toString()).reduce(reducer);
// 		sum = newSum;
// 	}


// 	let binarys = input.value.slice(sum, Array.from(input.value).length - sum);

// 	let regex = /\d{1,8}/g;
// 	let found = binarys.match(regex);
// 	let letters = [];
// 	found.forEach(binary => {
// 		let digit = parseInt(binary, 2);
// 		const letter = String.fromCharCode(digit);
// 		letters.push(letter);
// 	});

// 	let lastLetters = letters.filter(x => x.match(/[A-Za-z ]/)).join('');

// 	result.innerText = lastLetters;
// }

function solve() {
	let input = document.getElementById('input');
	let result = document.getElementById('resultOutput')

	let num = input.value.split('').map(Number).reduce((a, b) => a + b);

	while (num > 9) {
		num = num.toString().split('').map(Number).reduce((a, b) => a + b)
	}

	let parsedNumber = input.value.slice(num, input.value.length - num);
	
	let chars = [];

	for (let i = 0; i < Math.ceil((parsedNumber.length) / 8); i++) {
		chars.push(String.fromCharCode(parseInt(parsedNumber.slice(i * 8, (i + 1) * 8), 2)))
	}

	let letters = chars.filter(x => x.match(/[A-Za-z ]/)).join('');

	result.innerText = letters;
}