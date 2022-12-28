import { FC } from 'react';

import { Link } from 'react-scroll';

import './style.css';

import { buttonScrollTypes } from './types';

const ButtonScroll: FC<buttonScrollTypes> = ({
	text = 'Оформить кредит',
	hrefId = 'form-quest',
	clasz = '',
}) => {
	return (
		<Link
			className={`button-scroll ${clasz}`}
			to={hrefId}
			duration={500}
			spy={true}
			smooth={true}
		>
			<div className="button-scroll__span">{text}</div>
		</Link>
	);
};

export default ButtonScroll;
