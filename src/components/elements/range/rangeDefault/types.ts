import { Dispatch, SetStateAction } from 'react';

export interface rangeDefaultTypes {
	min: number;
	max: number;
	step: number;
	value: number | number[] | any;
	setValue: Dispatch<SetStateAction<number[] | number | any>>;
}
