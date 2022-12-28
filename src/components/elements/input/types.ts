import { Dispatch, SetStateAction } from 'react';

export interface inputTypes {
	inputRef?: any;
	title: string;
	placeholder: string;
	value: string;
	setValue: (value: string) => void;
	removeFocus: (value: string) => void;
	onPressKeyArrow?: any;
	isValid: boolean | string;
}
