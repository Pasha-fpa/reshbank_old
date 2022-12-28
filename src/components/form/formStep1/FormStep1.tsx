import { FC, useContext, useState } from 'react';

import { FormQuestContext } from './../../../reducer/reducer';
import {
	setCheckbox1,
	setCheckbox2,
	setSum,
	setDateBirth,
	setPhone,
} from './../../../actions/formQuest';

import useStep1 from './../../../services/formQuestServise/Step1Servise';

import FieldFio from './../../elements/field/FieldFio';
import FieldEmail from './../../elements/field/FieldEmail';
import FieldCity from './../../elements/field/FieldCity';

import Input from './../../elements/input/Input';
import ButtonForm from './../../elements/button/buttonForm/ButtonForm';

import './style.css';

import { formStepTypes } from './../types';

const FormStep1: FC<formStepTypes> = ({ setStep }) => {
	const { state, dispatch } = useContext(FormQuestContext);
	const { checkbox1, checkbox2, sum, dateBirth, phone } = state;

	const {
		maskSum,
		validationSum,
		maskDateBirth,
		validationDateBirth,
		maskPhone,
		validationPhone,
	} = useStep1();

	const onSetSum = (value: string) => {
		setSum(dispatch, sum, maskSum(value), false);
	};
	const onRemoveFocusSum = (value: string) => {
		const isValid = validationSum(sum.errorMessages, value);
		setSum(dispatch, sum, maskSum(value), isValid);
	};

	const onSetDateBirth = (value: string) => {
		setDateBirth(dispatch, dateBirth, maskDateBirth(value), false);
	};
	const onRemoveFocusDateBirth = (value: string) => {
		const isValid = validationDateBirth(dateBirth.errorMessages, value);
		setDateBirth(dispatch, dateBirth, maskDateBirth(value), isValid);
	};

	const onSetPhone = (value: string) => {
		setPhone(dispatch, phone, maskPhone(value), false);
	};
	const onRemoveFocusPhone = (value: string) => {
		const isValid = validationPhone(phone.errorMessages, value);
		setPhone(dispatch, phone, maskPhone(value), isValid);
	};

	// const [checkbox1, setCheckbox1] = useState(true);
	// const [checkbox2, setCheckbox2] = useState(true);

	return (
		<div className="form-step-1 form-step">
			<FieldFio />
			<Input
				title="Сумма"
				placeholder="800 000"
				value={sum.value}
				setValue={onSetSum}
				removeFocus={onRemoveFocusSum}
				isValid={sum.isValid}
			/>
			<Input
				title="Дата рождения"
				placeholder="дд.мм.гггг"
				value={dateBirth.value}
				setValue={onSetDateBirth}
				removeFocus={onRemoveFocusDateBirth}
				isValid={dateBirth.isValid}
			/>
			<Input
				title="Телефон"
				placeholder="+7 (___) ___-__-__"
				value={phone.value}
				setValue={onSetPhone}
				removeFocus={onRemoveFocusPhone}
				isValid={phone.isValid}
			/>
			<FieldEmail />
			<FieldCity />
			<div className="checkbox">
				<div className="checkbox__error">
					{!checkbox1.value || !checkbox2.value
						? 'Примите оба согласие для отправки заявки и получения кредита'
						: ''}
				</div>
				<div className="checkbox__wrap">
					<div className="checkbox__control">
						<span className="checkbox__label">
							<div
								className={`checkbox__input ${
									checkbox1.isValid ? 'active' : ''
								}`}
								onClick={() =>
									setCheckbox1(
										dispatch,
										checkbox1,
										checkbox1.isValid ? '' : 'true',
										checkbox1.isValid ? false : true
									)
								}
							/>
							<span className="checkbox__text">
								Согласие на обработку персональных данных
							</span>
						</span>
					</div>
				</div>
				<div className="checkbox__wrap">
					<div className="checkbox__control">
						<span className="checkbox__label">
							<div
								className={`checkbox__input ${
									checkbox2.isValid ? 'active' : ''
								}`}
								onClick={() =>
									setCheckbox2(
										dispatch,
										checkbox2,
										checkbox2.isValid ? '' : 'true',
										checkbox2.isValid ? false : true
									)
								}
							/>
							<span className="checkbox__text">
								Согласие на получение рекламно-информационных рассылок
								(сообщений)
							</span>
						</span>
					</div>
				</div>
			</div>
			<div className="form-step__btns">
				<ButtonForm text="Далее" setFunction={setStep} />
			</div>
		</div>
	);
};

export default FormStep1;
