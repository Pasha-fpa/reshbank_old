interface defaultObjectTypes {
	[name: string]: string;
}

const useStep4 = () => {
	const maskPassportNumberSeries = (value: string) => {
		let res = '';
		const pureValue = value.match(/[0-9]/g);

		if (pureValue) {
			if (pureValue.length > 10) pureValue.length = 10;
			pureValue.forEach((item, i) => {
				if (i !== 4) res += `${item}`;
				else res += ` ${item}`;
			});
		}

		return res;
	};
	const validationPassportNumberSeries = (
		errorMessages: defaultObjectTypes,
		value: string
	) => {
		if (value === '') return errorMessages.default;
		if (value.length < 11) return errorMessages.min;
		return true;
	};

	const maskDateOfIssue = (value: string) => {
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
	const _yearsDiff = (dt: any) => {
		if (dt > new Date()) return 0;

		const crntDate = new Date();

		let yearDiff = parseInt(`${crntDate.getFullYear() - dt.getFullYear()}`);

		// прошёл уже текущий год или ещё нет
		const dat4check = new Date(dt);
		dat4check.setFullYear(crntDate.getFullYear());
		if (dat4check > crntDate) yearDiff--;

		if (yearDiff <= 0) return 0;

		if (yearDiff === 1) {
			const monthDiff = parseInt(`${crntDate.getMonth() - dt.getMonth()}`);
			if (monthDiff >= 0) {
				if (monthDiff == 0) {
					const dayDiff = parseInt(`${crntDate.getDate() - dt.getDate()}`);
					if (dayDiff > 0) return yearDiff;
					else return 0;
				} else return crntDate.getFullYear() - dt.getFullYear();
			} else return 0;
		} else return yearDiff;
	};

	const validationDateOfIssue = (
		errorMessages: defaultObjectTypes,
		value: string,
		dateBirth: string
	) => {
		if (value === '') return errorMessages.default;
		if (value.length !== 10) return errorMessages.min;

		if (isNaN(Date.parse(value.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3-$2-$1'))))
			return errorMessages.noDate;

		if (
			new Date(value.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3-$2-$1')) >
			new Date()
		)
			return errorMessages.moreCurrent;

		const dob = new Date(
			dateBirth.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3-$2-$1')
		);
		const pssprtDate = new Date(
			value.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3-$2-$1')
		);

		const pDate20 = new Date(dob);
		pDate20.setFullYear(pDate20.getFullYear() + 20);
		const pDate45 = new Date(dob);
		pDate45.setFullYear(pDate45.getFullYear() + 45);

		const ageDude = parseInt(
			`${_yearsDiff(
				new Date(dateBirth.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3-$2-$1'))
			)}`
		);

		// первая смена паспорта
		if (ageDude >= 20 && ageDude < 45 && pssprtDate < pDate20)
			return errorMessages.noValid;

		// вторая смена паспорта
		if (ageDude >= 45 && pssprtDate < pDate45) return errorMessages.noValid;

		return true;
	};

	const maskUnitСode = (value: string) => {
		if (value === '') return '';

		const clearValue = value.match(/[0-9 ]/g);
		if (!clearValue) return '';
		let newValue = clearValue.join('');

		if (
			value.length > 3 &&
			(value[2] !== '-' || value[5] !== '-' || value.match(/-/g)!.length > 2)
		) {
			const curentValue = newValue.replace(/\D/g, '');
			newValue = `${curentValue.slice(0, 3)}-${curentValue.slice(3, 6)}`;
		} else if (value.length > 10) return value.slice(0, 10);

		return newValue || '';
	};

	const validationUnitСode = (
		errorMessages: defaultObjectTypes,
		value: string
	) => {
		if (value === '') return errorMessages.default;
		if (value.length !== 7) return errorMessages.min;
		return true;
	};

	return {
		maskPassportNumberSeries,
		validationPassportNumberSeries,
		maskDateOfIssue,
		validationDateOfIssue,
		maskUnitСode,
		validationUnitСode,
	};
};

export default useStep4;
