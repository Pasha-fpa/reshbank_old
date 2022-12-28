import { FC, useContext, useState, useRef, useEffect } from 'react';
import { FormQuestContext } from './../../../reducer/reducer';
import { setUnitСode, setIssuedBy } from './../../../actions/formQuest';

import useStep4 from './../../../services/formQuestServise/Step4Servise';
import useDadata from './../../../services/dadata';

import Input from './../input/Input';
import InputHint from '../inputHint/InputHint';

import './style.css';

const FieldUnitCode: FC = () => {
	const { state, dispatch } = useContext(FormQuestContext);
	const { unitСode, issuedBy } = state;

	const ref = useRef<any>(null);

	const [hintActive, setHintActive] = useState(false);
	const [hintItem, setHintItem] = useState(-1);
	const [hintList, setHintList] = useState<string[]>([]);

	useEffect(() => {
		if (!hintActive) ref.current.blur();
	}, [hintActive]);

	const { maskUnitСode, validationUnitСode } = useStep4();

	const { getUnitCode } = useDadata();

	const setPressKeyArrow = (e: any) => {
		const key = e.key;

		if (key === 'ArrowDown' || key === 'ArrowUp') {
			e.preventDefault();

			const setNextValue = (nextValue: number) => {
				setUnitСode(
					dispatch,
					unitСode,
					maskUnitСode(`${hintList[nextValue] || unitСode.value}`),
					false
				);
				if (hintList[nextValue]) {
					setIssuedBy(
						dispatch,
						unitСode,
						hintList[nextValue].split(' - ')[1],
						true
					);
				}
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
			onRemoveFocusUnitСode(unitСode.value);
		}
	};

	const onSetUnitСode = (value: string, isDadata = false) => {
		setUnitСode(dispatch, unitСode, maskUnitСode(value), false);
		setHintItem(-1);

		if (isDadata) {
			setIssuedBy(dispatch, issuedBy, value.split(' - ')[1], true);

			onRemoveFocusUnitСode(value);
			return;
		}
		getUnitCode(value).then((res) => {
			setHintList(res);
			setHintActive(true);
		});
	};
	const onRemoveFocusUnitСode = (value: string) => {
		const isValid = validationUnitСode(unitСode.errorMessages, value);
		setUnitСode(dispatch, unitСode, maskUnitСode(value), isValid);
		setHintActive(false);
		setHintItem(-1);
	};

	const InputHintView =
		hintList.length > 0 && hintActive ? (
			<InputHint
				hintList={hintList}
				setValue={onSetUnitСode}
				hintActive={hintActive}
				hintItem={hintItem}
			/>
		) : null;

	return (
		<div className="field-input">
			<Input
				inputRef={ref}
				title="Код подразделения"
				placeholder="___-___"
				value={unitСode.value}
				setValue={onSetUnitСode}
				removeFocus={onRemoveFocusUnitСode}
				onPressKeyArrow={setPressKeyArrow}
				isValid={unitСode.isValid}
			/>
			{InputHintView}
		</div>
	);
};

export default FieldUnitCode;
