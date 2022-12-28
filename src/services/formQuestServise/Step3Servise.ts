interface defaultObjectTypes {
	[name: string]: string;
}

const useStep3 = () => {
	const validationOrganisation = (
		errorMessages: defaultObjectTypes,
		value: string,
		isDadata: boolean
	) => {
		if (!value) return errorMessages.default;
		if (!isDadata) return errorMessages.choice;
		return true;
	};

	const maskNum = (value: string) => {
		value = value.replace(/\D/g, '');
		return value !== '' ? (+value).toLocaleString() : value;
	};
	const validationNum = (errorMessages: defaultObjectTypes, value: string) => {
		value = value.replace(/\D/g, '');
		if (value === '') return errorMessages.default;
		return true;
	};

	const maskPlaceResidence = (value: string) => {
		return value;
	};
	const validationPlaceResidence = (
		errorMessages: defaultObjectTypes,
		value: any,
		isDadata: boolean
	) => {
		if (value.value === '') return errorMessages.default;
		if (!isDadata) return errorMessages.choice;
		if (!value.city) return errorMessages.city;
		if (!value.street) return errorMessages.street;
		if (!value.house) return errorMessages.house;
		return true;
	};

	return {
		validationOrganisation,
		maskNum,
		validationNum,
		maskPlaceResidence,
		validationPlaceResidence,
	};
};

export default useStep3;
