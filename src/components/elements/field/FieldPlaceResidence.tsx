import { FC, useContext, useState, useRef, useEffect } from 'react';
import { FormQuestContext } from './../../../reducer/reducer';
import { setPlaceResidence } from './../../../actions/formQuest';

import useStep3 from './../../../services/formQuestServise/Step3Servise';
import useDadata from './../../../services/dadata';

import Input from './../input/Input';
import InputHint from '../inputHint/InputHint';

import './style.css';

const FieldPlaceResidence: FC = () => {
	const { state, dispatch } = useContext(FormQuestContext);
	const { placeResidence } = state;

	const ref = useRef<any>(null);

	const [hintActive, setHintActive] = useState(false);
	const [hintItem, setHintItem] = useState(-1);
	const [hintList, setHintList] = useState<any[]>([]);

	useEffect(() => {
		if (!hintActive) ref.current.blur();
	}, [hintActive]);

	const { maskPlaceResidence, validationPlaceResidence } = useStep3();

	const { getAddress } = useDadata();

	const setPressKeyArrow = (e: any) => {
		const key = e.key;

		if (hintActive && (key === 'ArrowDown' || key === 'ArrowUp')) {
			e.preventDefault();

			const setNextValue = (nextValue: number) => {
				setPlaceResidence(
					dispatch,
					placeResidence,
					maskPlaceResidence(hintList[nextValue].value || placeResidence.value),
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
			const isDadata = hintItem !== -1;
			onRemoveFocusPlaceResidence(placeResidence.value, isDadata);
		}
	};

	const onSetPlaceResidence = (value: string, isDadata = false) => {
		if (isDadata) {
			onRemoveFocusPlaceResidence(value, isDadata);
			return;
		}
		setPlaceResidence(
			dispatch,
			placeResidence,
			maskPlaceResidence(value),
			false,
			isDadata
		);
		setHintItem(-1);
		getAddress(value).then((res) => {
			setHintList(res);
			setHintActive(true);
		});
	};
	const onRemoveFocusPlaceResidence = (
		value: string,
		isDadata = placeResidence.isDadata
	) => {
		// eslint-disable-next-line prettier/prettier
		const valueObj = isDadata ? {...hintList.find((item: any) => {if (item.value === value) return item;}),} : { value: value };
		if (isDadata && hintList.length === 0) return;
		const isValid = validationPlaceResidence(
			placeResidence.errorMessages,
			valueObj,
			isDadata || false
		);
		setPlaceResidence(
			dispatch,
			placeResidence,
			maskPlaceResidence(value),
			isValid,
			isDadata || false
		);
		setHintActive(false);
		setHintList([]);
		setHintItem(-1);
	};

	const InputHintView =
		hintList.length > 0 && hintActive ? (
			<InputHint
				hintList={hintList.map((item) => item.value)}
				setValue={onSetPlaceResidence}
				hintItem={hintItem}
				hintActive={hintActive}
			/>
		) : null;

	return (
		<div className="field-input">
			<Input
				inputRef={ref}
				title="Адрес прописки"
				placeholder="Адрес прописки"
				value={placeResidence.value}
				setValue={onSetPlaceResidence}
				removeFocus={onRemoveFocusPlaceResidence}
				onPressKeyArrow={setPressKeyArrow}
				isValid={placeResidence.isValid}
			/>
			{InputHintView}
		</div>
	);
};

export default FieldPlaceResidence;
