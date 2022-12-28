import { FC } from 'react';

import './style.css';

import { buttonFormTypes } from './types';

const ButtonForm: FC<buttonFormTypes> = ({ text, setFunction }) => {
	return (
		<button className="button-form" onClick={setFunction}>
			<div className="button-form__text">{text}</div>
		</button>
	);
};

export default ButtonForm;
