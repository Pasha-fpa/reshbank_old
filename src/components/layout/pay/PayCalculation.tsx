import { FC } from 'react';

import { payCalculationTypes } from './types';

const PayCalculation: FC<payCalculationTypes> = ({
	monthly,
	overdraft,
	fullSum,
}) => {
	return (
		<div className="payment-calculation">
			<ul className="payment-calculation__list">
				<li className="payment-calculation__item row jc-sb">
					<div className="payment-calculation__name">Ежемесячный платеж:</div>
					<div className="payment-calculation__num">
						{monthly.toLocaleString()} ₽
					</div>
				</li>
				<li className="payment-calculation__item row jc-sb">
					<div className="payment-calculation__name">Сумма переплат:</div>
					<div className="payment-calculation__num">
						{overdraft.toLocaleString()} ₽
					</div>
				</li>
				<li className="payment-calculation__item row jc-sb">
					<div className="payment-calculation__name">Полная сумма кредита:</div>
					<div className="payment-calculation__num">
						{fullSum.toLocaleString()} ₽
					</div>
				</li>
			</ul>
		</div>
	);
};

export default PayCalculation;
