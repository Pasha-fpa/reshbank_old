import { FC, useContext, useState, useRef, useEffect } from 'react';
import { FormQuestContext } from './../../../reducer/reducer';
import { setFio } from './../../../actions/formQuest';

import useStep1 from './../../../services/formQuestServise/Step1Servise';
import useDadata from './../../../services/dadata';

import Input from './../input/Input';
import InputHint from '../inputHint/InputHint';

import './style.css';

const FieldFio: FC = () => {
	const { state, dispatch } = useContext(FormQuestContext);
	const { fio } = state;

	const ref = useRef<any>(null);

	const [hintActive, setHintActive] = useState(false);
	const [hintItem, setHintItem] = useState(-1);
	const [hintList, setHintList] = useState<string[]>([]);

	useEffect(() => {
		if (!hintActive) ref.current.blur();
	}, [hintActive]);

	const { maskFio, validationFio } = useStep1();

	const { getFio } = useDadata();

	const setPressKeyArrow = (e: any) => {
		const key = e.key;

		if (key === 'ArrowDown' || key === 'ArrowUp') {
			e.preventDefault();

			const setNextValue = (nextValue: number) => {
				setFio(dispatch, fio, maskFio(hintList[nextValue] || fio.value), false);
			};

			if (key === 'ArrowDown') {
				setHintItem((hintItem) => {
					const nextHintActive =
						hintItem < hintList.length - 1 ? hintItem + 1 : 0;
					setNextValue(nextHintActive);
					return nextHintActive;
				});
			} else {
				setHintItem((hintItem) => {
					const nextHintActive =
						hintItem > 0 ? hintItem - 1 : hintList.length - 1;
					setNextValue(nextHintActive);
					return nextHintActive;
				});
			}
		}
		if (key === 'Enter') {
			e.preventDefault();
			e.target.blur();
			onRemoveFocusFio(fio.value);
		}
	};

	const onSetFio = (value: string, isClick = false) => {
		if (isClick) {
			onRemoveFocusFio(value);
			return;
		}
		setFio(dispatch, fio, maskFio(value), false);
		setHintItem(-1);
		getFio(value).then((res) => {
			setHintList(res);
			setHintActive(true);
		});
	};
	const onRemoveFocusFio = (value: string) => {
		const isValid = validationFio(fio.errorMessages, value);
		setFio(dispatch, fio, maskFio(value), isValid);
		setHintActive(false);
		setHintItem(-1);
	};

	const InputHintView =
		hintList.length > 0 && hintActive ? (
			<InputHint
				hintList={hintList}
				setValue={onSetFio}
				hintItem={hintItem}
				hintActive={hintActive}
			/>
		) : null;

	return (
		<div className="field-input">
			<Input
				inputRef={ref}
				title="ФИО"
				placeholder="Иванов Иван Иванович"
				value={fio.value}
				setValue={onSetFio}
				removeFocus={onRemoveFocusFio}
				onPressKeyArrow={setPressKeyArrow}
				isValid={fio.isValid}
			/>
			{InputHintView}
		</div>
	);
};

export default FieldFio;
