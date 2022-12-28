import { FC } from 'react';

import './style.css';

const TabRates: FC = () => {
	return (
		<div className="tab-rates">
			<div className="tab-rates__content">
				<div className="tab-rates__list row jc-sb">
					<div className="tab-rates__title">Полезная информация</div>
					<div className="tab-rates__info">
						<ul className="tab-rates__table">
							<li className="tab-rates__item row">
								<div className="tab-rates__left">Срок кредита</div>
								<div className="tab-rates__right">от 12 до 72 месяцев</div>
							</li>
							<li className="tab-rates__item row">
								<div className="tab-rates__left">Сумма кредита</div>
								<div className="tab-rates__right">
									от 100 000 до 10 000 000 рублей
								</div>
							</li>
							<li className="tab-rates__item row">
								<div className="tab-rates__left">
									Переменная процентная ставка
								</div>
								<div className="tab-rates__right">5.9 - 18 годовых*</div>
							</li>
							<li className="tab-rates__item row">
								<div className="tab-rates__left">Справка о доходах</div>
								<div className="tab-rates__right">Без справки о доходах</div>
							</li>
							<li className="tab-rates__item row">
								<div className="tab-rates__left">Погашение</div>
								<div className="tab-rates__right">Равными платежами</div>
							</li>
							<li className="tab-rates__item row">
								<div className="tab-rates__left">Досрочное погашение</div>
								<div className="tab-rates__right">Без ограничений</div>
							</li>
							<li className="tab-rates__item row">
								<div className="tab-rates__left">Выдача кредита</div>
								<div className="tab-rates__right">на текущий счет</div>
							</li>
						</ul>
						<div className="tab-rates__description">
							* – Ставка по кредиту зависит от Вашего статуса. Для лиц,
							работающих по найму, ставка начинается от 5.9%. Для ИП — от 9%
							годовых.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TabRates;
