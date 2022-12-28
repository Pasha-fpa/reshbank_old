import { FC, useContext, useState, useRef, useEffect } from 'react';
import { FormQuestContext } from './../../../reducer/reducer';
import { setPlaceOfBirth } from './../../../actions/formQuest';

import useDadata from './../../../services/dadata';

import Input from './../input/Input';
import InputHint from '../inputHint/InputHint';

import './style.css';

const FieldPlaceOfBirth: FC = () => {
	const { state, dispatch } = useContext(FormQuestContext);
	const { placeOfBirth } = state;

	const ref = useRef<any>(null);

	const [hintActive, setHintActive] = useState(false);
	const [hintItem, setHintItem] = useState(-1);
	const [hintList, setHintList] = useState<string[]>([]);

	useEffect(() => {
		if (!hintActive) ref.current.blur();
	}, [hintActive]);

	const { getPlaceOfBirth } = useDadata();

	const setPressKeyArrow = (e: any) => {
		const key = e.key;

		if (hintActive && (key === 'ArrowDown' || key === 'ArrowUp')) {
			e.preventDefault();

			const setNextValue = (nextValue: number) => {
				setPlaceOfBirth(
					dispatch,
					placeOfBirth,
					hintList[nextValue] || placeOfBirth.value,
					true,
					true
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
			const isDadata = hintItem !== -1;
			onRemoveFocusPlaceOfBirth(placeOfBirth.value, isDadata);
		}
	};

	const onSetPlaceOfBirth = (value: string, isDadata = false) => {
		if (isDadata) {
			onRemoveFocusPlaceOfBirth(value, isDadata);
			return;
		}
		setPlaceOfBirth(dispatch, placeOfBirth, value, false, isDadata);
		setHintItem(-1);
		getPlaceOfBirth(value).then((res) => {
			setHintList(res);
			setHintActive(true);
		});
	};
	const onRemoveFocusPlaceOfBirth = (
		value: string,
		isDadata = placeOfBirth.isDadata
	) => {
		const isValid = isDadata ? true : placeOfBirth.errorMessages.choice;
		setPlaceOfBirth(dispatch, placeOfBirth, value, isValid, isDadata || false);
		setHintActive(false);
		setHintItem(-1);
	};

	const InputHintView =
		hintList.length > 0 && hintActive ? (
			<InputHint
				hintList={hintList}
				setValue={onSetPlaceOfBirth}
				hintItem={hintItem}
				hintActive={hintActive}
			/>
		) : null;

	return (
		<div className="field-input">
			<Input
				inputRef={ref}
				title="Место рождения"
				placeholder="Населенный пункт"
				value={placeOfBirth.value}
				setValue={onSetPlaceOfBirth}
				removeFocus={onRemoveFocusPlaceOfBirth}
				onPressKeyArrow={setPressKeyArrow}
				isValid={placeOfBirth.isValid}
			/>
			{InputHintView}
		</div>
	);
};

export default FieldPlaceOfBirth;
