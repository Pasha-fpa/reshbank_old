import { FC } from 'react';

import './style.css';

const BannerInfo: FC = () => {
	return (
		<div className="banner-info">
			<div className="banner-info__content">
				<ul className="banner-info__list row jc-sb">
					<li className="banner-info__item">
						<div className="banner-info__title">72 месяца</div>
						<div className="banner-info__text">максимальный срок кредита</div>
					</li>
					<li className="banner-info__item">
						<div className="banner-info__title">от 5.9% годовых</div>
						<div className="banner-info__text">
							минимальная процентная ставка
						</div>
					</li>
					<li className="banner-info__item">
						<div className="banner-info__title">Без справок</div>
						<div className="banner-info__text">получение по паспорту</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default BannerInfo;
