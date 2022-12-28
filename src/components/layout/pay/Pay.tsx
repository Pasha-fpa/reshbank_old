import { FC, useState, useLayoutEffect, useRef, useContext } from 'react';

import { FormQuestContext } from './../../../reducer/reducer';
import { setSum } from '../../../actions/formQuest';

import useCalcPay from '../../../services/CalcPayService';

import RangeDeep from '../../elements/range/rangeDeep/RangeDeep';
import PayCalculation from './PayCalculation';

import './style.css';

const Pay: FC = () => {
	const { state, dispatch } = useContext(FormQuestContext);

	const [sum, setSumComponent] = useState<any>(1000000);
	const [years, setYears] = useState(5);
	const isInitalSum = useRef(true);

	useLayoutEffect(() => {
		if (isInitalSum.current) isInitalSum.current = false;
		else {
			const value = typeof sum === 'number' ? sum : sum[0];
			setSum(dispatch, state.sum, value.toLocaleString(), true);
		}
	}, [sum]);

	const { getFullPay } = useCalcPay(sum, years);

	const [monthly, overdraft, fullSum] = getFullPay();

	return (
		<div className="payment">
			<div className="payment__range-list">
				<RangeDeep
					title="Сумма кредита"
					min={100000}
					max={10000000}
					step={100000}
					value={sum}
					setValue={setSumComponent}
					unit="₽"
				/>
				<RangeDeep
					title="Срок кредита"
					min={1}
					max={7}
					step={1}
					value={years}
					setValue={setYears}
					unit={years == 1 ? 'год' : years <= 4 ? 'года' : 'лет'}
				/>
			</div>
			<PayCalculation
				monthly={monthly}
				overdraft={overdraft}
				fullSum={fullSum}
			/>
		</div>
	);
};

export default Pay;
