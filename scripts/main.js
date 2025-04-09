// Copyright KGM, 2025

/** 
 * Номер версии (+ Номер сборки)
 * @type {string}
 */
var version = '0.3.4 (13)';

/**
 * Переменная, содержащая в себе все характеристики всех Резисторов
 */
var R = {

	// R из Дано

	R1: {
		R: 10,
		U: null,
		I: null,
	},

	R2: {
		R: 20,
		U: null,
		I: null,
	},

	R3: {
		R: 30,
		U: null,
		I: null,
	},

	R4: {
		R: 40,
		U: null,
		I: null,
	},

	R5: {
		R: 50,
		U: null,
		I: null,
	},

	R6: {
		R: 60,
		U: null,
		I: null,
	},

	R7: {
		R: 70,
		U: null,
		I: null,
	},

	R8: {
		R: 80,
		U: null,
		I: null,
	},

	R9: {
		R: 90,
		U: null,
		I: null,
	},

	R10: {
		R: 100,
		U: null,
		I: null,
	},

	R11: {
		R: 110,
		U: null,
		I: null,
	},

	R12: {
		R: 120,
		U: null,
		I: null,
	},


	// R штрихи

	R1s: {
		R: null,
		U: null,
		I: null,
		type: null,
		r: [],
	},

	R2s: {
		R: null,
		U: null,
		I: null,
		type: null,
		r: [],
	},

	R3s: {
		R: null,
		U: null,
		I: null,
		type: null,
		r: [],
	},

	R4s: {
		R: null,
		U: null,
		I: null,
		type: null,
		r: [],
	},

	R5s: {
		R: null,
		U: null,
		I: null,
		type: null,
		r: [],
	},

	R6s: {
		R: null,
		U: null,
		I: null,
		type: null,
		r: [],
	},

	R7s: {
		R: null,
		U: null,
		I: null,
		type: null,
		r: [],
	},

	R8s: {
		R: null,
		U: null,
		I: null,
		type: null,
		r: [],
	},

	R9s: {
		R: null,
		U: null,
		I: null,
		type: null,
		r: [],
	},

	R10s: {
		R: null,
		U: null,
		I: null,
		type: null,
		r: [],
	},


	// R общ.

	R0: {
		R: null,
		U: 5,
		I: null,
		type: null,
		r: [],
	},
};

/**
 * Возвращает значения по умолчанию в переменную R
 */
function refreshRObject() {
	R = {

		// R из Дано
	
		R1: {
			R: 10,
			U: null,
			I: null,
		},
	
		R2: {
			R: 20,
			U: null,
			I: null,
		},
	
		R3: {
			R: 30,
			U: null,
			I: null,
		},
	
		R4: {
			R: 40,
			U: null,
			I: null,
		},
	
		R5: {
			R: 50,
			U: null,
			I: null,
		},
	
		R6: {
			R: 60,
			U: null,
			I: null,
		},
	
		R7: {
			R: 70,
			U: null,
			I: null,
		},
	
		R8: {
			R: 80,
			U: null,
			I: null,
		},
	
		R9: {
			R: 90,
			U: null,
			I: null,
		},
	
		R10: {
			R: 100,
			U: null,
			I: null,
		},
	
		R11: {
			R: 110,
			U: null,
			I: null,
		},
	
		R12: {
			R: 120,
			U: null,
			I: null,
		},
	
	
		// R штрихи
	
		R1s: {
			R: null,
			U: null,
			I: null,
			type: null,
			r: [],
		},
	
		R2s: {
			R: null,
			U: null,
			I: null,
			type: null,
			r: [],
		},
	
		R3s: {
			R: null,
			U: null,
			I: null,
			type: null,
			r: [],
		},
	
		R4s: {
			R: null,
			U: null,
			I: null,
			type: null,
			r: [],
		},
	
		R5s: {
			R: null,
			U: null,
			I: null,
			type: null,
			r: [],
		},
	
		R6s: {
			R: null,
			U: null,
			I: null,
			type: null,
			r: [],
		},
	
		R7s: {
			R: null,
			U: null,
			I: null,
			type: null,
			r: [],
		},
	
		R8s: {
			R: null,
			U: null,
			I: null,
			type: null,
			r: [],
		},
	
		R9s: {
			R: null,
			U: null,
			I: null,
			type: null,
			r: [],
		},
	
		R10s: {
			R: null,
			U: null,
			I: null,
			type: null,
			r: [],
		},
	
	
		// R общ.
	
		R0: {
			R: null,
			U: 5,
			I: null,
			type: null,
			r: [],
		},
	};
}

//  debug
// const speedRun = (t=10) => {
// 	// R.R1s.R = (R.R1.R * R.R2.R) / (R.R1.R + R.R2.R);
// 	// R.R1s.r = ['R1', 'R2'];
// 	// R.R1s.type = 'true';

// 	// R.R2s.R = R.R1s.R + R.R3.R;
// 	// R.R2s.r = ['R1s', 'R3'];
// 	// R.R3s.type = 'false';
	
// 	// * 3...

// 	for (let i = 1; i <= t;) {
// 		if (i % 2 == 0) {
// 			R[`R${i}s`]['R'] = R[`R${ i-1 }s`]['R'] + R[`R${ i+1 }`]['R'];
// 			R[`R${i}s`]['r'] = [`R${ i-1 }s`, `R${ i+1 }`]
// 			R[`R${i}s`]['type'] = 'false';
// 		} else {
// 			if (i == 1) {
// 				R[`R1s`]['R'] = (R['R1']['R'] * R['R2']['R']) / (R['R1']['R'] + R['R2']['R']);
// 				R[`R1s`]['r'] = ['R1', 'R2'];
// 				R[`R1s`]['type'] = 'true';
// 			} else {
// 				R[`R${i}s`]['R'] = (R[`R${ i-1 }s`]['R'] * R[`R${ i+1 }`]['R']) / (R[`R${ i-1 }s`]['R'] + R[`R${ i+1 }`]['R']);
// 				R[`R${i}s`]['r'] = [`R${ i-1 }s`, `R${ i+1 }`];
// 				R[`R${i}s`]['type'] = 'true';
// 			}
// 		}

// 		// l(R[`R${i}s`]);
// 		i++;
// 	}

// 	if (t % 2 != 0) {
// 		R['R0']['R'] = R[`R${t}s`]['R'] + R[`R${ t+2 }`]['R'];
// 		R['R0']['r'] = [`R${t}s`, `R${ t+2 }`];
// 		R['R0']['type'] = 'false';
// 		R[`R0`]['U'] = 5;
// 		R[`R0`]['I'] = R['R0']['U'] / R['R0']['R'];
// 	} else {
// 		R[`R0`]['R'] = (R[`R${t}s`]['R'] * R[`R${ t+2 }`]['R']) / (R[`R${t}s`]['R'] + R[`R${ t+2 }`]['R']);
// 		R[`R0`]['r'] = [`R${t}s`, `R${ t+1 }`];
// 		R[`R0`]['type'] = 'true';
		
// 	}

// 	document.getElementById("startWindow").style.display = (`none`);
// 	document.getElementById('inputR1AndRn').style.display = (`none`);
// 	document.getElementById('inputR').style.display = (`none`);
// 	document.getElementById('result').style.display = (`flex`);
// 	document.getElementById('submitButton').disabled = (true);
// 	document.getElementById('submitButton').style.cursor = ("not-allowed");
// 	document.getElementById('submitButton').title = "Rобщ. не задан";

// 	getR_UI(R['R0'], R['R0']['type'], R['R0']['r']);
// 	innerTableAll();

// 	textOfResh = 'its speedrun';
// 	getResh();
// }
// /debug

/**
 * Число, до которого округляются др. числа
 * @type {number}
 */
var okruglenie = 1;
// var userInpNext = 0;
/////////////////////////////////
/////////////////////////////////

/**
 * Возвращает человекопонятный текст для таблицы #result table
 * @method
 * @example
 * let n = Infinity;
 * console.log( checkOut(n) ); // => "∞"
 * @param {number | null} a Число (или null), которое необходимо преобразовать
 * @returns {string} Возвращает преобразованное число в виде строки
 */
const checkOut = (a) => {
	if ( isNaN(a) ) return '-'
	switch (a) {
		case null:
			return '-';
		case Infinity:
			return '∞';
		case -Infinity:
			return '-∞';
		default:
			return a.toFixed(okruglenie);
	}
}

/**
 * Изменяет значения R, U, I всех R в таблице на соответствующие им характеристики
 */
const innerTableAll = () => {
	for (let i = 0; i <= 22;) {
		let R_ = '';
		if (i <= 12) R_ = `${i}`;
		else R_ = `${ i-12 }s`;

		for (j of ['R', 'U', 'I']) {
			document.getElementById(`r${R_}${j}`).innerHTML = ( checkOut(R[`R${R_}`][j]) );
		}
		
		i++;
	}
}

/**
 * Создает дробь (для DOM)
 * @param {number} [numerator=1] Числитель дроби
 * @param {number} [denominator=1] Знаменатель дроби
 * @return {string} Возвращает дробь 
 */
function createFrac(numerator=1, denominator=1) {
	return `<div class="frac">
	<span>${numerator}</span>
	<span class="bottom">${denominator}</span>
	</div>`;
	// <span class="symbol">/</span>
}

/**
 * Находит НОД массива чисел
 * @param {number[]} A Массив чисел
 * @returns НОД(A)
 */
function nod(A) {
	let n = A.length;
	let x = Math.abs(A[0]);
	for (let i = 1; i < n; i++) {
		let y = Math.abs(A[i]);
		while (x && y) x > y ? x %= y : y %= x;
		x += y;
	}
	return x;
}

/**
 * Возвращает НОК массива чисел
 * @param {number[]} A Массив чисел
 * @returns {number} НОК(A)
 */
function nok(A) {
	let n = A.length;
	let a = Math.abs(A[0]);
	for (let i = 1; i < n; i++) {
		let b = Math.abs(A[i]);
		let c = a;
		while (a && b) a > b ? a %= b : b %= a;
		a = Math.abs(c * A[i]) / (a + b);
	}
	return a;
}

/**
 * Возвращает НОК 2-х чисел
 * @param {number} a Первое число
 * @param {number} b Второе число
 * @returns {number} НОК(a, b)
 */
function gcd(a, b) {
	if (!b) return a;
	return gcd(b, a % b);
}
 
// function nok(arr){
//     if(arr.length == 0) return 1
//     // if(arr.some(it => it === 0)) return 0
// 	arr.reduce((a, b) => l(a, b, ';'))
//     return arr.reduce((a, b) => a * b / gcd(a, b));
// }

/**
 * Переходит на 1-ый Шаг
 */
function step0() {
	document.getElementById("startWindow").style.display = (`none`);
	document.getElementById("result").style.display = ("none");
	// document.getElementById("inputInput").style.display = ("flex");
	document.getElementById(`inputRR`).style.display = (`none`);
	document.getElementById('inputR').style.display = (`flex`);
	document.getElementById('sumR').value = (``);
	document.getElementById('sumRs').value = (``);
	disableAllOption();
}

/**
 * Переходит со 1-ого Шага на 2-ой Шаг (step2())
 * @returns {number | undefined} Нужно для работы функции
 */
function step1() {
	document.getElementById('inputRR').style.display = (`flex`);
	document.getElementById(`inputR`).style.display = (`none`);

	for (let i = 1; i <= 12;) {
		document.getElementById(`R${i}ininputrr`).value = ('');
		i++;
	}
	document.getElementById('r0UIininputrr').value = ('');

	for (i of document.getElementsByClassName('RN')) {
		i.style.display = (`block`);
	}

	let tmp = document.getElementById(`sumR`).value;

	if (tmp != '' && +tmp >= 2 && +tmp <= 12) {
		let i = 0;
		let el = document.getElementsByClassName('RN');

		while (i + 1 <= +tmp) {
			el[i].style.display = (`block`);

			i++;
		}

		while (i < 12) {
			el[i].style.display = (`none`);

			i++;
		}
	} else {

		if (document.getElementById('sumR').value != '' && +document.getElementById('sumR').value > 12) {
			document.getElementById('sumR').value = (`12`);
		} else {
			document.getElementById('sumR').value = (`2`);
		}

		step1();

		return 0;
	}
}

/**
 * Переходит со 2-ого Шага на Завершающий Шаг (submit())
 * @returns {number | undefined} Нужно для работы функции
 */
function step2() {
	refreshRObject();
	// textOfResh = '';

	clearAllText();
	// userInpDisabledAll();

	for (let i = 0; i < 12;) {
		let tmp = +document.getElementById(`R${i + 1}ininputrr`).value;
		tmp = tmp == '' ? 10 * (i + 1) : tmp;

		R[`R${i + 1}`]['R'] = tmp;

		i++;
	}

	document.getElementById(`r0U_or_I`).value == '0' ? R['R0']['U'] = (document.getElementById(`r0UIininputrr`).value == '' ? 36 : +document.getElementById(`r0UIininputrr`).value) : R['R0']['I'] = (document.getElementById(`r0UIininputrr`).value == '' ? 36 : +document.getElementById(`r0UIininputrr`).value);
	document.getElementById('inputRR').style.display = (`none`);

	for (let i = 0; i < 10;) {
		test12(`R${i + 1}sRInInput`, null);

		i++;
	}

	for (i of document.getElementsByClassName('RNs')) {
		i.style.display = (`block`);
	}

	let tmp = document.getElementById('sumRs').value;

	if (tmp != '' && +tmp >= 0 && +tmp <= 10) {
		let el = document.getElementsByClassName('RNs');
		let el2 = document.getElementsByClassName('tableRs');
		let i = 0;

		while (i + 1 <= +tmp) {

			el[i].style.display = (`block`);
			el2[i].style.display = (``);

			test12(`R${ i+1 }sRInInput`, null);

			i++;
		}

		while (i < el.length) {

			el[i].style.display = (`none`);
			el2[i].style.display = (`none`);

			test12(`R${i + 1}sRInInput`, true);

			i++;
		}

	} else {
		
		if (document.getElementById('sumRs').value != '' && +document.getElementById('sumRs').value > 10) {
			document.getElementById('sumRs').value = (`10`);
		} else {
			document.getElementById('sumRs').value = (`0`);
		}

		step2();

		return 0;
	};
	if (document.getElementById('sumRs').value != '' && +document.getElementById('sumRs').value + 2 > +document.getElementById('sumR').value) {
		document.getElementById('sumRs').value = (+document.getElementById('sumR').value - 2);

		step2();

		return 0;
	};


	let tmp2 = document.getElementById('sumR').value;

	if (tmp2 != '' && +tmp2 >= 2 && +tmp2 <= 12) {

		let i = 0;
		let el = document.getElementsByClassName('tableR');

		while (i + 1 <= +tmp2) {

			el[i].style.display = (``);
			test12(`R${ i+1 }RInInput`, null);

			i++;
		}

		while (i < 12) {

			el[i].style.display = (`none`);
			test12(`R${i + 1}RInInput`, true);

			i++;
		}

	} else {
		if (document.getElementById('sumR').value != '' && +document.getElementById('sumR').value > 12) {
			document.getElementById('sumR').value = (`12`);
		} else {
			document.getElementById('sumR').value = (`2`);
		};

		step2();

		return 0;
	};

	document.getElementById('inputR').style.display = (`none`);
	document.getElementById('inputR1AndRn').style.display = (`flex`);
	
	// userInpNext = 1;
	// userDisplayEasy();
	test21('noneCls', null);
}

/**
 * Завершает ввод данных, открывает результат
 */
function submit() {
	el__[1].style.maxHeight = (0);

	document.getElementById('inputR1AndRn').style.display = (`none`);
	document.getElementById('inputR').style.display = (`none`);
	// document.getElementById('inputInput').style = (`none`);
	document.getElementById('result').style.display = (`flex`);
	document.getElementById('submitButton').disabled = (true);
	document.getElementById('submitButton').style.cursor = ("not-allowed");
	document.getElementById('submitButton').title = "Rобщ. не задан";


	let r_ = 'R1s';
	
	for (let i = 1; i <= 10 && document.getElementById(r_).style.display != 'none';) {
		if (R[r_]['r'].length != 0) getR(r_);
		else R[r_]['R'] = null;

		i++;

		r_ = `R${i}s`;
	}

	getR('R0');


	refreshR();

	R['R0']['I'] == null ? R['R0']['I'] = R['R0']['U'] / R['R0']['R'] : R['R0']['U'] = R['R0']['I'] * R['R0']['R'];

	getR_UI(R['R0'], R['R0']['type'], R['R0']['r']);

	innerTableAll();
	getResh();

	el__[1].style.maxHeight = ('100%')
	el__[1].style.minHeight = ('100%')
	heights[1] = el__[1].clientHeight;
	el__[1].style.maxHeight = (0);
	// el2__[1].style.color = ('#39739d');
	if (resh_[1])
		document.querySelectorAll('.info_switch')[1].checked = (false);
	resh_[1] = false;


	test21('noneCls', true);

}


var el2_focus = false;

/**
 * pls, delete this func.
 * @private
 */
function test() {
	
	// проверка ввода кол-ва R и R'

	// some code
}

/**
 * Вкл/Выкл элементы класса
 * @param {string} className Название класса
 * @param {boolean} bool Вкл. или выкл. элементы
 */
function test12(className, bool) {
	let els = document.getElementsByClassName(className);

	for (i of els) {
		i.disabled = bool;
	}
}

/**
 * Вкл/Выкл выделение элементов класса
 * @param {string} cls Класс элементов для вкл/выкл выделения
 * @param {boolean} bool Вкл. или выкл. элементы
 */
function test21(cls, bool) {
	let els = document.getElementsByClassName(cls);

	for (i of els) {
		i.selected = bool;
	}
}

/**
 * Открывает кнопку #submitButton
 */
const checkSubmitButton = () => {
	let but = document.getElementById('submitButton');
	let S = R['R0']['r'];

	if (S.length != 0 && checkR_r(S)) {
		but.style.cursor = ("pointer");
		but.disabled = (null);
		but.title = "Перейти к результату";
	}
}

/**
 * Проверяет состав R на наличие состава др. R в составе первого и т. д. до последнего
 * @param {string[]} R_ Массив R, который необходимо проверить
 * @returns {boolean}
 */
function checkR_r(R_) {
	// console.log(R_);

	for (i of R_) {
		try {
			let t = i.includes('s');
			let n = R[i]['r'].length;

			if (t && n != 0) return checkR_r(R[i]['r']);
			else if (t && n.length == 0) return false;
		} catch {
			continue;
		}
	}

	return true;
}

/**
 * Проверяет select на наличие ввода, если ввод есть, то присваивает введенные значения Резистору R_, иначе ничего не делает
 * @param {string} classOfElem Название класса, который будет проверятся
 * @param {string} R_ Название Резистора
 */
function checkInput(classOfElem, R_) {
	let el = document.getElementsByClassName(classOfElem);

	/**
	 * Состав R_ (Из каких Резисторов состоит R_)
	 * @type {string[]}
	 */
	let n1 = getValuesFromSelect(el[0]);
	
	/**
	 * Тип соединения R_
	 * @type {string}
	 */
	let n2 = el[1].value;

	if (n1 != 'none' && n2 != 'none') {

		R[R_]['type'] = n2;
		R[R_]['r'] = n1;

		let t = "";
		let first = true;

		for (const j of n1) {
			if (!first) t += ", ";
			t += j + "R";
			first = false;
		}

		if (n2 == "true") {
			t += "; параллельно.";
		} else {
			t += "; последовательно.";
		}

		t = replaceResult(t);

		document.getElementById(`${R_}text`).innerHTML = (t);

		// getR(R_, n1, n2);
		checkSubmitButton();
		// userInpNext++;
		// userDisplayEasy();
	}
}

/**
 * Находит характеристики R заданного Резистора
 * @param {string} R_ Резистор, для которого мы находим характеристики R
 */
function getR(R_) {
	// l(R_);
	// l(r);
	// l('type = ', type)

	if (R[R_]['type'] == 'true') {

		let promRes = 0;

		for (const i of R[R_]['r']) {
			// console.log(i);
			// console.log(R_, i, Number(R[i]['R']));

			promRes += 1 / Number(R[i]['R']);
		}

		// console.log(promRes + '!!!!!');
		R[R_]['R'] = (1 / promRes);
		
	} else {

		let promRes = 0;

		for (const i of R[R_]['r']) {
			// console.log(R_, i, Number(R[i]['R']));

			promRes += Number(R[i]['R']);
		}

		R[R_]['R'] = promRes;
	}
}

/**
 * Находит харакеристики U, I заданного Резистора
 * @param {string} R_ Резистор, для которого мы находим характеристики U, I
 */
function getR_UI(R_) {
	let type = R_['type'];
	let S = R_['r']

	for (const i of S) {
		let Ri = R[i];

		// 'true' - параллельное соединение;
		// 'false' - последовательное соединение.

		if (type == 'true') {

			R[i]['U'] = R_['U'];
			R[i]['I'] = Ri['U'] / Ri['R'];

		} else {

			R[i]['I'] = R_['I'];
			R[i]['U'] = Ri['I'] * Ri['R'];

		}

		// l(R[i]);
		try {
			getR_UI(Ri/*, R[i]['type'], getValuesFromSelect(document.getElementById(`${i}S1`))*/);
			// l(R[i]['r']);
			// getR_UI(R[i], R[i]['type'], R[i]['r']);
			// l(`${R_} - успех`);
		} catch (e) {
			// console.error(`Возникла ошибка: ${e}`);
		}
	}
}

/**
 * При вводе значения напряжения/силы тока в цепи, соответственно изменяет единицы измерения
 */
function changeInputUI() {
	document.getElementById('r0U_or_I').value == '0' ? document.getElementById('U_or_I').innerHTML = (`В`) : document.getElementById('U_or_I').innerHTML = (`А`);
}

/**
 * Снимает выделение всех option элементов
 */
function disableAllOption() {
	for (i of document.getElementsByTagName('option')) {
		i.selected = (null);
	}
}

var textOfResh = '';

/**
 * Заменяет некоторые символы в строке, которую должен видеть пользователь
 * (человекопонятный текст)
 * @example
 * console.log( replaceResult("R1sR = R1R + R2R") ); // => "R' = R₁ + R₂"
 * @param {string} text Строка, которую следует отредактировать
 * @returns {string} Возвращает отредактированную строку
 */
const replaceResult = (text) => {
	for (let i = 1; i <= 22;) {
		let rpc = [];

		if (i <= 12) rpc = [`R${i}R`, `R<sub>${i}</sub>`];
		else if (i == 13) rpc = [`R1sR`, `R&#8242;`];
		else if (i == 14) rpc = [`R2sR`, `R&#8242;&#8242;`];
		else rpc = [`R${ i-12 }sR`, `R<sup>${ i-12 }&#8242;</sup>`];

		text = text.replaceAll(rpc[0], rpc[1]);

		i++;
	}

	text = text.replaceAll('R0R', 'R<sub>общ.</sub>');

	return text;
}

/**
 * Изменяет текст решения в p #reshenie
 */
const getResh = () => {
	let el = document.getElementById('reshenie');

	el.innerHTML = ( replaceResult(textOfResh) );
}

/**
 * Возвращает массив, состоящий из названий Резисторов, если выбран хотя-бы один параметр в элементе el, иначе возвращает "none"
 * @param {HTMLSelectElement} el select-элемент
 * @returns {string[] | "none"}
 */
const getValuesFromSelect = (el) => {
	let selected = [];

	for (let option of el.options) {
		if (option.selected) {
			selected.push(option.value);
		}
	}

	if (selected.length != 0) {
		return selected;
	} else {
		return `none`;
	}
}

/**
 * Преобразует сумму вида 1/a + 1/b + ... + 1/n в числитель и знаменатель одной дроби
 * @param {number[]} denumerators Массив знаменателей (a, b, ..., n)
 * @returns {string[2]}
 */
function getFracNumDenum(denumerators) {
	let denum = nok(denumerators);

	// l(denum);

	let num = 0;

	for (i of denumerators) {
		num += denum / i;

		// l(denum / i);
		// l(i);
		// l(num);
		// l('-----');
	}

	return [checkOut(num), checkOut(denum)];
}

/**
 * Проверяет R Резисторов на схожесть
 * @param {string[]} R_ Массив, содержащий проверяемые Резисторы
 * @param {number} i Число итераций (Внимание! НЕ ЗАДАВАТЬ!)
 * @returns {boolean} Возвращает true, если все R Резисторов одинаковые, иначе возвращает false
 */
const checkAllRFromArray = (R_, i=1) => {
	if (R[R_[0]]['R'] == R[R_[i-1]]['R']) {
		if (i < R_.length) return checkAllRFromArray(R_, i+1);
		else return true;
	} else return false;
}

/**
 * Создает текст решения
 * @version 2.0
 */
const reshenieRefresh = () => {
	let R_ = 'R0';
	let textReshR0 = "";

	for (let y = 0; y <= 10 && document.getElementById(R_).style.display != 'none';) {
		// let AAA = document.getElementById(R_ + 'S1');
		// let r = getValuesFromSelect(AAA);
		let r = R[R_]['r'];
		// let type = document.getElementById(R_ + 'S').value;
		let type = R[R_]['type'];

		let textTuda = '';
		let textTuda2 = '';
		let textForTuda = '';
		let res = '';

		if (type == 'true') {
			let promRes = 0;
			// let resToNumerator = 0;
			let resToDenominator = [];
			let j = 0;

			for (const i of r) {
				let tmp = checkOut(+R[i]['R']);

				if (checkAllRFromArray(r)) {
					if (j == 0) {
						// textTuda = `/`;
						textTuda = createFrac(`${i}R`, `n`);
						// textTuda2 = `${}/${}`;
						textTuda2 = createFrac(tmp, checkOut(r.length));

						res = R[i]['R'] / r.length;

						break;
					};
				} else if (r.length == 2) {
					if (j == 0) {
						// textTuda = `()/()`;
						textTuda = createFrac(`${r[0]}R${r[1]}R`, `${r[0]}R + ${r[1]}R`);

						let t1 = checkOut(R[r[0]]['R']);
						let t2 = checkOut(R[r[1]]['R']);

						// textTuda2 = `()/()`;
						textTuda2 = createFrac(`${t1} &times; ${t2}`, `${t1} + ${t2}`);

						let t3 = checkOut(R[r[0]]['R'] * R[r[1]]['R']);
						let t4 = checkOut(R[r[0]]['R'] + R[r[1]]['R']);
						
						// textForTuda = `${}/${}`;
						textForTuda = createFrac(t3, t4);
					};
				} else {
					let frac = createFrac(1, `${i}R`);
					if (j > 0) {
						// textTuda = textTuda + ` + 1/${i}R`;
						textTuda = textTuda + ` + ${frac}`;
						textTuda2 = textTuda2 + ` + ${createFrac(1, tmp)}`;
					} else {
						// textTuda = textTuda + `1/${i}R`;
						textTuda = textTuda + frac;
						textTuda2 = textTuda2 + createFrac(1, tmp);
					};
				};

				promRes += 1 / +R[i]['R'];
				// resToNumerator += +R[i]['R'] * (resToDenominator ? resToDenominator : 1);
				resToDenominator.push(+R[i]['R']);
				j++;
			}
			// l(resToDenominator);

			if (!checkAllRFromArray(r)) res = checkOut(1 / promRes);

			if (!checkAllRFromArray(r) && r.length != 2) {
				// textTuda = '1/(' + textTuda + ')';
				// textTuda = createFrac(1, textTuda);
				// textTuda2 = '1/(' + textTuda2 + ')';
				// textTuda2 = createFrac(1, textTuda2);

				// textForTuda = `1/${checkOut(promRes)}`;
				textForTuda = createFrac(1, checkOut(promRes));

				textForTuda = getFracNumDenum(resToDenominator);

				let fractionR_ = createFrac(1, `${R_}R`);

				textOfResh = `${textOfResh}${fractionR_} = ${textTuda} = ${textTuda2} =
				${createFrac(textForTuda[0], textForTuda[1])} =>
				${R_}R = ${createFrac(textForTuda[1], textForTuda[0])}`;
			} else if (!checkAllRFromArray(r) && r.length == 2) {
				textOfResh = `${textOfResh}${R_}R = ${textTuda} = ${textTuda2} = ${textForTuda}`;
			} else {
				textOfResh = `${textOfResh}${R_}R = ${textTuda} = ${textTuda2}`;
			};

			textOfResh = `${textOfResh} = ${res} Ом<br>`;
			if (y == 0) {
				textReshR0 = textOfResh;
				textOfResh = '';
			}
			
		} else {
			let promRes = 0;
			let j = 0;

			for (i of r) {
				let tmp = checkOut(R[i]['R']);
				// l(checkAllRFromArray(r));

				if (checkAllRFromArray(r)) {
					if (j == 0) {
						textTuda = `${i}Rn`;
						// l(textTuda);
						textTuda2 = `${tmp} &times; ${checkOut(r.length)}`;
						// l(textTuda2);

						promRes = R[i]['R'] * r.length;
						// l(promRes);
						break;
					};
				} else {
					if (j > 0) {
						textTuda = textTuda + ` + ${i}R`;
						textTuda2 = textTuda2 + ` + ${tmp}`;
					} else {
						textTuda = textTuda + `${i}R`;
						textTuda2 = textTuda2 + `${tmp}`;
					};

					promRes += R[i]['R'];
					j++;
				};
			}

			textForTuda = `${checkOut(promRes)}`;

			if (r.length != 0 ) textOfResh = `${textOfResh}${R_}R = ${textTuda} = ${textTuda2} = ${textForTuda} Ом<br>`;
			if (y == 0) {
				textReshR0 = textOfResh;
				textOfResh = '';
			}
		};

		y++;

		R_ = `R${y}s`;
	}

	textOfResh = textOfResh + textReshR0;
}

/**
 * Сбрасывает прошлое решение и получает новое
 */
const refreshR = () => {
	textOfResh = "";

	reshenieRefresh();
}

/**
 * Очищает текст предпросмотра и закрывает details выбранных R штрих
 */
const clearAllText = () => {
	let R_ = 'R0';

	for (let i = 0; i <= 10;) {
		document.getElementById(`${R_}text`).innerHTML = ('');
		document.getElementById(`${R_}`).removeAttribute('open');

		i++;

		R_ = `R${i}s`;
	}
}

// Ниже представлен ненужный код, т. к. система, в которой он участвовал, была переработана :)

// /**
//  * Переменная, показывающая нажата ли кнопка p #textReshenie
//  * @type {boolean}
//  */
// var resh = false;

// /**
//  * Переменная, хранящая Timeout для функций ocResh() и showResh()
//  * @type {number}
//  */
// var timer;

// /**
//  * Отвечает за анимацию раскрытия/закрытия p #reshenie при нажатии на кнопку(?)
//  */
// const ocResh = () => {
// 	resh = !resh;
// 	let el = document.getElementById('reshenie');

// 	if (resh) {
// 		clearTimeout(timer);

// 		el.style.visibility = ('visible');
// 		// el.style.display = ('block');
// 		el.style.opacity = (1);
// 		el.style.transform = ('translateY(0px)');
// 	} else {
// 		timer = setTimeout( function() {
// 			el.style.visibility = ('hidden');
// 			// el.style.display = ('none');
// 		}, 370 );

// 		el.style.opacity = (0);
// 		el.style.transform = (`translateY(100%)`);
// 	}
// }

// /**
//  * Отвечает за анимацию раскрытия/закрытия подробного решения (p #reshenie) при наведении мыши на кнопку
//  * @param {boolean} a Активировать или деактивировать p #reshenie
//  */
// const showResh = (a) => {
// 	let el = document.getElementById('reshenie');

// 	if (a) {
// 		clearTimeout(timer);

// 		el.style.visibility = ('visible');
// 		el.style.opacity = (1);
// 		el.style.transform = ('translateY(0px)');
// 	} else if (!a && !resh) {
// 		timer = setTimeout( function() {
// 			el.style.visibility = ('hidden');
// 		}, 370);

// 		el.style.opacity = (0);
// 		el.style.transform = (`translateY(100%)`);
// 	}
// }

// /**
//  * Делает неактивными все элементы .RnsInp, .R0Inp
//  */
// const userInpDisabledAll = () => {
// 	for (let i = 1; i <= 10;) {
// 		for (const j of document.getElementsByClassName(`R${i}sInp`)) {
// 			j.disabled = (true);
// 		}

// 		// document.getElementById(`R${i}s`).style.cursor = ('not-allowed');
// 		i++;
// 	}

// 	for (const i of document.getElementsByClassName('R0Inp')) {
// 		i.disabled = (true);
// 	}

// 	// document.getElementById('R0Rs').style.cursor = ('not-allowed');
// }


// /**
//  * Пошагово раскрывает .R0Inp, .RnsInp при вводе состава R штрихов
//  */
// const userDisplayEasy = () => {
// 	let n = +document.getElementById('sumRs').value;
// 	// let n = 10;
// 	if (n == 0) {
// 		for (const i of document.getElementsByClassName('R0Inp')) {
// 			i.removeAttribute('disabled');
// 		}

// 		// document.getElementById('R0R').style.cursor = ('pointer');
// 	} else if (userInpNext <= n) {
// 		for (let i = 1; i <= userInpNext;) {
// 			for (const j of document.getElementsByClassName(`R${i}sInp`)) {
// 				j.removeAttribute('disabled');
// 			}

// 			// document.getElementById(`R${i}s`).style.cursor = ('pointer');
// 			i++;
// 		}
// 	} else {
// 		for (const i of document.getElementsByClassName('R0Inp')) {
// 			i.removeAttribute('disabled');
// 		}

// 		// document.getElementById('R0Rs').style.cursor = ('pointer');
// 	}
// }

/* support block */

/**
 * Подсвечивает неверные значения при вводе характеристик R Резисторов из Дано
 * @param {number} n Номер id Резистора
 */
function supportCheck(n) {
	let el = document.getElementById(`R${n}ininputrr`);
	// console.log(el);

	try {
		// if (( el.value != '' && +el.value <= 0 ) || t) el.className = c + 'supportGlow';
		if (el.valueAsNumber <= 0) {
			// if (!t) el.classList.add('supportGlow');
			el.style.backgroundColor = ('rgb(255, 230, 230)');
			supportGenerateTextToLabel(document.getElementsByClassName('supportRR')[n - 1], 'Сопротивление не может быть меньше 0 или равно 0.');
		} else if (!el.validity.valid) {
			// if (!t) el.classList.add('supportGlow');
			el.style.backgroundColor = ('rgb(255, 230, 230)');
			supportGenerateTextToLabel(document.getElementsByClassName('supportRR')[n - 1], 'Введено не число.');
		} else {
			// if (t) el.classList.remove('supportGlow');
			el.style.backgroundColor = ('#eee');
			supportGenerateTextToLabel(document.getElementsByClassName('supportRR')[n - 1], '');
		}
	} catch (e) {
		// l('da');
		// if (!t) el.classList.add('supportGlow');
		el.style.backgroundColor = ('rgb(255, 230, 230)');
		supportGenerateTextToLabel(document.getElementsByClassName('supportRR')[n - 1], el.validationMessage);
	}
}

/**
 * Подсвечивает неверное значение при вводе характеристики U/I Резистора Rобщ.
 */
function supportCheckR0UI() {
	let el = document.getElementById(`r0UIininputrr`);
	// console.log(el);

	try {
		// if (( el.value != '' && +el.value <= 0 ) || t) el.className = c + 'supportGlow';
		if (el.valueAsNumber <= 0) {
			// if (!t) el.classList.add('supportGlow');
			el.style.backgroundColor = ('rgb(255, 230, 230)');
			supportGenerateTextToLabel(document.getElementsByClassName('supportR0UI')[0], 'Напряжение (Сила тока) не может быть меньше 0 или равно(а) 0.');
		} else if (!el.validity.valid) {
			// if (!t) el.classList.add('supportGlow');
			el.style.backgroundColor = ('rgb(255, 230, 230)');
			supportGenerateTextToLabel(document.getElementsByClassName('supportR0UI')[0], 'Введено не число.');
		} else {
			// if (t) el.classList.remove('supportGlow');
			el.style.backgroundColor = ('#eee');
			supportGenerateTextToLabel(document.getElementsByClassName('supportR0UI')[0], '');
		}
	} catch (e) {
		// l('da');
		// if (!t) el.classList.add('supportGlow');
		el.style.backgroundColor = ('rgb(255, 230, 230)');
		supportGenerateTextToLabel(document.getElementsByClassName('supportR0UI')[0], el.validationMessage);
	}
}

/**
 * Сбрасывает подсвечивание текста после завершения ввода
 */
function supportCheckAll() {
	for (let i = 1; i <= 12;) {
		supportCheck(i);

		i++;
	}

	supportCheckR0UI();
}

/**
 * Изменяет текст в элементе на сгенерированный
 * @param {HTMLLabelElement} el Элемент, в который пойдет сгенерированный текст
 * @param {string} inpValidity Сгенерированный текст
 */
function supportGenerateTextToLabel(el, inpValidity) {
	// l(inpValidity);
	el.style.visibility = ('visible');

	if (inpValidity == '') el.style.opacity = 0;
	else {
		el.style.opacity = 1;
		el.innerHTML = (inpValidity);
	}
}

/* support block end */


/* dropdown block */

var el__ = [];
var el2__ = [];

var heights = [0, 0];

var resh_ = [false, false];

/**
 * Скрывает, раскрывает выпадающие блоки
 * @param {number} n Номер элемента
 */
function benaun(n) {
	resh_[n] = !resh_[n];

	// l(el__);
	// l(el2__);
	// l(heights);
	if (resh_[n]) {
		el__[n].style.maxHeight = (`${heights[n]}px`);
		el__[n].style.minHeight = (`${heights[n]}px`);

		// el2__[n].style.color = ('blueviolet');
	} else {
		el__[n].style.maxHeight = (0);
		el__[n].style.minHeight = (0);

		// el2__[n].style.color = ('#39739d');
	}
}

/* dropdown block end */

/**
 * Выводит правильный номер сборки в #version, если скрипты активны; в противном случае ничего не изменяет
 */
window.onload = function () {
	refreshRObject();

	el__ = document.querySelectorAll('.info_body');
	el2__ = document.querySelectorAll('.info_headline');

	// l(el2__);
	// l(el__);

	el__[0].style.maxHeight = ('100%')
	el__[0].style.minHeight = ('100%')
	heights[0] = el__[0].clientHeight;
	el__[0].style.maxHeight = (0);


	// document.getElementById('info0').style.width = (`${document.getElementById('title0').clientWidth}px`);

	let d = new Date();
	let year = d.getFullYear();

	if (year > 2023) document.getElementById('author').innerHTML = (`&copy; Козлов Г. М., 2023-${year}`);
	document.getElementById('version').innerHTML = (`Версия: ${version}.`);
	// document.getElementById('scriptsIsActive').innerHTML = ('Script main.js загружен.');
	// document.getElementById('scriptsIsActive').style.color = ('green');
	console.log('Версия: 0.3.4 (13) от 11.01.2024. [РЕЛИЗ]');
	// let el = document.getElementById('reshenie');
	// el.style.transform = (`translateY(-${el.clientHeight}px)`);
}
