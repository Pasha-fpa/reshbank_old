import { Dispatch, SetStateAction } from 'react';

export interface rangeDeepTypes {
	title: string;
	min: number;
	max: number;
	step: number;
	value: number | number[] | any;
	setValue: Dispatch<SetStateAction<number[] | number | any>>;
	unit?: string;
}
