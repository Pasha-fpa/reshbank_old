import { Dispatch } from 'react';

export interface formQuestErrorMessagesTypes {
	[name: string]: string;
}

export interface formQuestFieldTypes {
	value: string;
	isValid: boolean | string;
	errorMessages: formQuestErrorMessagesTypes;
	isDadata?: boolean | any;
	points: number;
	[name: string]: any;
}

export interface formQuestStoreTypes {
	[name: string]: formQuestFieldTypes;
}

export interface formQuestActionTypes {
	type: string;
	payload: formQuestFieldTypes;
}

export interface formQuestContextTypes {
	state: formQuestStoreTypes;
	dispatch: Dispatch<formQuestActionTypes>;
}
