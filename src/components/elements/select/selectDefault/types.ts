import { Dispatch, SetStateAction } from 'react';

export interface selectDefaultTypes {
	years: number;
	setYears: Dispatch<SetStateAction<number>>;
}
