import { FC, useContext, useState, useRef, useEffect } from 'react';
import { FormQuestContext } from './../../../reducer/reducer';
import { setCity } from './../../../actions/formQuest';

import useStep1 from './../../../services/formQuestServise/Step1Servise';
import useDadata from './../../../services/dadata';

import Input from './../input/Input';
import InputHint from '../inputHint/InputHint';

import './style.css';

const FieldCity: FC = () => {
	const { state, dispatch } = useContext(FormQuestContext);
	const { city } = state;

	const ref = useRef<any>(null);

	const [hintActive, setHintActive] = useState(false);
	const [hintItem, setHintItem] = useState(-1);
	const [hintList, setHintList] = useState<string[]>([]);

	useEffect(() => {
		if (!hintActive) ref.current.blur();
	}, [hintActive]);

	const { maskCity, validationCity } = useStep1();

	const { getCity } = useDadata();

	const setPressKeyArrow = (e: any) => {
		const key = e.key;

		if (hintActive && (key === 'ArrowDown' || key === 'ArrowUp')) {
			e.preventDefault();

			const setNextValue = (nextValue: number) => {
				setCity(
					dispatch,
					city,
					maskCity(hintList[nextValue] || city.value),
					false,
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
			onRemoveFocusCity(city.value, true);
		}
	};

	const onSetCity = (value: string, isDadata = false) => {
		if (isDadata) {
			onRemoveFocusCity(value, isDadata);
			return;
		}
		setCity(dispatch, city, maskCity(value), false, isDadata);
		setHintItem(-1);
		getCity(value).then((res) => {
			setHintList(res);
			setHintActive(true);
		});
	};
	const onRemoveFocusCity = (value: string, isDadata = city.isDadata) => {
		const isValid = validationCity(
			city.errorMessages,
			value,
			isDadata || false
		);
		setCity(dispatch, city, maskCity(value), isValid, isDadata || false);
		setHintActive(false);
		setHintList([]);
		setHintItem(-1);
	};

	const InputHintView =
		hintList.length > 0 && hintActive ? (
			<InputHint
				hintList={hintList}
				setValue={onSetCity}
				hintItem={hintItem}
				hintActive={hintActive}
			/>
		) : null;

	return (
		<div className="field-input">
			<Input
				inputRef={ref}
				title="Город получения кредита"
				placeholder="Город"
				value={city.value}
				setValue={onSetCity}
				removeFocus={onRemoveFocusCity}
				onPressKeyArrow={setPressKeyArrow}
				isValid={city.isValid}
			/>
			{InputHintView}
		</div>
	);
};

export default FieldCity;
