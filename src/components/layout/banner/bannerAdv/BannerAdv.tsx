import { FC } from 'react';

import ButtonScroll from './../../../elements/button/buttonScroll/ButtonScroll';

import './style.css';

import { bannerAdvTypes } from './types';

import imgOdobren from './../../../../assets/imgs/banner/odobren.png';

const BannerAdv: FC<bannerAdvTypes> = ({ title }) => {
	return (
		<div className="banner-adv">
			<div className="banner-adv__content row jc-sb">
				<div className="banner-adv__info">
					<div className="banner-adv__title">{title}</div>
					<ButtonScroll />
				</div>
				<div className="banner-adv__img">
					<img src={imgOdobren} alt="Одобрен" />
				</div>
			</div>
		</div>
	);
};

export default BannerAdv;
