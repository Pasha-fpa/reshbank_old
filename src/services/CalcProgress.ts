const useCalcProgress = (start: number, max: number, all: number) => {
	const remaining = max - start;

	const getCurrentProgress = (current: number) => {
		return Math.round(start + remaining * (current / all));
	};

	const getNextProgress = (next: number) => {
		return Math.round(remaining * (next / all));
	};

	return {
		getCurrentProgress,
		getNextProgress,
	};
};

export default useCalcProgress;
