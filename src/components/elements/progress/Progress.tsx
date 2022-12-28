import { FC, useEffect, useMemo, useContext } from 'react';

import { FormQuestContext } from './../../../reducer/reducer';

import useCalcProgress from './../../../services/CalcProgress';

import './style.css';

import { progressTypes } from './types';

const Progress: FC<progressTypes> = ({
	totalPoints,
	currentPoints,
	nextPoints,
}) => {
	const { getCurrentProgress, getNextProgress } = useCalcProgress(
		50,
		90,
		totalPoints
	);

	const currentPercentage = useMemo(
		() => getCurrentProgress(currentPoints),
		[currentPoints]
	);

	const nextPercentage = useMemo(
		() => getNextProgress(nextPoints),
		[nextPoints]
	);

	return (
		<div className="form-progress">
			<h4 className="form-progress__title">Вероятность одобрения</h4>
			<div className="form-progress__value">{currentPercentage} %</div>
			<div className="form-progress__line form-progress-line">
				<span
					className="form-progress-line__current"
					style={{
						width: `${currentPercentage}%`,
					}}
				/>
				<span
					className="form-progress-line__next"
					style={{
						width: `${currentPercentage + nextPercentage}%`,
					}}
				/>
			</div>
		</div>
	);
};

export default Progress;
