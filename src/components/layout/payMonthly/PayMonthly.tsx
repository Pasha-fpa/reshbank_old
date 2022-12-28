import { FC, useState } from 'react';

import useCalcPay from './../../../services/CalcPayService';

import RangeDefault from './../../elements/range/rangeDefault/RangeDefault';
import SelectDefault from '../../elements/select/selectDefault/SelectDefault';
import ButtonScroll from './../../elements/button/buttonScroll/ButtonScroll';

import './style.css';

import bg from './../../../assets/imgs/pay/bg.png';
import money from './../../../assets/imgs/pay/money.png';

const PayMonthly: FC = () => {
	const [sum, setSum] = useState(100000);
	const [years, setYears] = useState(1);

	const { getMonthlyPay } = useCalcPay(sum, years);

	const monthly = getMonthlyPay();

	return (
		<div className="pay-monthly">
			<div className="pay-monthly__content row">
				<div className="pay-monthly__left">
					<h2 className="pay-monthly__title">Рассчитайте кредит</h2>
					<RangeDefault
						min={100000}
						max={10000000}
						step={100000}
						value={sum}
						setValue={setSum}
					/>
					<div className="pay-monthly__line"></div>
					<SelectDefault years={years} setYears={setYears} />
					<div className="pay-monthly__line"></div>
					<ButtonScroll text="Получить одобрение" />
				</div>
				<div className="pay-monthly__right pay-monthly-right row jc-sb">
					<div className="pay-monthly-right__info">
						<div className="pay-monthly-right__title">
							Ваш ежемесячный платеж:
						</div>
						<div className="pay-monthly-right__sum">
							~{monthly.toLocaleString()}
						</div>
						<div className="pay-monthly-right__unit">рублей</div>
						<div className="pay-monthly-right__img">
							<img src={money} alt="Деньги" />
						</div>
						<div className="pay-monthly-right__text">
							* Расчет произведен по <br />
							среднестатистической ставке 7.2% годовых
						</div>
					</div>
					<div className="pay-monthly__img">
						<img src={bg} alt="фон" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PayMonthly;
