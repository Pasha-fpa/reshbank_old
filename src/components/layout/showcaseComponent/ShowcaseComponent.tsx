import { FC, useState } from 'react';

import './style.css';

import { list1, list2, list3 } from './list';

const ShowcaseComponent: FC = () => {
	const [tab, setTab] = useState(1);

	const cardsRender = (list: any[]) => {
		return list.map((item, i) => (
			<div key={`1${i}`} className="offer" data-id="3329">
				{item?.sticker ? (
					<div id="sticker" style={{ backgroundColor: `${item.bgColor}` }}>
						{item?.sticker}
					</div>
				) : null}
				<div className="offer__img">
					<a
						href={`https://reshbank.online/${item?.link}`}
						target="_blank"
						rel="noreferrer"
					>
						<img src={item.img} />
					</a>
				</div>
				<div className="offer__props">
					<div className="offer__props_title">
						<span className="icon icon__money"></span> {item.offer1}
					</div>
					<div className="offer__props_subtitle">
						<span className="icon icon__perc"></span> {item.offer2}
					</div>
				</div>
				<div className="offer__summary">
					<ul>
						<li>{item.text1}</li>
						<li>{item.text2}</li>
						<li>{item.text3}</li>
					</ul>
				</div>
				<a
					className="offer__button"
					href={`https://reshbank.online/${item?.link}`}
					target="_blank"
					style={{ backgroundColor: `${item.bgColor}` }}
					rel="noreferrer"
				>
					{item.btnText}
				</a>
			</div>
		));
	};

	const cardsView1 = cardsRender(list1);
	const cardsView2 = cardsRender(list2);
	const cardsView3 = cardsRender(list3);

	return (
		<div className="wrapper">
			<h2>Рекомендуемые предложения</h2>
			<div className="offers offers_sticker">
				<div className="offers__categories">
					<span
						className={`category ${tab === 1 ? '_active' : ''}`}
						onClick={() => setTab(1)}
					>
						КРЕДИТЫ И КАРТЫ
					</span>
					<span
						className={`category ${tab === 2 ? '_active' : ''}`}
						onClick={() => setTab(2)}
					>
						ЗАЙМЫ
					</span>
					<span
						className={`category ${tab === 3 ? '_active' : ''}`}
						onClick={() => setTab(3)}
					>
						ДЕБЕТОВЫЕ КАРТЫ
					</span>
				</div>
				{tab === 1 ? (
					<div className="offers__list" id="category-1">
						{cardsView1}
					</div>
				) : null}
				{tab === 2 ? (
					<div className="offers__list" id="category-2">
						{cardsView2}
					</div>
				) : null}
				{tab === 3 ? (
					<div className="offers__list" id="category-3">
						{cardsView3}
					</div>
				) : null}
			</div>
		</div>
	);
};

export default ShowcaseComponent;
