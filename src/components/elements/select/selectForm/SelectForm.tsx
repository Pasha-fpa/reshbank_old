import { FC, useState, useRef } from 'react';

import Select from 'react-select';

import './style.css';

import { SelectFormTypes } from './types';

const SelectForm: FC<SelectFormTypes> = ({
	selectRef,
	title,
	commonErrorText,
	isValid,
	options,
	defaultOptions,
	setValue,
	type,
}) => {
	// const ref = useRef<any>(null);
	const isSetValue = useRef('false');
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const onOpenMenu = () => {
		selectRef.current.focus();
		setMenuIsOpen(true);
	};

	const onInputChange = (options: any, { action }: any) => {
		if (action === 'set-value') {
			isSetValue.current = 'true';
			setValue(selectRef.current.state.focusedOption.value);
		}
		if (action === 'menu-close') {
			setValue(isSetValue.current);
			setMenuIsOpen(false);
			selectRef.current.blur();
		}
	};

	const renderErrorMessage = () => {
		if (typeof commonErrorText === 'string') return commonErrorText;
		if (typeof isValid === 'string') return isValid;
		return null;
	};

	const errorMessage = renderErrorMessage();

	const renderDefaultValue = (options: any[]) => {
		if (defaultOptions === 'none') return options[0];

		const newDefaultValue = options.find(
			({ value }: any) => value === defaultOptions
		);
		if (newDefaultValue) return newDefaultValue;
	};

	const defaultValue = renderDefaultValue(options);

	return (
		<div
			className={`select-form ${
				isValid ? (isValid === true ? 'is-valid-ok' : 'is-valid-error') : ''
			} ${type === 'small' ? type : ''}`}
		>
			<div className="input__info row jc-sb">
				<div className={`input__title ${menuIsOpen ? 'active' : ''}`}>
					{title}
				</div>
				<div className="input__error">{errorMessage}</div>
			</div>
			<Select
				ref={selectRef}
				menuPlacement="bottom"
				menuPosition="absolute"
				className="select-form-item"
				classNamePrefix="select-form-item"
				isSearchable={false}
				options={options}
				defaultValue={defaultValue}
				onInputChange={onInputChange}
				onChange={(value) => setValue(value.value)}
				menuIsOpen={menuIsOpen}
				onFocus={onOpenMenu}
			/>
		</div>
	);
};

export default SelectForm;
