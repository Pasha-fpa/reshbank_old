import { FC, useContext } from 'react';

import { FormQuestContext } from './../../../reducer/reducer';
import {
	setPassportNumberSeries,
	setDateOfIssue,
	setIssuedBy,
	setFullStep,
} from './../../../actions/formQuest';

import { step4Fields } from './../../../store/formQuestInitStore';

import useStep4 from './../../../services/formQuestServise/Step4Servise';

import Input from './../../elements/input/Input';
import FieldPlaceOfBirth from './../../elements/field/FieldPlaceOfBirth';
import FieldUnitCode from './../../elements/field/FieldUnitCode';

import { formStepTypes } from './../types';
import ButtonForm from './../../elements/button/buttonForm/ButtonForm';
import Textarea from './../../elements/textarea/Textarea';

const FormStep4: FC<formStepTypes> = ({ setStep, setBack }) => {
	const { state, dispatch } = useContext(FormQuestContext);
	const { passportNumberSeries, dateOfIssue, dateBirth, issuedBy } = state;

	const {
		maskPassportNumberSeries,
		validationPassportNumberSeries,
		maskDateOfIssue,
		validationDateOfIssue,
	} = useStep4();

	const onSetPassportNumberSeries = (value: string) => {
		setPassportNumberSeries(
			dispatch,
			passportNumberSeries,
			maskPassportNumberSeries(value),
			false
		);
	};
	const onRemoveFocusPassportNumberSeries = (value: string) => {
		const isValid = validationPassportNumberSeries(
			passportNumberSeries.errorMessages,
			value
		);
		setPassportNumberSeries(
			dispatch,
			passportNumberSeries,
			maskPassportNumberSeries(value),
			isValid
		);
	};

	const onSetDateOfIssue = (value: string) => {
		setDateOfIssue(dispatch, dateOfIssue, maskDateOfIssue(value), false);
	};
	const onRemoveFocusDateOfIssue = (value: string) => {
		const isValid = validationDateOfIssue(
			dateOfIssue.errorMessages,
			value,
			dateBirth.value
		);
		setDateOfIssue(dispatch, dateOfIssue, maskDateOfIssue(value), isValid);
	};

	const onSetIssuedBy = (value: string) => {
		setIssuedBy(dispatch, dateOfIssue, value, false);
	};
	const onRemoveFocusIssuedBy = (value: string) => {
		const isValid = issuedBy.value !== '' || dateOfIssue.errorMessages.default;
		setIssuedBy(dispatch, issuedBy, value, isValid);
	};

	const onBackStep = () => {
		setBack(3);
		// setFullStep(dispatch, step4Fields);
	};

	return (
		<div className="form-step-4 form-step">
			<Input
				title="Серия номер паспорта"
				placeholder="____ ______"
				value={passportNumberSeries.value}
				setValue={onSetPassportNumberSeries}
				removeFocus={onRemoveFocusPassportNumberSeries}
				isValid={passportNumberSeries.isValid}
			/>
			<Input
				title="Дата выдачи"
				placeholder="дд.мм.гггг"
				value={dateOfIssue.value}
				setValue={onSetDateOfIssue}
				removeFocus={onRemoveFocusDateOfIssue}
				isValid={dateOfIssue.isValid}
			/>
			<FieldUnitCode />
			<Textarea
				title="Кем выдан"
				placeholder="Кем выдан"
				value={issuedBy.value}
				setValue={onSetIssuedBy}
				removeFocus={onRemoveFocusIssuedBy}
				isValid={issuedBy.isValid}
			/>
			<FieldPlaceOfBirth />
			<div className="form-step__btns row">
				<div className="form-step-back" onClick={onBackStep}>
					Назад
				</div>
				<ButtonForm text="Отправить" setFunction={setStep} />
			</div>
		</div>
	);
};

export default FormStep4;
