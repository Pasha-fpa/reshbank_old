interface defaultObjectTypes {
	[name: string]: string;
}

const dictionary: defaultObjectTypes = {
	q: 'й',
	w: 'ц',
	e: 'у',
	r: 'к',
	t: 'е',
	y: 'н',
	u: 'г',
	i: 'ш',
	o: 'щ',
	p: 'з',
	'[': 'х',
	']': 'ъ',
	a: 'ф',
	s: 'ы',
	d: 'в',
	f: 'а',
	g: 'п',
	h: 'р',
	j: 'о',
	k: 'л',
	l: 'д',
	';': 'ж',
	// eslint-disable-next-line quotes
	"'": 'э',
	z: 'я',
	x: 'ч',
	c: 'с',
	v: 'м',
	b: 'и',
	n: 'т',
	m: 'ь',
	',': 'б',
	'.': 'ю',
	Q: 'Й',
	W: 'Ц',
	E: 'У',
	R: 'К',
	T: 'Е',
	Y: 'Н',
	U: 'Г',
	I: 'Ш',
	O: 'Щ',
	P: 'З',
	'{': 'Х',
	'}': 'Ъ',
	A: 'Ф',
	S: 'Ы',
	D: 'В',
	F: 'А',
	G: 'П',
	H: 'Р',
	J: 'О',
	K: 'Л',
	L: 'Д',
	':': 'Ж',
	Z: '?',
	X: 'ч',
	C: 'С',
	V: 'М',
	B: 'И',
	N: 'Т',
	M: 'Ь',
	'<': 'Б',
	'>': 'Ю',
};

const useStep1 = () => {
	const maskFio = (fio: string) => {
		return fio
			.replace(/\s+/g, ' ')
			.split(' ')
			.map((word) =>
				word
					.split('')
					.map((char, i) => {
						const res = dictionary[char] || char;
						return i == 0 ? res.toUpperCase() : res;
					})
					.join('')
			)
			.join(' ');
	};
	const validationFio = (errorMessages: defaultObjectTypes, value: string) => {
		if (value.trim() === '') return errorMessages.default;
		const valueArr = value.trim().split(' ');
		if (valueArr.length >= 5) return errorMessages.max;
		if (valueArr.length === 0) return errorMessages.default;
		if (valueArr.length === 1) return errorMessages.name;
		if (valueArr.length === 2) return errorMessages.patronymic;
		return true;
	};

	const maskSum = (value: string) => {
		value = value.replace(/\D/g, '');
		return value !== '' ? (+value).toLocaleString() : value;
	};
	const validationSum = (errorMessages: defaultObjectTypes, value: string) => {
		value = value.replace(/\D/g, '');
		if (value === '') return errorMessages.default;
		else if (+value < 10000) return errorMessages.min;
		return true;
	};

	const maskDateBirth = (value: string) => {
		value = value.trim();
		if (value === '') return '';

		const pureValue = value.match(/[0-9.]/g);
		if (!pureValue) return '';
		let pureValueStr = pureValue.join('');

		if (
			value.length > 5 &&
			(value[2] !== '.' || value[5] !== '.' || value.match(/./g)!.length > 2)
		) {
			const curentValue = pureValueStr.replace(/\D/g, '');
			pureValueStr = `${curentValue.slice(0, 2)}.${curentValue.slice(
				2,
				4
			)}.${curentValue.slice(4, 8)}`;
		} else if (value.length > 2) {
			const curentValue = pureValueStr.replace(/\D/g, '');
			pureValueStr = `${curentValue.slice(0, 2)}.${curentValue.slice(2, 8)}`;
		} else if (value.length > 10) {
			return value.slice(0, 10);
		}

		return pureValueStr;
	};
	const validationDateBirth = (
		errorMessages: defaultObjectTypes,
		value: string
	) => {
		if (value === '') return errorMessages.default;
		if (value.length !== 10) return errorMessages.len;

		value = value.split('.').reverse().join('-');

		if (isNaN(Date.parse(value))) return errorMessages.notDate;

		const today = new Date();
		const birthDate = new Date(value);
		let age = today.getFullYear() - birthDate.getFullYear();
		const m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

		if (age < 18) return errorMessages.less;
		if (age > 80) return errorMessages.more;

		return true;
	};

	const maskPhone = (value: string) => {
		let res = '';
		let pureValue: any[] | null = value.match(/[0-9]/g);

		if (value === '') return '';

		if (pureValue) {
			if (pureValue[0] === '7' || pureValue[0] === '8') pureValue[0] = '7';
			else pureValue.unshift('7');

			for (let i = 0; i < pureValue.length; i++) {
				if (
					i === 1 &&
					(pureValue[i] === '0' ||
						pureValue[i] === '1' ||
						pureValue[i] === '2' ||
						pureValue[i] === '7' ||
						pureValue[i] === '8')
				) {
					pureValue = pureValue.filter((_, index) => index !== 1);
					i--;
				}
			}

			pureValue.forEach((item, i) => {
				if (i === 0) res += `+${item}`;
				else if (i === 1) res += ` (${item}`;
				else if (i === 2) res += `${item}`;
				else if (i === 3) res += `${item}`;
				else if (i === 4) res += `) ${item}`;
				else if (i === 5) res += `${item}`;
				else if (i === 6) res += `${item}`;
				else if (i === 7) res += `-${item}`;
				else if (i === 8) res += `${item}`;
				else if (i === 9) res += `-${item}`;
				else if (i === 10) res += `${item}`;
			});
		}

		return res;
	};
	const maskWorkGoodPhone = (value: string) => {
		let res = '';
		let pureValue: any[] = value.match(/[0-9]/g) || [];

		if (value === '') return '';

		if (pureValue.length === 10) pureValue = ['7', ...pureValue];

		pureValue.forEach((item, i) => {
			if (i === 0) res += '+7';
			else if (i === 1) res += ` (${item}`;
			else if (i === 2) res += `${item}`;
			else if (i === 3) res += `${item}`;
			else if (i === 4) res += `) ${item}`;
			else if (i === 5) res += `${item}`;
			else if (i === 6) res += `${item}`;
			else if (i === 7) res += `-${item}`;
			else if (i === 8) res += `${item}`;
			else if (i === 9) res += `-${item}`;
			else if (i === 10) res += `${item}`;
		});

		return res;
	};

	const validationPhone = (
		errorMessages: defaultObjectTypes,
		value: string
	) => {
		if (value === '') return errorMessages.default;
		if (value.length !== 18) return errorMessages.len;
		let r: any = (value.match(/[0-9]/g) || []).reverse();
		r.length = 10;
		const r2 = r[0];
		r = r.join('').replace(new RegExp(`${r2}`, 'g'), '');
		if (r.length === 0) return errorMessages.noPhone;
		return true;
	};

	const maskEmail = (value: string) => {
		return (value.match(/[a-z0-9-_@.!~*'()]/gi) || []).join('');
	};
	const validationEmail = (
		errorMessages: defaultObjectTypes,
		value: string
	) => {
		if (value === '') return errorMessages.default;
		return (
			/^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i.test(value) || errorMessages.format
		);
	};

	const maskCity = (value: string) => {
		return value;
	};
	const validationCity = (
		errorMessages: defaultObjectTypes,
		value: string,
		isDadata: boolean
	) => {
		if (value === '') return errorMessages.default;
		if (!isDadata) return errorMessages.choice;
		return true;
	};

	return {
		maskFio,
		validationFio,
		maskSum,
		validationSum,
		maskDateBirth,
		validationDateBirth,
		maskPhone,
		maskWorkGoodPhone,
		validationPhone,
		maskEmail,
		validationEmail,
		maskCity,
		validationCity,
	};
};

export default useStep1;
