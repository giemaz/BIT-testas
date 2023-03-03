// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

function compare(a, b) {
	if (a > b) {
		console.log(a);
	} else if (a < b) {
		console.log(b);
	} else {
		console.log('Numbers are equal: ' + a);
	}
}

// 2. 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

for (let i = 1; i <= 10; i++) {
	console.log(i);
}

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

for (let i = 0; i <= 10; i += 2) {
	console.log(i);
}

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

for (let i = 0; i < 5; i++) {
	let random = Math.floor(Math.random() * 10) + 1;
	console.log(random);
}

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = numbers.length;

while (i > 1) {
	let randomNumber = Math.floor(Math.random() * i);
	i--;
	let a = numbers[i];
	numbers[i] = numbers[randomNumber];
	numbers[randomNumber] = a;
}
numbers[numbers.indexOf(5)] = numbers[numbers.length - 1];
numbers[numbers.length - 1] = 5;
console.log(numbers.join(', '));

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
let arrA = [];
let length = Math.floor(Math.random() * 11) + 20;
for (let i = 0; i < length; i++) {
	let num = Math.floor(Math.random() * 21) + 10;
	arrA.push(num);
}
let max = arrA[0];
for (let i = 1; i < arr.length; i++) {
	if (arrA[i] > max) {
		max = arrA[i];
	}
}
console.log(`Array: ${arrA}. Max number: ${max}`);

// 7.  Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

let arrB = [];
let letters = ['A', 'B', 'C', 'D'];

for (let i = 0; i < 100; i++) {
	let letter = letters[Math.floor(Math.random() * 4)];
	arrB.push(letter);
}

let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;

for (let i = 0; i < arrB.length; i++) {
	if (arrB[i] === 'A') {
		countA++;
	} else if (arrB[i] === 'B') {
		countB++;
	} else if (arrB[i] === 'C') {
		countC++;
	} else if (arrB[i] === 'D') {
		countD++;
	}
}

console.log(
	`Array: ${arrB}\nCount of A: ${countA}. Count of B: ${countB}. Count of C: ${countC}. Count of D: ${countD}`
);

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).

const LygineSuma = (a, b) => {
	if (typeof a === 'number' && typeof b === 'number') {
		return console.log(`${a} and ${b} are numbers`);
	} else if (Array.isArray(a) && Array.isArray(b)) {
		return console.log(`${a} and ${b} are arrays`);
	} else {
		return console.log('Both arguments must be same type,  numbers or  arrays');
	}
};

// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

const pirminisSkaicius = (n) => {
	if (typeof n !== 'number' || n <= 1) {
		return false;
	}
	for (let i = 2; i <= n / 2; i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
};

// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu -
// "(XXX) XXX-XXXX". (10 taškų)

const telefonoNumeris = (arrC) => {
	if (arrC.length !== 10) {
		return 'Invalid phone number!';
	}
	let country = arrC.slice(0, 3).join('');
	let mid = arrC.slice(3, 6).join('');
	let number = arrC.slice(6, 10).join('');
	return `(${country}) ${mid}-${number}`;
};
