import { FC } from 'react';

import './style.css';

import img01 from './../../../assets/imgs/features/img01.jpg';
import img02 from './../../../assets/imgs/features/img02.jpg';
import img03 from './../../../assets/imgs/features/img03.jpg';
import img04 from './../../../assets/imgs/features/img04.jpg';
import img05 from './../../../assets/imgs/features/img05.jpg';

const Features: FC = () => {
	return (
		<div className="features">
			<div className="features__content">
				<h2 className="features__title">
					С высокой вероятностью получите кредит даже если у вас
				</h2>
				<ul className="features__list row jc-sb">
					<li className="features__item">
						<div className="features__img">
							<img src={img01} alt="Особенность" />
						</div>
						<div className="features__text">Маленькая зарплата</div>
					</li>
					<li className="features__item">
						<div className="features__img">
							<img src={img02} alt="Особенность" />
						</div>
						<div className="features__text">Неофициальное место работы</div>
					</li>
					<li className="features__item">
						<div className="features__img">
							<img src={img03} alt="Особенность" />
						</div>
						<div className="features__text">
							Уже есть кредиты в других банках
						</div>
					</li>
					<li className="features__item">
						<div className="features__img">
							<img src={img04} alt="Особенность" />
						</div>
						<div className="features__text">Плохая кредитная история</div>
					</li>
					<li className="features__item">
						<div className="features__img">
							<img src={img05} alt="Особенность" />
						</div>
						<div className="features__text">Временная регистрация</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Features;
