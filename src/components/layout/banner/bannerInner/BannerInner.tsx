import { FC } from 'react';

import ButtonScroll from './../../../elements/button/buttonScroll/ButtonScroll';
import Pay from '../../pay/Pay';
import BannerInfo from './../bannerInfo/BannerInfo';

import './style.css';

import girlWithMoney from './../../../../assets/imgs/banner/girl-with-money.png';

const BannerInner: FC = () => {
	return (
		<div className="banner-inner container">
			<div className="banner-inner__content row jc-sb ai-s">
				<div className="banner-inner__info banner-inner-info">
					<h1 className="banner-inner-info__title">
						<span>Кредит по паспорту до </span>
						<span className="nowrap">10 000 000 ₽</span>
						<span> без залога и поручителей за 1 день</span>
					</h1>
					<Pay />
					<ButtonScroll />
				</div>
				<div className="banner-inner__img">
					<img src={girlWithMoney} alt="Клиент" />
				</div>
				<BannerInfo />
			</div>
		</div>
	);
};

export default BannerInner;
