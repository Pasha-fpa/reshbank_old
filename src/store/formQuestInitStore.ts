export const formQuestInitStore = {
	checkbox1: {
		value: 'true',
		isValid: true,
		errorMessages: {
			default: 'Примите оба согласие для отправки заявки и получения кредита',
		},
		points: 0,
	},
	checkbox2: {
		value: 'true',
		isValid: true,
		errorMessages: {
			default: 'Примите оба согласие для отправки заявки и получения кредита',
		},
		points: 0,
	},
	fio: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			name: 'Укажите ваше имя',
			patronymic: 'Укажите ваше отчество',
			max: 'ФИО должно содержать до 4 слов',
		},
		points: 1,
	},
	sum: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			min: 'Минимальная сумма - 10 000р',
		},
		points: 1,
	},
	dateBirth: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			less: 'Минимальный возраст - 18 лет',
			more: 'Максимальный возраст - 80 лет',
			notDate: 'Укажите вашу настоящую дату рождения',
			len: 'Дата рождения состоит из 8 цифр',
		},
		points: 1,
	},
	phone: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			noPhone: 'Укажите настоящий номер телефона',
			len: 'Номер телефона состоит из 10 цифр',
		},
		points: 1,
	},
	email: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			format: 'Неверный формат электронной почты',
		},
		points: 1,
	},
	city: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			choice: 'Необходимо выбрать из списка',
		},
		isDadata: false,
		points: 1,
	},
	// Step2
	income: {
		value: 'none',
		isValid: false,
		errorMessages: {
			choice: 'Необходимо выбрать из списка',
		},
		points: 1,
	},
	employment: {
		value: 'none',
		isValid: false,
		errorMessages: {
			choice: 'Необходимо выбрать из списка',
		},
		points: 1,
	},
	methodConfirmingIncome: {
		value: 'none',
		isValid: false,
		errorMessages: {
			choice: 'Необходимо выбрать из списка',
		},
		points: 1,
	},
	creditHistory: {
		value: 'none',
		isValid: false,
		errorMessages: {
			choice: 'Необходимо выбрать из списка',
		},
		points: 1,
	},
	education: {
		value: 'none',
		isValid: false,
		errorMessages: {
			choice: 'Необходимо выбрать из списка',
		},
		points: 1,
	},
	own: {
		value: 'none',
		isValid: false,
		errorMessages: {
			choice: 'Необходимо выбрать из списка',
		},
		points: 1,
	},
	startWorkLastPlaceMonth: {
		value: 'none',
		isValid: false,
		errorMessages: {
			choice: 'Необходимо заполнить это поле',
		},
		points: 1,
	},
	startWorkLastPlaceYear: {
		value: 'none',
		isValid: false,
		errorMessages: {
			choice: 'Необходимо заполнить это поле',
		},
		points: 1,
	},

	// Step3
	organization: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			choice: 'Необходимо выбрать из списка',
		},
		isDadata: false,
		points: 1,
	},
	workPhone: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			noPhone: 'Укажите настоящий номер телефона',
			len: 'Номер телефона состоит из 10 цифр',
		},
		points: 1,
	},
	positionWork: {
		value: 'none',
		isValid: false,
		errorMessages: {
			choice: 'Необходимо выбрать из списка',
		},
		points: 1,
	},
	totalWorkExperience: {
		value: 'none',
		isValid: false,
		errorMessages: {
			choice: 'Необходимо выбрать из списка',
		},
		points: 1,
	},
	familyStatus: {
		value: 'none',
		isValid: false,
		errorMessages: {
			choice: 'Необходимо выбрать из списка',
		},
		points: 1,
	},
	amountChildren: {
		value: '0',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
		},
		points: 1,
	},
	loansPerMonth: {
		value: '0',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
		},
		points: 1,
	},
	placeResidence: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			choice: 'Необходимо выбрать из списка',
			city: 'Укажите населённый пункт',
			street: 'Укажите улицу',
			house: 'Укажите дом',
		},
		isDadata: false,
		points: 1,
	},

	// Step4
	passportNumberSeries: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			min: 'Серия и номер паспорта состоят из 10 цифр',
		},
		points: 1,
	},
	dateOfIssue: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			min: 'Дата выдачи состоит из 8 цифр',
			noDate: 'Укажите вашу настоящую дату выдачи паспорта',
			noValid: 'Неверно указана дата выдачи паспорта',
			moreCurrent: 'Дата выдачи не может быть позднее сегодняшней',
		},
		points: 1,
	},
	unitСode: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			min: 'Дата выдачи состоит из 6 цифр',
		},
		points: 1,
	},
	issuedBy: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
		},
		points: 1,
	},
	placeOfBirth: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо выбрать из списка',
			choice: 'Необходимо выбрать из списка',
		},
		isDadata: false,
		points: 1,
	},
};

export const step1Fields = {
	fio: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			name: 'Укажите ваше имя',
			patronymic: 'Укажите ваше отчество',
			max: 'ФИО должно содержать до 4 слов',
		},
		points: 1,
	},
	sum: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			min: 'Минимальная сумма - 10 000р',
		},
		points: 1,
	},
	dateBirth: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			less: 'Минимальный возраст - 18 лет',
			more: 'Максимальный возраст - 80 лет',
			notDate: 'Укажите вашу настоящую дату рождения',
			len: 'Дата рождения состоит из 8 цифр',
		},
		points: 1,
	},
	phone: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			noPhone: 'Укажите настоящий номер телефона',
			len: 'Номер телефона состоит из 10 цифр',
		},
		points: 1,
	},
	email: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			format: 'Неверный формат электронной почты',
		},
		points: 1,
	},
	city: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			choice: 'Необходимо выбрать из списка',
		},
		isDadata: false,
		points: 1,
	},
};

export const step2Fields = {
	income: {
		value: 'none',
		isValid: false,
		errorMessages: {
			choice: 'Необходимо выбрать из списка',
		},
		points: 1,
	},
	employment: {
		value: 'none',
		isValid: false,
		errorMessages: {
			choice: 'Необходимо выбрать из списка',
		},
		points: 1,
	},
	methodConfirmingIncome: {
		value: 'none',
		isValid: false,
		errorMessages: {
			choice: 'Необходимо выбрать из списка',
		},
		points: 1,
	},
	creditHistory: {
		value: 'none',
		isValid: false,
		errorMessages: {
			choice: 'Необходимо выбрать из списка',
		},
		points: 1,
	},
	education: {
		value: 'none',
		isValid: false,
		errorMessages: {
			choice: 'Необходимо выбрать из списка',
		},
		points: 1,
	},
	own: {
		value: 'none',
		isValid: false,
		errorMessages: {
			choice: 'Необходимо выбрать из списка',
		},
		points: 1,
	},
	startWorkLastPlaceMonth: {
		value: 'none',
		isValid: false,
		errorMessages: {
			choice: 'Необходимо заполнить это поле',
		},
		points: 1,
	},
	startWorkLastPlaceYear: {
		value: 'none',
		isValid: false,
		errorMessages: {
			choice: 'Необходимо заполнить это поле',
		},
		points: 1,
	},
};

export const step3Fields = {
	organization: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			choice: 'Необходимо выбрать из списка',
		},
		points: 1,
	},
	workPhone: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			noPhone: 'Укажите настоящий номер телефона',
			len: 'Номер телефона состоит из 10 цифр',
		},
		points: 1,
	},
	positionWork: {
		value: 'none',
		isValid: false,
		errorMessages: {
			choice: 'Необходимо выбрать из списка',
		},
		points: 1,
	},
	totalWorkExperience: {
		value: 'none',
		isValid: false,
		errorMessages: {
			choice: 'Необходимо выбрать из списка',
		},
		points: 1,
	},
	familyStatus: {
		value: 'none',
		isValid: false,
		errorMessages: {
			choice: 'Необходимо выбрать из списка',
		},
		points: 1,
	},
	amountChildren: {
		value: '0',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
		},
		points: 1,
	},
	loansPerMonth: {
		value: '0',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
		},
		points: 1,
	},
	placeResidence: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			choice: 'Необходимо выбрать из списка',
			city: 'Укажите населённый пункт',
			street: 'Укажите улицу',
			house: 'Укажите дом',
		},
		isDadata: false,
		points: 1,
	},
};

export const step4Fields = {
	passportNumberSeries: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			min: 'Серия и номер паспорта состоят из 10 цифр',
		},
		points: 1,
	},
	dateOfIssue: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			min: 'Дата выдачи состоит из 8 цифр',
			noDate: 'Укажите вашу настоящую дату выдачи паспорта',
			noValid: 'Неверно указана дата выдачи паспорта',
		},
		points: 1,
	},
	unitСode: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
			min: 'Дата выдачи состоит из 6 цифр',
		},
		points: 1,
	},
	issuedBy: {
		value: '',
		isValid: false,
		errorMessages: {
			default: 'Необходимо заполнить это поле',
		},
		points: 1,
	},
	placeOfBirth: {
		value: '',
		isValid: false,
		errorMessages: {
			choice: 'Необходимо выбрать из списка',
		},
		isDadata: false,
		points: 1,
	},
};
