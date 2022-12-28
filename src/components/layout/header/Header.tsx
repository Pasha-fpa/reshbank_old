import { FC } from 'react';

import { Link } from 'react-router-dom';

import CounterList from './../../elements/counter/CounterList';
import CounterItem from './../../elements/counter/CounterItem';

import './style.css';

import logo from './../../../assets/imgs/logo/logo.svg';

import googleRating from './../../../assets/imgs/search/google-rating.jpeg';
import yandexRating from './../../../assets/imgs/search/yandex-rating.jpeg';

const Header: FC = () => {
	return (
		<header className="header">
			<div className="header__content row jc-sb">
				<div className="header__left header-left row">
					<Link to="/" className="header-left__logo">
						<img src={logo} alt="Лого" />
					</Link>
					<div className="header-left__text">
						Только положительные кредитные решения
					</div>
				</div>
				<div className="header__right header-right row">
					<div className="header-right__img">
						<img src={googleRating} alt="Гугл отзывы 5/5" />
					</div>
					<div className="header-right__img">
						<img src={yandexRating} alt="Яндекс отзывы 5/5" />
					</div>
					<CounterList>
						<CounterItem text="Выдано кредитов" date="сегодня" value={351} />
						<CounterItem
							text="Процент одобрения"
							date="сегодня"
							value={92}
							unit="%"
						/>
					</CounterList>
				</div>
			</div>
		</header>
	);
};

export default Header;
