const useCalcPay = (sum: number, years: number) => {
	const rate = 7;
	const amount = sum || 0;
	const months = years * 12 || 1;

	const m_rate = rate / 100 / 12;
	const monthly_rate =
		(m_rate * Math.pow(1 + m_rate, months)) /
		(Math.pow(1 + m_rate, months) - 1);
	const monthly = Math.round(amount * monthly_rate);
	const fullSum = monthly * months;
	const overdraft = fullSum - amount;

	const getFullPay = () => {
		return [monthly, overdraft, fullSum];
	};

	const getMonthlyPay = () => {
		return monthly;
	};

	return {
		getFullPay,
		getMonthlyPay,
	};
};

export default useCalcPay;
