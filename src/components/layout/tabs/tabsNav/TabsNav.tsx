import { FC } from 'react';

import { Link } from 'react-scroll';

import { tabsList } from '../tabsList';

import ButtonScroll from './../../../elements/button/buttonScroll/ButtonScroll';

import './style.css';

import { tabsNavTypes } from './types';

const TabsNav: FC<tabsNavTypes> = ({ tab, setTab }) => {
	return (
		<div className="tabs-nav">
			<div className="tabs-content row jc-sb">
				<div className="tabs-nav__title">Кредит наличными</div>
				<div className="tabs-nav__links row">
					<Link
						to="tabs"
						duration={500}
						spy={true}
						smooth={true}
						className={`tabs-nav__link ${
							tab === tabsList.Description ? '_active' : ''
						}`}
						onClick={() => setTab(tabsList.Description)}
					>
						Описание
					</Link>
					<Link
						to="tabs"
						duration={500}
						spy={true}
						smooth={true}
						className={`tabs-nav__link ${
							tab === tabsList.Get ? '_active' : ''
						}`}
						onClick={() => setTab(tabsList.Get)}
					>
						Как получить
					</Link>
					<Link
						to="tabs"
						duration={500}
						spy={true}
						smooth={true}
						className={`tabs-nav__link ${
							tab === tabsList.Rates ? '_active' : ''
						}`}
						onClick={() => setTab(tabsList.Rates)}
					>
						Тарифы
					</Link>
					<ButtonScroll clasz={'small'} />
				</div>
			</div>
		</div>
	);
};

export default TabsNav;
