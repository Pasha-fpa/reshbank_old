import {
	FC,
	useState,
	useRef,
	useEffect,
	useContext,
	CSSProperties,
} from 'react';

import { useParams } from 'react-router-dom';

import {
	formQuestInitStore,
	step1Fields,
	step2Fields,
	step3Fields,
} from './../../store/formQuestInitStore';
import { FormQuestContext } from '../../reducer/reducer';

import Progress from './../elements/progress/Progress';
import FormStep1 from './formStep1/FormStep1';
import FormStep2 from './formStep2/FormStep2';
import FormStep3 from './formStep3/FormStep3';
import FormStep4 from './formStep4/FormStep4';

import useStep1 from './../../services/formQuestServise/Step1Servise';
import useSend from './../../services/SendService';
import {
	setFio,
	setSum,
	setDateBirth,
	setPhone,
	setEmail,
	setCity,
	setIncome,
	setEmployment,
	setMethodConfirmingIncome,
	setCreditHistory,
	setEducation,
	setOwn,
	setStartWorkLastPlaceMonth,
	setStartWorkLastPlaceYear,
	setOrganization,
	setWorkPhone,
	setPositionWork,
	setTotalWorkExperience,
	setFamilyStatus,
	setAmountChildren,
	setLoansPerMonth,
	setPlaceResidence,
	setFullStep,
	setPassportNumberSeries,
	setDateOfIssue,
	setUnitСode,
	setIssuedBy,
	setPlaceOfBirth,
} from './../../actions/formQuest';

import { animateScroll as scroll } from 'react-scroll';

import ClockLoader from 'react-spinners/ClockLoader';

import './style.css';

const getTotalPoints = () => {
	return [...Object.values(formQuestInitStore)].reduce(
		(prev, cur) => prev + cur.points,
		0
	);
};

const FormQuest: FC = () => {
	const formRef = useRef<any>(null);
	const { state, dispatch } = useContext(FormQuestContext);
	const {
		fio,
		sum,
		dateBirth,
		phone,
		email,
		city,
		checkbox1,
		checkbox2,

		income,
		employment,
		methodConfirmingIncome,
		creditHistory,
		education,
		own,
		startWorkLastPlaceMonth,
		startWorkLastPlaceYear,

		organization,
		workPhone,
		positionWork,
		totalWorkExperience,
		familyStatus,
		amountChildren,
		loansPerMonth,
		placeResidence,

		passportNumberSeries,
		dateOfIssue,
		unitСode,
		issuedBy,
		placeOfBirth,
	} = state;

	const totalPoints = useRef(getTotalPoints());
	const [currentPoints, setCurrentPoints] = useState(0);
	const [nextPoints, setNextPoints] = useState(0);

	const [isLoading, setIsLoading] = useState(false);
	// const secunds = useRef<any>(null);

	const copy = (aObject: any) => {
		const bObject: any = Array.isArray(aObject) ? [] : {};

		let value;
		for (const key in aObject) {
			value = aObject[key];
			bObject[key] = typeof value === 'object' ? copy(value) : value;
		}

		return bObject;
	};

	const { slug } = useParams();
	const { createDeal, updateDeal, postEncrypt } = useSend();

	const startLocalStorage = () => {
		const step = localStorage.getItem('step');

		if (step == null) return;

		const data = {
			...copy(step1Fields),
			...copy(step2Fields),
			...copy(step3Fields),
		};

		if (+step === 3) {
			data['organization']['value'] =
				localStorage.getItem('organization') || '';
			data['organization']['isValid'] = true;
			data['workPhone']['value'] = localStorage.getItem('workPhone') || '';
			data['workPhone']['isValid'] = true;
			data['positionWork']['value'] =
				localStorage.getItem('positionWork') || '';
			data['positionWork']['isValid'] = true;
			data['totalWorkExperience']['value'] =
				localStorage.getItem('totalWorkExperience') || '';
			data['totalWorkExperience']['isValid'] = true;
			data['familyStatus']['value'] =
				localStorage.getItem('familyStatus') || '';
			data['familyStatus']['isValid'] = true;
			data['amountChildren']['value'] =
				localStorage.getItem('amountChildren') || '';
			data['amountChildren']['isValid'] = true;
			data['loansPerMonth']['value'] =
				localStorage.getItem('loansPerMonth') || '';
			data['loansPerMonth']['isValid'] = true;
			data['placeResidence']['value'] =
				localStorage.getItem('placeResidence') || '';
			data['placeResidence']['isValid'] = true;
		}

		if (+step >= 2) {
			data['income']['value'] = localStorage.getItem('income') || '';
			data['income']['isValid'] = true;
			data['employment']['value'] = localStorage.getItem('employment') || '';
			data['employment']['isValid'] = true;
			data['methodConfirmingIncome']['value'] =
				localStorage.getItem('methodConfirmingIncome') || '';
			data['methodConfirmingIncome']['isValid'] = true;
			data['creditHistory']['value'] =
				localStorage.getItem('creditHistory') || '';
			data['creditHistory']['isValid'] = true;
			data['education']['value'] = localStorage.getItem('education') || '';
			data['education']['isValid'] = true;
			data['own']['value'] = localStorage.getItem('own') || '';
			data['own']['isValid'] = true;
			data['startWorkLastPlaceMonth']['value'] =
				localStorage.getItem('startWorkLastPlaceMonth') || '';
			data['startWorkLastPlaceMonth']['isValid'] = true;
			data['startWorkLastPlaceYear']['value'] =
				localStorage.getItem('startWorkLastPlaceYear') || '';
			data['startWorkLastPlaceYear']['isValid'] = true;
		}

		if (+step >= 1) {
			data['fio']['value'] = localStorage.getItem('fio') || '';
			data['fio']['isValid'] = true;
			data['sum']['value'] = localStorage.getItem('sum') || '';
			data['sum']['isValid'] = true;
			data['dateBirth']['value'] = localStorage.getItem('dateBirth') || '';
			data['dateBirth']['isValid'] = true;
			data['phone']['value'] = localStorage.getItem('phone') || '';
			data['phone']['isValid'] = true;
			data['email']['value'] = localStorage.getItem('email') || '';
			data['email']['isValid'] = true;
			data['city']['value'] = localStorage.getItem('city') || '';
			data['city']['isValid'] = true;
		}

		if (+step === 1) setStep(2);
		else if (+step === 2) setStep(3);
		else if (+step === 3) setStep(4);

		setFullStep(dispatch, data);
	};

	const linkData = (d: any) => {
		const data = {
			...copy(step1Fields),
			...copy(step2Fields),
			...copy(step3Fields),
		};

		const deal = d.data.deal;
		const contact = d.data.contact;

		localStorage.setItem('deaiId', deal.id);

		let step: 1 | 2 | 3 | 4 = 1;

		if (contact.fio) {
			step = 2;
			data['fio']['value'] = contact.fio;
			data['fio']['isValid'] = true;
			data['sum']['value'] = `${(+deal.summa).toLocaleString()}`;
			data['sum']['isValid'] = true;
			const birthday = contact.birthday.split(/[-T]/);
			birthday.length = 3;
			data['dateBirth']['value'] = birthday.reverse().join('.');
			data['dateBirth']['isValid'] = true;
			data['phone']['value'] = maskPhone(contact.phone);
			data['phone']['isValid'] = true;
			data['email']['value'] = contact.email;
			data['email']['isValid'] = true;
			data['city']['value'] = deal.city_credit;
			data['city']['isValid'] = true;

			if (deal.income) {
				step = 3;
				data['income']['value'] = deal.income;
				data['income']['isValid'] = true;
				data['employment']['value'] = deal.employment;
				data['employment']['isValid'] = true;
				data['methodConfirmingIncome']['value'] = deal.proof_income;
				data['methodConfirmingIncome']['isValid'] = true;
				data['creditHistory']['value'] = deal.credit_history;
				data['creditHistory']['isValid'] = true;
				data['education']['value'] = deal.education;
				data['education']['isValid'] = true;
				data['own']['value'] = deal.property;
				data['own']['isValid'] = true;
				data['startWorkLastPlaceMonth']['value'] = `${+deal.start_work.split(
					'-'
				)[1]}`;
				data['startWorkLastPlaceMonth']['isValid'] = true;
				data['startWorkLastPlaceYear']['value'] = deal.start_work.split('-')[0];
				data['startWorkLastPlaceYear']['isValid'] = true;

				if (deal.work_name) {
					step = 4;
					data['organization']['value'] = deal.work_name;
					data['organization']['isValid'] = true;
					data['workPhone']['value'] = maskPhone(deal.work_phone);
					data['workPhone']['isValid'] = true;
					data['positionWork']['value'] = deal.work_position;
					data['positionWork']['isValid'] = true;
					data['totalWorkExperience']['value'] = deal.experience;
					data['totalWorkExperience']['isValid'] = true;
					data['familyStatus']['value'] = deal.family_status;
					data['familyStatus']['isValid'] = true;
					data['amountChildren']['value'] = deal.children;
					data['amountChildren']['isValid'] = true;
					data['loansPerMonth']['value'] = deal.spending;
					data['loansPerMonth']['isValid'] = true;
					data['placeResidence']['value'] = contact.address;
					data['placeResidence']['isValid'] = true;
				}
			}
		}

		setFullStep(dispatch, data);
		setStep(step);
	};

	useEffect(() => {
		if (slug) {
			const formdata = new FormData();
			formdata.append('id', slug);
			postEncrypt(formdata).then((res) => linkData(res));
		} else startLocalStorage();
	}, []);

	useEffect(() => {
		let points = 0;
		let next = 0;
		for (const key in state) {
			if (state[key].isValid === true) points += state[key].points;
			else next = state[key].points;
		}
		if (points !== currentPoints) {
			setCurrentPoints(points);
		}
		setNextPoints(next);
	}, [state]);

	const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);

	const {
		maskSum,
		validationSum,
		maskDateBirth,
		validationDateBirth,
		maskPhone,
		validationPhone,
	} = useStep1();

	const onIsValid = (field: any) => {
		return field.isValid === false
			? field.errorMessages.default
			: field.isValid;
	};

	const onBackStep = (step: 1 | 2 | 3 | 4 | 5) => {
		setStep(step);
		// localStorage.setItem('step', `${step}`);

		scroll.scrollTo(formRef.current.offsetTop);
		animStep();
	};

	const animStep = () => {
		const target = formRef.current;
		target.classList.add('anim-opacity');
		setTimeout(() => {
			target.classList.remove('anim-opacity');
		}, 1000);
	};

	const onNextStep1 = async () => {
		let isNext = true;
		if (fio.isValid !== true) {
			isNext = false;
			setFio(dispatch, fio, fio.value, onIsValid(fio));
		}
		if (sum.isValid !== true) {
			isNext = false;
			const isValid = validationSum(sum.errorMessages, sum.value);
			setSum(dispatch, sum, maskSum(sum.value), isValid);
		}
		if (dateBirth.isValid !== true) {
			isNext = false;
			const isValid = validationDateBirth(
				dateBirth.errorMessages,
				dateBirth.value
			);
			setDateBirth(
				dispatch,
				dateBirth,
				maskDateBirth(dateBirth.value),
				isValid
			);
		}
		if (phone.isValid !== true) {
			isNext = false;
			const isValid = validationPhone(phone.errorMessages, phone.value);
			setPhone(dispatch, phone, maskPhone(phone.value), isValid);
		}
		if (email.isValid !== true) {
			isNext = false;
			setEmail(dispatch, email, email.value, onIsValid(email));
		}
		if (city.isValid !== true) {
			isNext = false;
			setCity(dispatch, city, city.value, onIsValid(city), city.isDadata);
		}
		if (checkbox1.isValid !== true) {
			isNext = false;
		}
		if (checkbox2.isValid !== true) {
			isNext = false;
		}

		if (isNext) {
			localStorage.setItem('step', '1');
			localStorage.setItem('fio', fio.value);
			localStorage.setItem('sum', sum.value);
			localStorage.setItem('dateBirth', dateBirth.value);
			localStorage.setItem('phone', phone.value);
			localStorage.setItem('email', email.value);
			localStorage.setItem('city', city.value);

			const w: any = window;
			w.ym(90562195, 'reachGoal', 'step1');
			setStep(2);
			scroll.scrollTo(formRef.current.offsetTop);

			animStep();

			const formData: any = new FormData();

			// eslint-disable-next-line no-irregular-whitespace
			formData.append('summa', `${sum.value.replace(/ /g, '')}`);
			formData.append('fio', `${fio.value}`);

			const arrFio = fio.value.split(' ');
			const newDataFio = {
				firstname: arrFio[1],
				surname: arrFio[0],
				patronymic: `${arrFio[2]} ${arrFio.length === 4 ? arrFio[3] : ''}`,
			};
			const options = {
				method: 'POST',
				mode: 'cors' as RequestMode,
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					Authorization: 'Token ' + 'f7cd59d270fa2905f74cf38f74981c3abbe346c8',
				},
				body: JSON.stringify({ query: fio.value, count: 1 }),
			};
			await fetch(
				'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio',
				options
			)
				.then((response) => response.text())
				.then((result) => {
					const d = JSON.parse(result);
					if (
						d.suggestions &&
						d.suggestions.length === 1 &&
						d.suggestions[0]?.data?.name &&
						d.suggestions[0]?.data?.surname &&
						d.suggestions[0]?.data?.patronymic
					) {
						const dFio = d.suggestions[0].data;
						newDataFio['firstname'] = dFio.name;
						newDataFio['surname'] = dFio.surname;
						newDataFio['patronymic'] = dFio.patronymic;
					}
				})
				.catch((error) => console.log('error', error));

			formData.append('firstname', `${newDataFio.firstname}`);
			formData.append('surname', `${newDataFio.surname}`);
			formData.append('patronymic', `${newDataFio.patronymic}`);
			const arrDate = dateBirth.value.split('.');
			formData.append('birthdate', `${arrDate[2]}-${arrDate[1]}-${arrDate[0]}`);
			formData.append('phone', `${phone.value.replace(/[ ()-]/g, '')}`);
			formData.append('email', `${email.value}`);
			formData.append('city_credit', `${city.value}`);

			const deaiId = localStorage.getItem('deaiId');
			if (deaiId) {
				formData.append('step', '1');
				formData.append('id', +deaiId);
				updateDeal(formData);
			} else {
				createDeal(formData).then((res) => {
					localStorage.setItem('deaiId', res?.data?.result?.ID);
				});
			}
		}
	};

	const onNextStep2 = () => {
		let isNext = true;

		if (income.value === 'none') {
			isNext = false;
			setIncome(dispatch, income, income.value, income.errorMessages.choice);
		}
		if (employment.value === 'none') {
			isNext = false;
			setEmployment(
				dispatch,
				employment,
				employment.value,
				employment.errorMessages.choice
			);
		}
		if (methodConfirmingIncome.value === 'none') {
			isNext = false;
			setMethodConfirmingIncome(
				dispatch,
				methodConfirmingIncome,
				methodConfirmingIncome.value,
				methodConfirmingIncome.errorMessages.choice
			);
		}
		if (creditHistory.value === 'none') {
			isNext = false;
			setCreditHistory(
				dispatch,
				creditHistory,
				creditHistory.value,
				creditHistory.errorMessages.choice
			);
		}
		if (education.value === 'none') {
			isNext = false;
			setEducation(
				dispatch,
				education,
				education.value,
				education.errorMessages.choice
			);
		}
		if (own.value === 'none') {
			isNext = false;
			setOwn(dispatch, own, own.value, own.errorMessages.choice);
		}
		if (startWorkLastPlaceMonth.value === 'none') {
			isNext = false;
			setStartWorkLastPlaceMonth(
				dispatch,
				startWorkLastPlaceMonth,
				startWorkLastPlaceMonth.value,
				startWorkLastPlaceMonth.errorMessages.choice
			);
		}
		if (startWorkLastPlaceYear.value === 'none') {
			isNext = false;
			setStartWorkLastPlaceYear(
				dispatch,
				startWorkLastPlaceYear,
				startWorkLastPlaceYear.value,
				startWorkLastPlaceYear.errorMessages.choice
			);
		}

		if (isNext) {
			localStorage.setItem('step', '2');

			localStorage.setItem('income', income.value);
			localStorage.setItem('employment', employment.value);
			localStorage.setItem(
				'methodConfirmingIncome',
				methodConfirmingIncome.value
			);
			localStorage.setItem('creditHistory', creditHistory.value);
			localStorage.setItem('education', education.value);
			localStorage.setItem('own', own.value);
			localStorage.setItem(
				'startWorkLastPlaceMonth',
				startWorkLastPlaceMonth.value
			);
			localStorage.setItem(
				'startWorkLastPlaceYear',
				startWorkLastPlaceYear.value
			);

			const formData: any = new FormData();

			const deaiId = localStorage.getItem('deaiId');
			formData.append('step', '2');
			formData.append('id', deaiId ? +deaiId : '');

			formData.append('income', `${income.value}`);
			formData.append('employment', `${employment.value}`);
			formData.append('proof_income', `${methodConfirmingIncome.value}`);
			formData.append('credit_history', `${creditHistory.value}`);
			formData.append('education', `${education.value}`);
			formData.append('property', `${own.value}`);
			formData.append(
				'start_work',
				`${startWorkLastPlaceYear.value}-${startWorkLastPlaceMonth.value}-01`
			);

			updateDeal(formData);

			const w: any = window;
			w.ym(90562195, 'reachGoal', 'step2');
			setStep(3);
			scroll.scrollTo(formRef.current.offsetTop);
			animStep();
		}
	};

	const onNextStep3 = async () => {
		let isNext = true;

		if (organization.isValid !== true) {
			isNext = false;
			setOrganization(
				dispatch,
				organization,
				organization.value,
				onIsValid(organization),
				organization.isDadata
			);
		}

		if (workPhone.isValid !== true) {
			isNext = false;
			setWorkPhone(dispatch, workPhone, workPhone.value, onIsValid(workPhone));
		}

		if (positionWork.value === 'none') {
			isNext = false;
			setPositionWork(
				dispatch,
				positionWork,
				positionWork.value,
				positionWork.errorMessages.choice
			);
		}
		if (totalWorkExperience.value === 'none') {
			isNext = false;
			setTotalWorkExperience(
				dispatch,
				totalWorkExperience,
				totalWorkExperience.value,
				totalWorkExperience.errorMessages.choice
			);
		}
		if (familyStatus.value === 'none') {
			isNext = false;
			setFamilyStatus(
				dispatch,
				familyStatus,
				familyStatus.value,
				familyStatus.errorMessages.choice
			);
		}

		if (amountChildren.value === '') {
			isNext = false;
			setAmountChildren(
				dispatch,
				amountChildren,
				amountChildren.value,
				amountChildren.errorMessages.default
			);
		} else {
			setAmountChildren(dispatch, amountChildren, amountChildren.value, true);
		}

		if (loansPerMonth.value === '') {
			isNext = false;
			setLoansPerMonth(
				dispatch,
				loansPerMonth,
				loansPerMonth.value,
				loansPerMonth.errorMessages.default
			);
		} else {
			setLoansPerMonth(dispatch, loansPerMonth, loansPerMonth.value, true);
		}

		if (placeResidence.isValid !== true) {
			isNext = false;
			setPlaceResidence(
				dispatch,
				placeResidence,
				placeResidence.value,
				onIsValid(placeResidence),
				placeResidence.isDadata
			);
		}

		if (isNext) {
			localStorage.setItem('step', '3');
			localStorage.setItem('organization', organization.value);
			localStorage.setItem('workPhone', workPhone.value);
			localStorage.setItem('positionWork', positionWork.value);
			localStorage.setItem('totalWorkExperience', totalWorkExperience.value);
			localStorage.setItem('familyStatus', familyStatus.value);
			localStorage.setItem('amountChildren', amountChildren.value);
			localStorage.setItem('loansPerMonth', loansPerMonth.value);
			localStorage.setItem('placeResidence', placeResidence.value);

			// const w: any = window;
			// w.ym(90562195, 'reachGoal', 'step3');
			// setStep(4);
			// scroll.scrollTo(formRef.current.offsetTop);
			// animStep();

			const formData: any = new FormData();

			const deaiId = localStorage.getItem('deaiId');
			formData.append('step', '3');
			formData.append('id', deaiId ? +deaiId : '');

			formData.append('work_name', `${organization.value}`);

			const newFormData1 = {
				work_inn: '',
				work_head: '',
				work_city: '',
				work_street: '',
				work_house: '',
			};

			setIsLoading(true);
			const secundsBefore: any = new Date();
			animStep();
			scroll.scrollTo(formRef.current.offsetTop);
			let options = {
				method: 'POST',
				mode: 'cors' as RequestMode,
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					Authorization: 'Token ' + 'f7cd59d270fa2905f74cf38f74981c3abbe346c8',
				},
				body: JSON.stringify({ query: organization.value, count: 1 }),
			};
			await fetch(
				'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party',
				options
			)
				.then((response) => response.text())
				.then((result) => {
					const d = JSON.parse(result);
					newFormData1['work_inn'] = d?.suggestions[0]?.data?.inn;
					newFormData1['work_head'] =
						d?.suggestions[0]?.data?.management?.name ||
						d?.suggestions[0]?.data?.name?.full;
					newFormData1['work_city'] =
						d?.suggestions[0]?.data?.address?.data?.city;
					newFormData1['work_street'] =
						d?.suggestions[0]?.data?.address?.data?.street;
					newFormData1['work_house'] =
						d?.suggestions[0]?.data?.address?.data?.house;
				})
				.catch((error) => console.log('error', error));

			formData.append('work_inn', `${newFormData1.work_inn}`);
			formData.append('work_head', `${newFormData1.work_head}`);
			formData.append('work_city', `${newFormData1.work_city}`);
			formData.append('work_street', `${newFormData1.work_street}`);
			formData.append('work_house', `${newFormData1.work_house}`);

			formData.append('work_phone', `${workPhone.value}`);
			formData.append('work_position', `${positionWork.value}`);
			formData.append('experience', `${totalWorkExperience.value}`);
			formData.append('family_status', `${familyStatus.value}`);
			formData.append('children', `${amountChildren.value}`);
			formData.append('spending', `${loansPerMonth.value}`);
			formData.append('address', `${placeResidence.value}`);

			const newFormData2 = {
				registration_code: '',
				registration_region: '',
				registration_city: '',
				registration_street: '',
				registration_home: '',
			};

			options = {
				method: 'POST',
				mode: 'cors' as RequestMode,
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					Authorization: 'Token ' + 'f7cd59d270fa2905f74cf38f74981c3abbe346c8',
				},
				body: JSON.stringify({ query: placeResidence.value, count: 1 }),
			};
			await fetch(
				'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
				options
			)
				.then((response) => response.text())
				.then((result) => {
					const d = JSON.parse(result);
					newFormData2['registration_code'] =
						d?.suggestions[0]?.data?.city_kladr_id;
					newFormData2['registration_region'] =
						d?.suggestions[0]?.data?.region_with_type;
					newFormData2['registration_city'] =
						d?.suggestions[0]?.data?.city ||
						d?.suggestions[0]?.data?.settlement;
					newFormData2['registration_street'] = d?.suggestions[0]?.data?.street;
					newFormData2['registration_home'] = d?.suggestions[0]?.data?.house;
				})
				.catch((error) => console.log('error', error));

			formData.append('registration_code', `${newFormData2.registration_code}`);
			formData.append(
				'registration_region',
				`${newFormData2.registration_region}`
			);
			formData.append('registration_city', `${newFormData2.registration_city}`);
			formData.append(
				'registration_street',
				`${newFormData2.registration_street}`
			);
			formData.append('registration_home', `${newFormData2.registration_home}`);

			const w: any = window;
			w.ym(90562195, 'reachGoal', 'step3');
			updateDeal(formData).then(() => {
				const secundsAfter: any = new Date();
				const diff: any = secundsAfter - secundsBefore;
				if (diff / 1000 < 2) {
					setTimeout(() => {
						setIsLoading(false);
						setStep(4);
						scroll.scrollTo(formRef.current.offsetTop);
						animStep();
					}, 2 - diff / 1000);
				} else {
					setIsLoading(false);
					setStep(4);
					scroll.scrollTo(formRef.current.offsetTop);
					animStep();
				}
			});
		}
	};

	const onNextStep4 = () => {
		let isNext = true;

		if (passportNumberSeries.isValid !== true) {
			isNext = false;
			setPassportNumberSeries(
				dispatch,
				passportNumberSeries,
				passportNumberSeries.value,
				onIsValid(passportNumberSeries)
			);
		}

		if (dateOfIssue.isValid !== true) {
			isNext = false;
			setDateOfIssue(
				dispatch,
				dateOfIssue,
				dateOfIssue.value,
				onIsValid(dateOfIssue)
			);
		}

		if (unitСode.isValid !== true) {
			isNext = false;
			setUnitСode(dispatch, unitСode, unitСode.value, onIsValid(unitСode));
		}

		if (issuedBy.isValid !== true) {
			isNext = false;
			setIssuedBy(dispatch, issuedBy, issuedBy.value, onIsValid(issuedBy));
		}

		if (placeOfBirth.isValid !== true) {
			isNext = false;
			setPlaceOfBirth(
				dispatch,
				placeOfBirth,
				placeOfBirth.value,
				onIsValid(placeOfBirth),
				placeOfBirth.isDadata
			);
		}

		if (isNext) {
			const formData: any = new FormData();

			const deaiId = localStorage.getItem('deaiId');
			formData.append('step', '4');
			formData.append('id', deaiId ? +deaiId : '');

			formData.append('passport', `${passportNumberSeries.value}`);
			const formateDate = dateOfIssue.value.split('.');
			formData.append(
				'date_passport',
				`${formateDate[2]}-${formateDate[1]}-${formateDate[0]}`
			);
			formData.append('code', `${unitСode.value}`);
			formData.append('code_name', `${issuedBy.value}`);
			formData.append('passport_place', `${placeOfBirth.value}`);

			const w: any = window;
			w.ym(90562195, 'reachGoal', 'step4');

			setStep(5);
			scroll.scrollTo(formRef.current.offsetTop);
			animStep();

			updateDeal(formData).then((value) => {
				localStorage.setItem('step', 'null');
				if (value?.data?.status === 'redirect') {
					const url = value?.data?.result;
					window.location.href = url;
				} else {
					setIsLoading(true);
					const win = window.open('/thanks', '_blank');
					win?.focus();
					window.location.href = '/showcase';
				}
			});
		}
	};

	const stepRender = (step: 1 | 2 | 3 | 4 | 5) => {
		if (step === 1) return <FormStep1 setStep={onNextStep1} />;
		if (step === 2)
			return <FormStep2 setStep={onNextStep2} setBack={onBackStep} />;
		if (step === 3)
			return <FormStep3 setStep={onNextStep3} setBack={onBackStep} />;
		if (step === 4)
			return <FormStep4 setStep={onNextStep4} setBack={onBackStep} />;
	};

	const stepView = stepRender(step);

	const onSubmit = (e: any) => {
		e.preventDefault();

		if (step === 1) onNextStep1();
		else if (step === 2) onNextStep2();
		else if (step === 3) onNextStep3();
		else if (step === 4) onNextStep4();
	};

	const contentView =
		step === 5 ? (
			<FormStep5View isLoading={isLoading} />
		) : (
			<FormQuestView
				isLoading={isLoading}
				onSubmit={onSubmit}
				formRef={formRef}
				currentPoints={currentPoints}
				nextPoints={nextPoints}
				totalPoints={totalPoints}
			>
				{stepView}
			</FormQuestView>
		);

	return contentView;
};

const FormQuestView = ({
	isLoading,
	onSubmit,
	formRef,
	currentPoints,
	nextPoints,
	totalPoints,
	children,
}: any) => {
	return (
		<form
			id="form-quest"
			className="form-quest"
			onSubmit={onSubmit}
			ref={formRef}
		>
			{isLoading ? (
				<FormStep5MiniView isLoading={isLoading} />
			) : (
				<div className="form-quest__content">
					<h3 className="form-quest__title">
						ПОЛУЧИТЕ ОДОБРЕНИЕ КРЕДИТА ЗА 30 МИНУТ
					</h3>
					<span className="form-quest__text">
						Заполните анкету полностью, чтобы получить максимальное количество
						предложений!
					</span>
					<Progress
						currentPoints={currentPoints}
						nextPoints={nextPoints}
						totalPoints={totalPoints.current}
					/>
					{children}
				</div>
			)}
		</form>
	);
};

const override: CSSProperties = {
	display: 'block',
	margin: '20px auto 0',
};

const FormStep5View = ({ isLoading }: any) => {
	return (
		<form id="form-quest" className="form-quest">
			<div className="form-quest__content">
				<h3 className="form-quest__title">ЗАГРУЗКА...</h3>
				<ClockLoader
					color="#21ba72"
					loading={true}
					cssOverride={override}
					size={100}
					aria-label="Загрузка"
					data-testid="loader"
				/>
			</div>
		</form>
	);
};

const FormStep5MiniView = ({ isLoading }: any) => {
	return (
		<div className="form-quest__content">
			<h3 className="form-quest__title">ЗАГРУЗКА...</h3>
			<ClockLoader
				color="#21ba72"
				loading={true}
				cssOverride={override}
				size={100}
				aria-label="Загрузка"
				data-testid="loader"
			/>
		</div>
	);
};

export default FormQuest;
