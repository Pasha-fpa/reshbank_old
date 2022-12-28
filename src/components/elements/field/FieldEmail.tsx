import { FC, useContext, useState, useEffect, useRef } from 'react';
import { FormQuestContext } from './../../../reducer/reducer';
import { setEmail } from './../../../actions/formQuest';

import useStep1 from './../../../services/formQuestServise/Step1Servise';
import useDadata from './../../../services/dadata';

import Input from './../input/Input';
import InputHint from '../inputHint/InputHint';

import './style.css';

const FieldEmail: FC = () => {
	const { state, dispatch } = useContext(FormQuestContext);
	const { email } = state;

	const ref = useRef<any>(null);

	const [hintActive, setHintActive] = useState(false);
	const [hintItem, setHintItem] = useState(-1);
	const [hintList, setHintList] = useState<string[]>([]);

	useEffect(() => {
		if (!hintActive) ref.current.blur();
	}, [hintActive]);

	const { maskEmail, validationEmail } = useStep1();

	const { getEmail } = useDadata();

	const setPressKeyArrow = (e: any) => {
		const key = e.key;

		if (key === 'ArrowDown' || key === 'ArrowUp') {
			e.preventDefault();

			const setNextValue = (nextValue: number) => {
				setEmail(
					dispatch,
					email,
					maskEmail(hintList[nextValue] || email.value),
					false
				);
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
			onRemoveFocusEmail(email.value);
		}
	};

	const onSetEmail = (value: string, isClick = false) => {
		if (isClick) {
			onRemoveFocusEmail(value);
			return;
		}
		setEmail(dispatch, email, maskEmail(value), false);
		setHintItem(-1);
		getEmail(value).then((res) => {
			setHintList(res);
			setHintActive(true);
		});
	};
	const onRemoveFocusEmail = (value: string) => {
		const isValid = validationEmail(email.errorMessages, value);
		setEmail(dispatch, email, maskEmail(value), isValid);
		setHintActive(false);
		setHintItem(-1);
	};

	const InputHintView =
		hintList.length > 0 && hintActive ? (
			<InputHint
				hintList={hintList}
				setValue={onSetEmail}
				hintActive={hintActive}
				hintItem={hintItem}
			/>
		) : null;

	return (
		<div className="field-input">
			<Input
				inputRef={ref}
				title="Email"
				placeholder="ivan.ivanov@mail.com"
				value={email.value}
				setValue={onSetEmail}
				removeFocus={onRemoveFocusEmail}
				onPressKeyArrow={setPressKeyArrow}
				isValid={email.isValid}
			/>
			{InputHintView}
		</div>
	);
};

export default FieldEmail;
