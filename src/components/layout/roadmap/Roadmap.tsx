import { FC } from 'react';

import './style.css';

const Roadmap: FC = () => {
	return (
		<div className="roadmap">
			<div className="roadmap__content">
				<h2 className="roadmap__title">Всего 3 шага до получения денег!</h2>
				<ul className="roadmap__list row jc-sb">
					<li className="roadmap__item roadmap-item">
						<div className="roadmap-item__step">1</div>
						<div className="roadmap-item__title">Оставьте заявку на сайте</div>
						<div className="roadmap-item__text">
							Мы свяжемся с вами, чтобы уточнить все вопросы
						</div>
					</li>
					<li className="roadmap__item roadmap-item">
						<div className="roadmap-item__step">2</div>
						<div className="roadmap-item__title">Дождитесь решения</div>
						<div className="roadmap-item__text">
							Одобрение кредита займет не более 30 минут
						</div>
					</li>
					<li className="roadmap__item roadmap-item">
						<div className="roadmap-item__step">3</div>
						<div className="roadmap-item__title">Получите кредит</div>
						<div className="roadmap-item__text">
							Предоставьте паспорт + второй документ и заберите деньги
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Roadmap;
