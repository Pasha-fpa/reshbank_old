const useDadata = () => {
	const _url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/';
	const _token = 'f7cd59d270fa2905f74cf38f74981c3abbe346c8';

	const send = async (urlParams: string, query: string) => {
		const options = {
			method: 'POST',
			mode: 'cors' as RequestMode,
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: 'Token ' + _token,
			},
			body: JSON.stringify({ query, count: 10 }),
		};

		return fetch(`${_url}${urlParams}`, options)
			.then((response) => response.text())
			.then((result) => JSON.parse(result))
			.catch((error) => error);
	};

	const sendInn = (urlParams: string, query: string) => {
		const options = {
			method: 'POST',
			mode: 'cors' as RequestMode,
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: 'Token ' + _token,
			},
			body: JSON.stringify({ query }),
		};

		return fetch(
			`https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/${urlParams}`,
			options
		)
			.then((response) => response.text())
			.then((result) => JSON.parse(result))
			.catch((error) => error);
	};

	const getFio = async (query: string) => {
		const res = await send('fio', query);

		if (res.suggestions.length > 5) res.suggestions.length = 5;

		return [
			...res.suggestions.map(
				({ data }: any) =>
					`${data?.surname || ''} ${data?.name || ''} ${data?.patronymic || ''}`
			),
		];
	};

	const getEmail = async (query: string) => {
		const res = await send('email', query);

		if (res.suggestions.length > 5) res.suggestions.length = 5;

		return [...res.suggestions.map((item: any) => item?.value)];
	};

	const getCity = async (query: string) => {
		const res = await send('address', query);

		if (res.suggestions.length > 5) res.suggestions.length = 5;

		const result: string[] = [
			...res.suggestions
				.filter(({ data }: any) => data?.city)
				.map(({ data }: any) => data?.city),
		];

		return [...new Set(result)];
	};

	const getAddress = async (query: string) => {
		const res = await send('address', query);

		const result: string[] = [
			...res.suggestions.map(({ value, data }: any) => {
				return {
					value,
					city: data?.city || data?.settlement ? true : false,
					street: data?.street || data?.settlement ? true : false,
					house: data.house ? true : false,
				};
			}),
		];

		return [...result];
	};

	const getOrganization = async (query: string) => {
		const res = await send('party', query);

		const result: any[] = [
			...res.suggestions.map(({ value, data }: any) => ({
				value,
				hid: data?.hid,
			})),
		];

		const resArr: any[] = [];
		result.filter(function (item) {
			const i = resArr.findIndex((x) => x.value == item.value);
			if (i <= -1) resArr.push(item);
			return null;
		});

		return [...resArr];
		// return [];
	};

	const getOrganizationPhone = async (query: string) => {
		const res = await sendInn('party', query);
		return res.suggestions[0]?.data?.phones[0]?.value;
	};

	const getPlaceOfBirth = async (query: string) => {
		const res = await send('address', query);

		const result: string[] = [
			...res.suggestions
				.filter(({ data }: any) => data?.city || data.settlement)
				.map(({ data }: any) => data?.city || data.settlement),
		];

		return [...new Set(result)];
	};

	const getUnitCode = async (query: string) => {
		const res = await send('fms_unit', query);

		const result: string[] = [
			...res.suggestions
				.filter(({ data }: any) => data?.code && data.name)
				.map(({ data }: any) => `${data.code} - ${data.name}`),
		];

		return [...new Set(result)];
	};

	return {
		getFio,
		getEmail,
		getCity,
		getAddress,
		getOrganization,
		getOrganizationPhone,
		getPlaceOfBirth,
		getUnitCode,
	};
};

export default useDadata;
