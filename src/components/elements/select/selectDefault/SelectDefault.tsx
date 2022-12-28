import { FC } from 'react';

import Select from 'react-select';

import './style.css';

import { selectDefaultTypes } from './types';

const options = [
	{ value: '1', label: '1 год' },
	{ value: '2', label: '2 года' },
	{ value: '3', label: '3 года' },
	{ value: '4', label: '4 года' },
	{ value: '5', label: '5 лет' },
	{ value: '6', label: '6 лет' },
	{ value: '7', label: '7 лет' },
];

const SelectDefault: FC<selectDefaultTypes> = ({ years, setYears }) => {
	return (
		<div className="select-default">
			<Select
				defaultValue={options[0]}
				options={options}
				menuPlacement="bottom"
				menuPosition="absolute"
				className="select-default-item"
				classNamePrefix="select-default-item"
				onChange={(value) => setYears(value?.value ? +value.value : 1)}
			/>
			<div className="select-default__text">
				Срок кредита (от 1 года до 7 лет)
			</div>
		</div>
	);
};

export default SelectDefault;
