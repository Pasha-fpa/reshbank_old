import { createContext } from 'react';

import {
	formQuestStoreTypes,
	formQuestActionTypes,
	formQuestContextTypes,
} from '@/types/types';

export const FormQuestContext = createContext({} as formQuestContextTypes);

export const formQuestReducer = (
	state: formQuestStoreTypes,
	action: formQuestActionTypes
) => {
	switch (action.type) {
		case 'UPDATE_CHECKBOX_1':
			return {
				...state,
				checkbox1: action.payload,
			};
		case 'UPDATE_CHECKBOX_2':
			return {
				...state,
				checkbox2: action.payload,
			};

		case 'UPDATE_FIO':
			return {
				...state,
				fio: action.payload,
			};
		case 'UPDATE_SUM':
			return {
				...state,
				sum: action.payload,
			};
		case 'UPDATE_DATE_BIRTH':
			return {
				...state,
				dateBirth: action.payload,
			};
		case 'UPDATE_PHONE':
			return {
				...state,
				phone: action.payload,
			};
		case 'UPDATE_EMAIL':
			return {
				...state,
				email: action.payload,
			};
		case 'UPDATE_CITY':
			return {
				...state,
				city: action.payload,
			};

		// Step 2
		case 'UPDATE_INCOME':
			return {
				...state,
				income: action.payload,
			};
		case 'UPDATE_EMPLOYMENT':
			return {
				...state,
				employment: action.payload,
			};
		case 'UPDATE_METHOD_CONFIRMING_INCOME':
			return {
				...state,
				methodConfirmingIncome: action.payload,
			};
		case 'UPDATE_CREDIT_HISTORY':
			return {
				...state,
				creditHistory: action.payload,
			};
		case 'UPDATE_EDUCATION':
			return {
				...state,
				education: action.payload,
			};
		case 'UPDATE_OWN':
			return {
				...state,
				own: action.payload,
			};
		case 'UPDATE_START_WORK_LAST_PLACE_MONTH':
			return {
				...state,
				startWorkLastPlaceMonth: action.payload,
			};
		case 'UPDATE_START_WORK_LAST_PLACE_YEAR':
			return {
				...state,
				startWorkLastPlaceYear: action.payload,
			};

		// Step 3
		case 'UPDATE_ORGANIZATION':
			return {
				...state,
				organization: action.payload,
			};
		case 'UPDATE_WORK_PHONE':
			return {
				...state,
				workPhone: action.payload,
			};
		case 'UPDATE_POSITION_WORK':
			return {
				...state,
				positionWork: action.payload,
			};
		case 'UPDATE_TOTAL_WORK_EXPERIENCE':
			return {
				...state,
				totalWorkExperience: action.payload,
			};
		case 'UPDATE_FAMILY_STATUS':
			return {
				...state,
				familyStatus: action.payload,
			};
		case 'UPDATE_AMOUNT_CHILDREN':
			return {
				...state,
				amountChildren: action.payload,
			};
		case 'UPDATE_LOANS_PER_MONTH':
			return {
				...state,
				loansPerMonth: action.payload,
			};
		case 'UPDATE_PLACE_RESIDENCE':
			return {
				...state,
				placeResidence: action.payload,
			};

		// Step 4
		case 'UPDATE_PLACE_OF_BIRTH':
			return {
				...state,
				placeOfBirth: action.payload,
			};
		case 'UPDATE_PASSPORT_NUMBER_SERIES':
			return {
				...state,
				passportNumberSeries: action.payload,
			};
		case 'UPDATE_UNIT_СODE':
			return {
				...state,
				unitСode: action.payload,
			};
		case 'UPDATE_ISSUED_BY':
			return {
				...state,
				issuedBy: action.payload,
			};
		case 'UPDATE_DATE_OF_ISSUE':
			return {
				...state,
				dateOfIssue: action.payload,
			};

		case 'SET_STEP':
			return {
				...state,
				...action.payload,
			};

		default:
			return state;
	}
};
