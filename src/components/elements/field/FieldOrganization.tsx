import { FC, useContext, useState, useRef, useEffect } from 'react';
import { FormQuestContext } from './../../../reducer/reducer';
import { setOrganization, setWorkPhone } from './../../../actions/formQuest';

import useStep1 from './../../../services/formQuestServise/Step1Servise';
import useStep3 from './../../../services/formQuestServise/Step3Servise';
import useDadata from './../../../services/dadata';

import Input from './../input/Input';
import InputHint from '../inputHint/InputHint';

import './style.css';

const FieldOrganization: FC = () => {
	const { state, dispatch } = useContext(FormQuestContext);
	const { organization, workPhone } = state;

	const ref = useRef<any>(null);

	const [hintActive, setHintActive] = useState(false);
	const [hintItem, setHintItem] = useState(-1);
	const [hintList, setHintList] = useState<any[]>([]);

	useEffect(() => {
		if (!hintActive) ref.current.blur();
	}, [hintActive]);

	const { maskPhone, validationPhone, maskWorkGoodPhone } = useStep1();
	const { validationOrganisation } = useStep3();

	const { getOrganization, getOrganizationPhone } = useDadata();

	const setPressKeyArrow = (e: any) => {
		const key = e.key;

		if (hintActive && (key === 'ArrowDown' || key === 'ArrowUp')) {
			e.preventDefault();

			const setNextValue = (nextValue: number) => {
				setOrganization(
					dispatch,
					organization,
					hintList[nextValue].value || organization.value,
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
			onRemoveFocusOrganization(organization.value, isDadata);
		}
	};

	const onSetOrganization = (value: string, isDadata = false) => {
		if (isDadata) {
			onRemoveFocusOrganization(value, isDadata);
			return;
		}
		setOrganization(dispatch, organization, value, false, isDadata);
		setHintItem(-1);
		getOrganization(value).then((res) => {
			setHintList(res);
			setHintActive(true);
		});
	};
	const onRemoveFocusOrganization = async (
		value: string,
		isDadata = organization.isDadata
	) => {
		// eslint-disable-next-line prettier/prettier
		const valueObj = isDadata ? {...hintList.find((item: any) => {if (item.value === value) return item;}),}: { value: value };
		if (isDadata && hintList.length === 0) return;
		const isValid = validationOrganisation(
			organization.errorMessages,
			valueObj.value,
			isDadata || false
		);
		setOrganization(dispatch, organization, value, isValid, isDadata || false);
		setHintActive(false);
		setHintList([]);
		setHintItem(-1);
		if (isValid && valueObj?.hid) {
			const ph = await getOrganizationPhone(valueObj?.hid);
			const isPhValid = validationPhone(
				workPhone.errorMessages,
				maskWorkGoodPhone(ph)
			);
			if (isPhValid)
				setWorkPhone(dispatch, workPhone, maskWorkGoodPhone(ph), isPhValid);
		}
	};

	const InputHintView =
		hintList.length > 0 && hintActive ? (
			<InputHint
				hintList={hintList.map((item) => item.value)}
				setValue={onSetOrganization}
				hintItem={hintItem}
				hintActive={hintActive}
			/>
		) : null;

	return (
		<div className="field-input">
			<Input
				inputRef={ref}
				title="Наименование организации"
				placeholder="ПАО Сбербанк"
				value={organization.value}
				setValue={onSetOrganization}
				removeFocus={onRemoveFocusOrganization}
				onPressKeyArrow={setPressKeyArrow}
				isValid={organization.isValid}
			/>
			{InputHintView}
		</div>
	);
};

export default FieldOrganization;
