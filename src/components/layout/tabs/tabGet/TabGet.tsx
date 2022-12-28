import { FC } from 'react';

import './style.css';

const TabGet: FC = () => {
	return (
		<div className="tab-get">
			<div className="tab-get__content">
				<ul className="tab-get__list">
					<li className="tab-get-item row">
						<div className="tab-get-item__title">Необходимые документы</div>
						<ul className="tab-get-item__points">
							<li className="tab-get-item__point">Паспорт</li>
							<li className="tab-get-item__point">
								Второй документ при наличии (загран. паспорт, СНИЛС, ИНН,
								водительское удостоверение, свидетельство о собственности, СТС
								на автомобиль)
							</li>
						</ul>
					</li>
					<li className="tab-get-item row">
						<div className="tab-get-item__title">Требования к заемщику</div>
						<ul className="tab-get-item__points">
							<li className="tab-get-item__point">
								<b>Гражданин РФ. </b>
								Подтвердить это Вы можете паспортом гражданина Российской
								Федерации
							</li>
							<li className="tab-get-item__point">
								<b>Возраст: </b>
								от 21 года (на дату обращения) до 85 лет (на момент полного
								погашения).
							</li>
							<li className="tab-get-item__point">
								<b>Ваш доход: </b>
								от 10 000 ₽ в месяц в течение последних 3 месяцев.
							</li>
							<li className="tab-get-item__point">
								<b>Трудовой стаж: </b>
								от 2-х месяцев. Нам достаточно знать, что на текущем месте
								работы Вы проработали не менее 2 последних месяцев.
							</li>
							<li className="tab-get-item__point">
								<b>Кредитование ИП осуществляется </b>в рамках финансирования
								бизнеса как юридического лица
							</li>
							<li className="tab-get-item__point">
								<b>Кредитование ООО осуществляется </b>в рамках финансирования
								бизнеса как юридического лица
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default TabGet;
