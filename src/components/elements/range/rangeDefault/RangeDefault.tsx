import { FC } from 'react';

import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './style.css';

import { rangeDefaultTypes } from './types';

const RangeDefault: FC<rangeDefaultTypes> = ({
	min,
	max,
	step,
	value,
	setValue,
}) => {
	return (
		<div className="range-default">
			<div className="range-default__block row jc-sb">
				<div className="range-default__value">{`${value.toLocaleString()}`}</div>
				<div className="range-default__unit">₽</div>
				<div className="range-default__slider">
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
			<div className="range-default__info row jc-sb">
				<div className="range-default__min">от {min.toLocaleString()}</div>
				<div className="range-default__max">до {max.toLocaleString()}</div>
			</div>
		</div>
	);
};

export default RangeDefault;
