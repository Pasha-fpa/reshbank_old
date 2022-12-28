import { FC } from 'react';

import './style.css';

import img01 from './../../../../assets/imgs/tab/img01.png';
import img02 from './../../../../assets/imgs/tab/img02.png';
import img03 from './../../../../assets/imgs/tab/img03.png';

const TabDescription: FC = () => {
	return (
		<div className="tab-description">
			<h2 className="tab-description__title">
				Быстрое оформление и прозрачные условия
			</h2>
			<ul className="tab-description-carts row jc-sb">
				<li className="tab-description-carts-item row ai-n">
					<div className="tab-description-carts-item__info">
						<div className="tab-description-carts-item__title">
							Без подтверждения цели кредита
						</div>
						<div className="tab-description-carts-item__text">
							Сумма до 10 000 000 ₽. Тратьте эти деньги на то, что посчитаете
							нужным.
						</div>
					</div>
					<div className="tab-description-carts-item__img">
						<img src={img01} alt="" />
					</div>
				</li>
				<li className="tab-description-carts-item row ai-n">
					<div className="tab-description-carts-item__info">
						<div className="tab-description-carts-item__title">
							Удобный срок кредита
						</div>
						<div className="tab-description-carts-item__text">
							Выберите удобный для вас срок погашения кредита: от 12 до 72
							месяцев.
						</div>
					</div>
					<div className="tab-description-carts-item__img">
						<img src={img02} alt="" />
					</div>
				</li>
				<li className="tab-description-carts-item row ai-n">
					<div className="tab-description-carts-item__info">
						<div className="tab-description-carts-item__title">
							Без лишних бумаг
						</div>
						<div className="tab-description-carts-item__text">
							От Вас только паспорт.
							<br />
							Одобрение за 30 минут.
						</div>
					</div>
					<div className="tab-description-carts-item__img">
						<img src={img03} alt="" />
					</div>
				</li>
			</ul>
		</div>
	);
};

export default TabDescription;
