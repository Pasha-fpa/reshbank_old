import { FC } from 'react';

import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './style.css';

import { rangeDeepTypes } from './types';

const RangeDeep: FC<rangeDeepTypes> = ({
	title,
	min,
	max,
	step,
	value,
	setValue,
	unit = '',
}) => {
	return (
		<div className="range-deep">
			<div className="range-deep__info row">
				<div className="range-deep__title">{title}</div>
				<div className="range-deep__value">{`${value.toLocaleString()} ${unit}`}</div>
			</div>
			<div className="range-deep__block">
				<Slider
					className="range-slider"
					min={min}
					max={max}
					step={step}
					value={value}
					onChange={(e: any) => {
						return setValue(typeof e === 'number' ? [e] : e);
					}}
				/>
			</div>
		</div>
	);
};

export default RangeDeep;
