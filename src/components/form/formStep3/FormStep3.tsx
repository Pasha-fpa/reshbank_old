import { FC, useContext, useRef } from 'react';

import { FormQuestContext } from './../../../reducer/reducer';
import {
	setWorkPhone,
	setPositionWork,
	setTotalWorkExperience,
	setFamilyStatus,
	setAmountChildren,
	setLoansPerMonth,
	setFullStep,
} from './../../../actions/formQuest';

import { step3Fields } from './../../../store/formQuestInitStore';

import useStep1 from './../../../services/formQuestServise/Step1Servise';
import useStep3 from './../../../services/formQuestServise/Step3Servise';

import Input from './../../elements/input/Input';
import SelectForm from './../../elements/select/selectForm/SelectForm';
import FieldPlaceResidence from './../../elements/field/FieldPlaceResidence';

import ButtonForm from './../../elements/button/buttonForm/ButtonForm';
import FieldOrganization from './../../elements/field/FieldOrganization';

import { formStepTypes } from './../types';

const optionsPositionWork = [
	{ value: 'none', label: '-', isDisabled: true },
	{ value: '102', label: 'Генеральный директор' },
	{ value: '104', label: 'Руководитель' },
	{ value: '106', label: 'Специалист' },
	{ value: '108', label: 'Обсл. персонал' },
	{ value: '110', label: 'Рабочий' },
];

const optionsTotalWorkExperience = [
	{ value: 'none', label: '-', isDisabled: true },
	{ value: '112', label: 'Менее 6 месяцев' },
	{ value: '114', label: 'От 6 месяцев до 1 года' },
	{ value: '116', label: 'От 1 года до 3 лет' },
	{ value: '118', label: 'От 3 до 5 лет' },
	{ value: '120', label: 'От 5 до 10 лет' },
	{ value: '122', label: 'Более 10 лет' },
];

const optionsFamilyStatus = [
	{ value: 'none', label: '-', isDisabled: true },
	{ value: '124', label: 'Женат/Замужем' },
	{ value: '126', label: 'Холост/не замужем' },
	{ value: '128', label: 'Разведен/разведена' },
	{ value: '130', label: 'Вдова/вдовец' },
	{ value: '132', label: 'Гражданский брак' },
];

const FormStep3: FC<formStepTypes> = ({ setStep, setBack }) => {
	const { state, dispatch } = useContext(FormQuestContext);
	const {
		workPhone,
		positionWork,
		totalWorkExperience,
		familyStatus,
		amountChildren,
		loansPerMonth,
	} = state;

	const { maskPhone, validationPhone } = useStep1();
	const { maskNum, validationNum } = useStep3();

	const onSetWorkPhone = (value: string) => {
		setWorkPhone(dispatch, workPhone, maskPhone(value), false);
	};
	const onRemoveFocusWorkPhone = (value: string) => {
		const isValid = validationPhone(workPhone.errorMessages, value);
		setWorkPhone(dispatch, workPhone, maskPhone(value), isValid);
	};

	const onSetAmountChildren = (value: string) => {
		setAmountChildren(dispatch, amountChildren, maskNum(value), false);
	};
	const onRemoveFocusAmountChildren = (value: string) => {
		const isValid = validationNum(amountChildren.errorMessages, value);
		setAmountChildren(dispatch, amountChildren, maskNum(value), isValid);
	};

	const onSetLoansPerMonth = (value: string) => {
		setLoansPerMonth(dispatch, loansPerMonth, maskNum(value), false);
	};
	const onRemoveFocusLoansPerMonth = (value: string) => {
		const isValid = validationNum(loansPerMonth.errorMessages, value);
		setLoansPerMonth(dispatch, loansPerMonth, maskNum(value), isValid);
	};

	const onSetPositionWork = (value: string) => {
		if (value === 'true') return;
		if (value === 'false') value = positionWork.value;
		const isValid = value !== 'none' || positionWork.errorMessages.choice;
		setPositionWork(dispatch, positionWork, value, isValid);
		if (isValid === true) ref2.current.focus();
	};

	const onSetTotalWorkExperience = (value: string) => {
		if (value === 'true') return;
		if (value === 'false') value = totalWorkExperience.value;
		const isValid =
			value !== 'none' || totalWorkExperience.errorMessages.choice;
		setTotalWorkExperience(dispatch, totalWorkExperience, value, isValid);
		if (isValid === true) ref3.current.focus();
	};

	const onSetFamilyStatus = (value: string) => {
		if (value === 'true') return;
		if (value === 'false') value = familyStatus.value;
		const isValid = value !== 'none' || familyStatus.errorMessages.choice;
		setFamilyStatus(dispatch, familyStatus, value, isValid);
	};

	const onBackStep = () => {
		setBack(2);
		// setFullStep(dispatch, step3Fields);
	};

	const ref1 = useRef<any>(null);
	const ref2 = useRef<any>(null);
	const ref3 = useRef<any>(null);

	return (
		<div className="form-step-3 form-step">
			<FieldOrganization />
			<Input
				title="Рабочий телефон"
				placeholder="+7 (___) ___-__-__"
				value={workPhone.value}
				setValue={onSetWorkPhone}
				removeFocus={onRemoveFocusWorkPhone}
				isValid={workPhone.isValid}
			/>
			<SelectForm
				selectRef={ref1}
				title="Должность"
				options={optionsPositionWork}
				defaultOptions={positionWork.value}
				isValid={positionWork.isValid}
				setValue={onSetPositionWork}
			/>
			<SelectForm
				selectRef={ref2}
				title="Общий трудовой стаж"
				options={optionsTotalWorkExperience}
				defaultOptions={totalWorkExperience.value}
				isValid={totalWorkExperience.isValid}
				setValue={onSetTotalWorkExperience}
			/>
			<SelectForm
				selectRef={ref3}
				title="Семейное положение"
				options={optionsFamilyStatus}
				defaultOptions={familyStatus.value}
				isValid={familyStatus.isValid}
				setValue={onSetFamilyStatus}
			/>
			<Input
				title="Количество детей"
				placeholder="0"
				value={amountChildren.value}
				setValue={onSetAmountChildren}
				removeFocus={onRemoveFocusAmountChildren}
				isValid={amountChildren.isValid}
			/>
			<Input
				title="Траты по кредитам в месяц"
				placeholder="8 294"
				value={loansPerMonth.value}
				setValue={onSetLoansPerMonth}
				removeFocus={onRemoveFocusLoansPerMonth}
				isValid={loansPerMonth.isValid}
			/>
			<FieldPlaceResidence />
			<div className="form-step__btns row">
				<div className="form-step-back" onClick={onBackStep}>
					Назад
				</div>
				<ButtonForm text="Далее" setFunction={setStep} />
			</div>
		</div>
	);
};

export default FormStep3;
