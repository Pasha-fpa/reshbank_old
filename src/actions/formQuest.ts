export const setCheckbox1 = (
	dispatch: any,
	checkbox1: any,
	value: string,
	isValid: boolean
) => {
	dispatch({
		type: 'UPDATE_CHECKBOX_1',
		payload: {
			...checkbox1,
			value,
			isValid,
		},
	});
};
export const setCheckbox2 = (
	dispatch: any,
	checkbox2: any,
	value: string,
	isValid: boolean
) => {
	dispatch({
		type: 'UPDATE_CHECKBOX_2',
		payload: {
			...checkbox2,
			value,
			isValid,
		},
	});
};

export const setFio = (
	dispatch: any,
	fio: any,
	value: string,
	isValid: boolean | string
) => {
	dispatch({
		type: 'UPDATE_FIO',
		payload: {
			...fio,
			value,
			isValid,
		},
	});
};

export const setSum = (
	dispatch: any,
	sum: any,
	value: string,
	isValid: boolean | string
) => {
	dispatch({
		type: 'UPDATE_SUM',
		payload: {
			...sum,
			value,
			isValid,
		},
	});
};

export const setDateBirth = (
	dispatch: any,
	dateBirth: any,
	value: string,
	isValid: boolean | string
) => {
	dispatch({
		type: 'UPDATE_DATE_BIRTH',
		payload: {
			...dateBirth,
			value,
			isValid,
		},
	});
};

export const setPhone = (
	dispatch: any,
	phone: any,
	value: string,
	isValid: boolean | string
) => {
	dispatch({
		type: 'UPDATE_PHONE',
		payload: {
			...phone,
			value,
			isValid,
		},
	});
};

export const setEmail = (
	dispatch: any,
	email: any,
	value: string,
	isValid: boolean | string
) => {
	dispatch({
		type: 'UPDATE_EMAIL',
		payload: {
			...email,
			value,
			isValid,
		},
	});
};

export const setCity = (
	dispatch: any,
	city: any,
	value: string,
	isValid: boolean | string,
	isDadata: boolean
) => {
	dispatch({
		type: 'UPDATE_CITY',
		payload: {
			...city,
			value,
			isValid,
			isDadata,
		},
	});
};
// Step 2
export const setIncome = (
	dispatch: any,
	income: any,
	value: string,
	isValid: boolean | string
) => {
	dispatch({
		type: 'UPDATE_INCOME',
		payload: {
			...income,
			value,
			isValid,
		},
	});
};

export const setEmployment = (
	dispatch: any,
	employment: any,
	value: string,
	isValid: boolean | string
) => {
	dispatch({
		type: 'UPDATE_EMPLOYMENT',
		payload: {
			...employment,
			value,
			isValid,
		},
	});
};

export const setMethodConfirmingIncome = (
	dispatch: any,
	methodConfirmingIncome: any,
	value: string,
	isValid: boolean | string
) => {
	dispatch({
		type: 'UPDATE_METHOD_CONFIRMING_INCOME',
		payload: {
			...methodConfirmingIncome,
			value,
			isValid,
		},
	});
};

export const setCreditHistory = (
	dispatch: any,
	creditHistory: any,
	value: string,
	isValid: boolean | string
) => {
	dispatch({
		type: 'UPDATE_CREDIT_HISTORY',
		payload: {
			...creditHistory,
			value,
			isValid,
		},
	});
};

export const setEducation = (
	dispatch: any,
	education: any,
	value: string,
	isValid: boolean | string
) => {
	dispatch({
		type: 'UPDATE_EDUCATION',
		payload: {
			...education,
			value,
			isValid,
		},
	});
};

export const setOwn = (
	dispatch: any,
	own: any,
	value: string,
	isValid: boolean | string
) => {
	dispatch({
		type: 'UPDATE_OWN',
		payload: {
			...own,
			value,
			isValid,
		},
	});
};

export const setStartWorkLastPlaceMonth = (
	dispatch: any,
	startWorkLastPlaceMonth: any,
	value: string,
	isValid: boolean | string
) => {
	dispatch({
		type: 'UPDATE_START_WORK_LAST_PLACE_MONTH',
		payload: {
			...startWorkLastPlaceMonth,
			value,
			isValid,
		},
	});
};

export const setStartWorkLastPlaceYear = (
	dispatch: any,
	startWorkLastPlaceYear: any,
	value: string,
	isValid: boolean | string
) => {
	dispatch({
		type: 'UPDATE_START_WORK_LAST_PLACE_YEAR',
		payload: {
			...startWorkLastPlaceYear,
			value,
			isValid,
		},
	});
};

// Step3
export const setOrganization = (
	dispatch: any,
	organization: any,
	value: string,
	isValid: boolean | string,
	isDadata: boolean
) => {
	dispatch({
		type: 'UPDATE_ORGANIZATION',
		payload: {
			...organization,
			value,
			isValid,
			isDadata,
		},
	});
};

export const setWorkPhone = (
	dispatch: any,
	workPhone: any,
	value: string,
	isValid: boolean | string
) => {
	dispatch({
		type: 'UPDATE_WORK_PHONE',
		payload: {
			...workPhone,
			value,
			isValid,
		},
	});
};

export const setPositionWork = (
	dispatch: any,
	positionWork: any,
	value: string,
	isValid: boolean | string
) => {
	dispatch({
		type: 'UPDATE_POSITION_WORK',
		payload: {
			...positionWork,
			value,
			isValid,
		},
	});
};

export const setTotalWorkExperience = (
	dispatch: any,
	totalWorkExperience: any,
	value: string,
	isValid: boolean | string
) => {
	dispatch({
		type: 'UPDATE_TOTAL_WORK_EXPERIENCE',
		payload: {
			...totalWorkExperience,
			value,
			isValid,
		},
	});
};

export const setFamilyStatus = (
	dispatch: any,
	familyStatus: any,
	value: string,
	isValid: boolean | string
) => {
	dispatch({
		type: 'UPDATE_FAMILY_STATUS',
		payload: {
			...familyStatus,
			value,
			isValid,
		},
	});
};

export const setAmountChildren = (
	dispatch: any,
	amountСhildren: any,
	value: string,
	isValid: boolean | string
) => {
	dispatch({
		type: 'UPDATE_AMOUNT_CHILDREN',
		payload: {
			...amountСhildren,
			value,
			isValid,
		},
	});
};

export const setLoansPerMonth = (
	dispatch: any,
	loansPerMonth: any,
	value: string,
	isValid: boolean | string
) => {
	dispatch({
		type: 'UPDATE_LOANS_PER_MONTH',
		payload: {
			...loansPerMonth,
			value,
			isValid,
		},
	});
};

export const setPlaceResidence = (
	dispatch: any,
	placeResidence: any,
	value: string,
	isValid: boolean | string,
	isDadata: boolean
) => {
	dispatch({
		type: 'UPDATE_PLACE_RESIDENCE',
		payload: {
			...placeResidence,
			value,
			isValid,
			isDadata,
		},
	});
};

// Step4
export const setPlaceOfBirth = (
	dispatch: any,
	placeOfBirth: any,
	value: string,
	isValid: boolean | string,
	isDadata: boolean
) => {
	dispatch({
		type: 'UPDATE_PLACE_OF_BIRTH',
		payload: {
			...placeOfBirth,
			value,
			isValid,
			isDadata,
		},
	});
};

export const setPassportNumberSeries = (
	dispatch: any,
	passportNumberSeries: any,
	value: string,
	isValid: boolean | string
) => {
	dispatch({
		type: 'UPDATE_PASSPORT_NUMBER_SERIES',
		payload: {
			...passportNumberSeries,
			value,
			isValid,
		},
	});
};

export const setUnitСode = (
	dispatch: any,
	unitСode: any,
	value: string,
	isValid: boolean | string
) => {
	dispatch({
		type: 'UPDATE_UNIT_СODE',
		payload: {
			...unitСode,
			value,
			isValid,
		},
	});
};

export const setIssuedBy = (
	dispatch: any,
	issuedBy: any,
	value: string,
	isValid: boolean | string
) => {
	dispatch({
		type: 'UPDATE_ISSUED_BY',
		payload: {
			...issuedBy,
			value,
			isValid,
		},
	});
};

export const setDateOfIssue = (
	dispatch: any,
	dateOfIssue: any,
	value: string,
	isValid: boolean | string
) => {
	dispatch({
		type: 'UPDATE_DATE_OF_ISSUE',
		payload: {
			...dateOfIssue,
			value,
			isValid,
		},
	});
};

export const setFullStep = (dispatch: any, payload: any) => {
	dispatch({
		type: 'SET_STEP',
		payload,
	});
};
