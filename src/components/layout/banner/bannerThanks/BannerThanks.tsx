import { FC } from 'react';

import './style.css';

import img01 from './../../../../assets/imgs/thanks/img01.png';

const BannerThanks: FC = () => {
	return (
		<div className="banner-thanks container">
			<div className="banner-thanks__content row jc-sb ai-s">
				<div className="banner-thanks__info banner-thanks-info">
					<h1 className="banner-thanks-info__title">
						Cпасибо, мы получили Вашу заявку
					</h1>
					<span className="banner-thanks-info__text">
						<span>
							Мы свяжемся с Вами в течение 10 минут в рабочие часы
							<br />
						</span>
						<span className="nowrap">(понедельник - пятница с 9 до 18)</span>
					</span>
				</div>
				<div className="banner-thanks__img">
					<img src={img01} alt="Клиент" />
				</div>
			</div>
		</div>
	);
};

export default BannerThanks;
