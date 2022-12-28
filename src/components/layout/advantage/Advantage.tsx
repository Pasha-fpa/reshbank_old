import { FC } from 'react';

import './style.css';

import img01 from './../../../assets/imgs/bullet/img01.png';
import img02 from './../../../assets/imgs/bullet/img02.png';
import img03 from './../../../assets/imgs/bullet/img03.png';
import img04 from './../../../assets/imgs/bullet/img04.png';

const Advantage: FC = () => {
	return (
		<div className="advantage">
			<div className="advantage__content">
				<ul className="advantage__list row jc-sb">
					<li className="advantage__item row jc-sb">
						<div className="advantage__info">
							<div className="advantage__title">Без залога и поручителей</div>
							<div className="advantage__text">
								Мы не требуем от Вас обеспечения по кредиту.
							</div>
						</div>
						<div className="advantage__img">
							<img src={img01} alt="Преимущество" />
						</div>
					</li>
					<li className="advantage__item row jc-sb">
						<div className="advantage__info">
							<div className="advantage__title">
								Досрочное погашение без штрафов
							</div>
							<div className="advantage__text">
								Вы можете гасить кредит досрочно с первого дня.
							</div>
						</div>
						<div className="advantage__img">
							<img src={img02} alt="Преимущество" />
						</div>
					</li>
					<li className="advantage__item row jc-sb">
						<div className="advantage__info">
							<div className="advantage__title">
								Возможность получить кредит без страховки
							</div>
							<div className="advantage__text">
								Вы вправе отказаться от страхования кредита.
							</div>
						</div>
						<div className="advantage__img">
							<img src={img03} alt="Преимущество" />
						</div>
					</li>
					<li className="advantage__item row jc-sb">
						<div className="advantage__info">
							<div className="advantage__title">Решение по кредиту онлайн</div>
							<div className="advantage__text">
								Для получения одобрения не требуется посещение офиса.
							</div>
						</div>
						<div className="advantage__img">
							<img src={img04} alt="Преимущество" />
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Advantage;
