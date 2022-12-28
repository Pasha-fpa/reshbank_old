const useSend = () => {
	const _baseUrl = 'https://bx.reshbank.online/api/';

	const send = async (url: string, data: any, method = 'POST') => {
		return fetch(_baseUrl + url, {
			method,
			headers: { Accept: 'application/json' },
			body: data,
		})
			.then((res) => res.json())
			.catch((err) => {
				console.log('error-send: ', err);
			});
	};

	const postEncrypt = async (data: any) => {
		const res = await send('get.deal.encrypt', data);
		return res;
	};

	const createDeal = async (data: any) => {
		return await send('add.deal', data);
	};

	const updateDeal = async (data: any) => {
		return await send('update.deal', data);
	};

	const finishDeal = async (data: any) => {
		return await send('finish', data);
	};

	return { createDeal, updateDeal, postEncrypt, finishDeal };
};

export default useSend;
