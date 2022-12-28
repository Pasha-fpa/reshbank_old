import { FC } from 'react';

import './style.css';

import { counterTypes } from './types';

const CounterItem: FC<counterTypes> = ({
	value,
	date,
	text,
	unit = '',
	percent = 0,
}) => {
	return (
		<div className="counter row">
			<div className="counter__text">
				{text}
				<br />
				{date}
			</div>
			<div className="counter__value">
				{`${Math.round(value * percent)}${unit}`}
			</div>
		</div>
	);
};

export default CounterItem;
