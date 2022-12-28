import { FC } from 'react';

import './style.css';

import { inputTypes } from './types';

const Input: FC<inputTypes> = ({
	inputRef,
	title,
	placeholder,
	value,
	setValue,
	removeFocus,
	onPressKeyArrow = (e: any) => e.key === 'Enter' && e.target.blur(),
	isValid,
}) => {
	return (
		<div
			className={`input ${
				isValid ? (isValid === true ? 'is-valid-ok' : 'is-valid-error') : ''
			}`}
		>
			<div className="input__info row jc-sb">
				<div className="input__title">{title}</div>
				<div className="input__error">
					{typeof isValid === 'string' ? isValid : ''}
				</div>
			</div>
			<div className="input__input">
				<input
					ref={inputRef}
					type="text"
					placeholder={placeholder}
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onBlur={(e) => removeFocus(e.target.value)}
					onKeyDown={(e) => onPressKeyArrow(e)}
				/>
			</div>
		</div>
	);
};

export default Input;
