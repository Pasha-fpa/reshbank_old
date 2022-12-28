import { FC, useContext, useRef } from 'react';

import { FormQuestContext } from './../../../reducer/reducer';
import {
	setIncome,
	setEmployment,
	setMethodConfirmingIncome,
	setCreditHistory,
	setEducation,
	setOwn,
	setStartWorkLastPlaceMonth,
	setStartWorkLastPlaceYear,
	setFullStep,
} from './../../../actions/formQuest';

import { step2Fields } from './../../../store/formQuestInitStore';

import SelectForm from './../../elements/select/selectForm/SelectForm';
import ButtonForm from './../../elements/button/buttonForm/ButtonForm';

import { formStepTypes } from './../types';

const optionsIncome = [
	{ value: 'none', label: '-', isDisabled: true },
	{ value: '10000', label: 'До 10 000 руб' },
	{ value: '20000', label: 'От 10 000 до 20 000 руб' },
	{ value: '30000', label: 'От 20 000 до 30 000 руб' },
	{ value: '50000', label: 'От 30 000 до 50 000 руб' },
	{ value: '100000', label: 'От 50 000 до 100 000 руб' },
	{ value: '100001', label: 'Свыше 100 000 руб' },
];

const optionsEmployment = [
	{ value: 'none', label: '-', isDisabled: true },
	{ value: '52', label: 'Постоянная работа по ТК' },
	{ value: '54', label: 'По трудовому договору' },
	{ value: '56', label: 'Учредитель/участник ООО' },
	{ value: '58', label: 'Индивидуальный предприниматель' },
	{ value: '60', label: 'Трудоустроен неофициально' },
	{ value: '62', label: 'Учусь' },
	{ value: '64', label: 'Пенсионер' },
];

const optionsMethodConfirmingIncome = [
	{ value: 'none', label: '-', isDisabled: true },
	{ value: '66', label: 'Справка 2-НДФЛ' },
	{ value: '68', label: 'Справка по форме банка' },
	{ value: '70', label: 'В устной форме по телефону' },
	{ value: '72', label: 'Налоговая декларация' },
	{ value: '74', label: 'Без подтверждения' },
];

const optionsCreditHistory = [
	{ value: 'none', label: '-', isDisabled: true },
	{ value: '76', label: 'Текущих просрочек нет' },
	{ value: '78', label: 'Есть текущая просрочка' },
];

const optionsEducation = [
	{ value: 'none', label: '-', isDisabled: true },
	{ value: '80', label: 'Среднее' },
	{ value: '82', label: 'Среднее специальное' },
	{ value: '84', label: 'Неполное высшее' },
	{ value: '86', label: 'Высшее' },
	{ value: '88', label: 'Ученая степень' },
];

const optionsOwn = [
	{ value: 'none', label: '-', isDisabled: true },
	{ value: '98', label: 'Нет' },
	{ value: '90', label: 'Квартира' },
	{ value: '92', label: 'Дом' },
	{ value: '96', label: 'Автомобиль отечественный' },
	{ value: '94', label: 'Автомобиль иностранный' },
	{ value: '100', label: 'Недвижимость и авто' },
];

const optionsStartWorkLastPlaceMonth = [
	{ value: 'none', label: 'Месяц', isDisabled: true },
	{ value: '1', label: 'Январь' },
	{ value: '2', label: 'Февраль' },
	{ value: '3', label: 'Март' },
	{ value: '4', label: 'Апрель' },
	{ value: '5', label: 'Май' },
	{ value: '6', label: 'Июнь' },
	{ value: '7', label: 'Июль' },
	{ value: '8', label: 'Август' },
	{ value: '9', label: 'Сентябрь' },
	{ value: '10', label: 'Октябрь' },
	{ value: '11', label: 'Ноябрь' },
	{ value: '12', label: 'Декабрь' },
];

const optionsStartWorkLastPlaceYear = [
	{ value: 'none', label: 'Год', isDisabled: true },
	{ value: '2022', label: '2022' },
	{ value: '2021', label: '2021' },
	{ value: '2020', label: '2020' },
	{ value: '2019', label: '2019' },
	{ value: '2018', label: '2018' },
	{ value: '2017', label: '2017' },
	{ value: '2016', label: '2016' },
	{ value: '2015', label: '2015' },
	{ value: '2014', label: '2014' },
	{ value: '2013', label: '2013' },
	{ value: '2012', label: '2012' },
	{ value: '2011', label: '2011' },
	{ value: '2010', label: '2010' },
	{ value: '2009', label: '2009' },
	{ value: '2008', label: '2008' },
	{ value: '2007', label: '2007' },
	{ value: '2006', label: '2006' },
	{ value: '2005', label: '2005' },
	{ value: '2004', label: '2004' },
	{ value: '2003', label: '2003' },
	{ value: '2002', label: '2002' },
	{ value: '2001', label: '2001' },
	{ value: '2000', label: '2000' },
];

const FormStep2: FC<formStepTypes> = ({ setStep, setBack }) => {
	const { state, dispatch } = useContext(FormQuestContext);
	const {
		income,
		employment,
		methodConfirmingIncome,
		creditHistory,
		education,
		own,
		startWorkLastPlaceMonth,
		startWorkLastPlaceYear,
	} = state;

	const onSetIncome = (value: string) => {
		if (value === 'true') return;
		if (value === 'false') value = income.value;
		const isValid = value !== 'none' || income.errorMessages.choice;
		setIncome(dispatch, income, value, isValid);
		if (isValid === true) ref2.current.focus();
	};

	const onSetEmployment = (value: string) => {
		if (value === 'true') return;
		if (value === 'false') value = employment.value;
		const isValid = value !== 'none' || employment.errorMessages.choice;
		setEmployment(dispatch, employment, value, isValid);
		if (isValid === true) ref3.current.focus();
	};

	const onSetMethodConfirmingIncome = (value: string) => {
		if (value === 'true') return;
		if (value === 'false') value = methodConfirmingIncome.value;
		const isValid =
			value !== 'none' || methodConfirmingIncome.errorMessages.choice;
		setMethodConfirmingIncome(dispatch, methodConfirmingIncome, value, isValid);
		if (isValid === true) ref4.current.focus();
	};

	const onSetCreditHistory = (value: string) => {
		if (value === 'true') return;
		if (value === 'false') value = creditHistory.value;
		const isValid = value !== 'none' || creditHistory.errorMessages.choice;
		setCreditHistory(dispatch, creditHistory, value, isValid);
		if (isValid === true) ref5.current.focus();
	};

	const onSetEducation = (value: string) => {
		if (value === 'true') return;
		if (value === 'false') value = education.value;
		const isValid = value !== 'none' || education.errorMessages.choice;
		setEducation(dispatch, education, value, isValid);
		if (isValid === true) ref6.current.focus();
	};

	const onSetOwn = (value: string) => {
		if (value === 'true') return;
		if (value === 'false') value = own.value;
		const isValid = value !== 'none' || own.errorMessages.choice;
		setOwn(dispatch, own, value, isValid);
		if (isValid === true) ref7.current.focus();
	};

	const onSetStartWorkLastPlaceMonth = (value: string) => {
		if (value === 'true') return;
		if (value === 'false') value = startWorkLastPlaceMonth.value;
		const isValid =
			value !== 'none' || startWorkLastPlaceMonth.errorMessages.choice;
		setStartWorkLastPlaceMonth(
			dispatch,
			startWorkLastPlaceMonth,
			value,
			isValid
		);
		if (isValid === true) ref8.current.focus();
	};

	const onSetStartWorkLastPlaceYear = (value: string) => {
		if (value === 'true') return;
		if (value === 'false') value = startWorkLastPlaceYear.value;
		const isValid =
			value !== 'none' || startWorkLastPlaceYear.errorMessages.choice;
		setStartWorkLastPlaceYear(dispatch, startWorkLastPlaceYear, value, isValid);
	};

	const renderCommonErrorText = () => {
		if (typeof startWorkLastPlaceMonth.isValid === 'string')
			return startWorkLastPlaceMonth.isValid;
		if (typeof startWorkLastPlaceYear.isValid === 'string')
			return startWorkLastPlaceYear.isValid;
		return undefined;
	};

	const commonErrorText = renderCommonErrorText();

	const onBackStep = () => {
		setBack(1);
		// setFullStep(dispatch, { ...step2Fields });
	};

	const ref1 = useRef<any>(null);
	const ref2 = useRef<any>(null);
	const ref3 = useRef<any>(null);
	const ref4 = useRef<any>(null);
	const ref5 = useRef<any>(null);
	const ref6 = useRef<any>(null);
	const ref7 = useRef<any>(null);
	const ref8 = useRef<any>(null);

	return (
		<div className="form-step-2 form-step">
			<SelectForm
				selectRef={ref1}
				title="Доход"
				options={optionsIncome}
				defaultOptions={income.value}
				isValid={income.isValid}
				setValue={onSetIncome}
			/>
			<SelectForm
				selectRef={ref2}
				title="Трудоустройство"
				options={optionsEmployment}
				defaultOptions={employment.value}
				isValid={employment.isValid}
				setValue={onSetEmployment}
			/>
			<SelectForm
				selectRef={ref3}
				title="Способ подтверждения дохода"
				options={optionsMethodConfirmingIncome}
				defaultOptions={methodConfirmingIncome.value}
				isValid={methodConfirmingIncome.isValid}
				setValue={onSetMethodConfirmingIncome}
			/>
			<SelectForm
				selectRef={ref4}
				title="Кредитная история"
				options={optionsCreditHistory}
				defaultOptions={creditHistory.value}
				isValid={creditHistory.isValid}
				setValue={onSetCreditHistory}
			/>
			<SelectForm
				selectRef={ref5}
				title="Образование"
				options={optionsEducation}
				defaultOptions={education.value}
				isValid={education.isValid}
				setValue={onSetEducation}
			/>
			<SelectForm
				selectRef={ref6}
				title="Собственность"
				options={optionsOwn}
				defaultOptions={own.value}
				isValid={own.isValid}
				setValue={onSetOwn}
			/>
			<div className="row jc-sb" style={{ alignItems: 'flex-end' }}>
				<SelectForm
					selectRef={ref7}
					title="Начало работы на последнем месте"
					type="small"
					options={optionsStartWorkLastPlaceMonth}
					defaultOptions={startWorkLastPlaceMonth.value}
					isValid={
						typeof startWorkLastPlaceMonth.isValid === 'string'
							? ' '
							: startWorkLastPlaceMonth.isValid
					}
					setValue={onSetStartWorkLastPlaceMonth}
				/>
				<SelectForm
					selectRef={ref8}
					title=""
					commonErrorText={commonErrorText}
					type="small"
					options={optionsStartWorkLastPlaceYear}
					defaultOptions={startWorkLastPlaceYear.value}
					isValid={startWorkLastPlaceYear.isValid}
					setValue={onSetStartWorkLastPlaceYear}
				/>
			</div>
			<div className="form-step__btns row">
				<div className="form-step-back" onClick={onBackStep}>
					Назад
				</div>
				<ButtonForm text="Далее" setFunction={setStep} />
			</div>
		</div>
	);
};

export default FormStep2;
