import { FC } from 'react';

import './style.css';

import { inputHintTypes } from './types';

const InputHint: FC<inputHintTypes> = ({
	hintActive,
	hintList,
	setValue,
	hintItem,
}) => {
	const onSetItem = (e: any, value: string) => {
		e.preventDefault();
		setValue(value, true);
	};

	return (
		<ul className={`hint-list ${hintActive ? '' : 'disable'}`}>
			{hintList.map((item, i) => (
				<li
					key={item}
					className={`hint-list__item ${hintItem === i ? 'active' : ''}`}
					onMouseDown={(e) => {
						e.preventDefault();
						onSetItem(e, item);
						return false;
					}}
				>
					{item}
				</li>
			))}
		</ul>
	);
};

export default InputHint;
