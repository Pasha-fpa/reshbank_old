import { Dispatch, SetStateAction } from 'react';

export interface tabsNavTypes {
	tab: number;
	setTab: Dispatch<SetStateAction<number>>;
}
