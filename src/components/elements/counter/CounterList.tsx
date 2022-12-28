import React, { FC, Children, useEffect, useState } from 'react';

export interface counterListTypes {
	children: JSX.Element[] | JSX.Element;
}

const CounterList: FC<counterListTypes> = ({ children }) => {
	const [percent, setPercent] = useState(0);

	useEffect(() => {
		if (percent === 0) setTimeout(setPercent, 50, percent + 0.01);
		else if (percent < 1) {
			if (percent > 0.95)
				setTimeout(setPercent, 30 * (1 + percent), percent + 0.01);
			else setTimeout(setPercent, 15, percent + 0.01);
		}
	}, [percent]);

	return (
		<div className="row">
			{Children.map(children, (child) => {
				return React.cloneElement(child, { percent: percent });
			})}
		</div>
	);
};

export default CounterList;
